/* ===== Interlingua · motor de lección ===== */
(function(){
"use strict";
const IL = window.IL;
const $ = s => document.getElementById(String(s).replace(/^#/, ""));

let L = null;

function barajar(a){
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const t = r[i]; r[i] = r[j]; r[j] = t;
  }
  return r;
}
function acepta(r, alts, dicho){
  const d = IL.normaliza(dicho);
  if (d === IL.normaliza(r)) return true;
  return (alts || []).some(a => IL.normaliza(a) === d);
}
function guardaRepaso(lecId, idx){
  const ya = IL.S.repaso.some(r => r.lec === lecId && r.idx === idx);
  if (!ya){ IL.S.repaso.push({ lec: lecId, idx: idx }); IL.guardar(); }
}
function quitaRepaso(lecId, idx){
  const antes = IL.S.repaso.length;
  IL.S.repaso = IL.S.repaso.filter(r => !(r.lec === lecId && r.idx === idx));
  if (IL.S.repaso.length !== antes) IL.guardar();
}

/* ---------- arranque ---------- */
function iniciarLeccion(id){
  const lec = IL.getLec(id);
  if (!lec || !IL.desbloqueada(id)) return;      // doble candado: ni por código
  L = { lec: lec, esRepaso: false, i: 0, fase: "regla", comprobado: false, sel: null,
        armado: [], ok: 0, total: lec.ejercicios.length,
        lista: lec.ejercicios.map((ex, k) => ({ ex: ex, lecId: lec.id, idx: k })) };
  $("#contador").textContent = "1/" + L.total;
  IL.mostrar("leccion");
  pintarRegla();
}

function iniciarRepaso(){
  if (!IL.S.repaso.length) return;
  const items = IL.S.repaso.slice(0, 10).map(r => {
    const lec = IL.getLec(r.lec);
    if (!lec) return null;
    const ex = lec.ejercicios[r.idx];
    return ex ? { ex: ex, lecId: r.lec, idx: r.idx, lecTit: lec.titulo } : null;
  }).filter(Boolean);
  if (!items.length){ IL.S.repaso = []; IL.guardar(); IL.pintarMapa(); return; }

  L = { lec: { id: "__repaso", titulo: "Repaso", emoji: "🔁", regla: {
        t: "Repaso de lo que fallaste",
        p: "Estas son preguntas que ya te salieron mal. Si aciertas, salen de la lista.",
        ej: [] } },
        esRepaso: true, i: 0, fase: "regla", comprobado: false, sel: null,
        armado: [], ok: 0, total: items.length, lista: items };
  $("#contador").textContent = "1/" + L.total;
  IL.mostrar("leccion");
  pintarRegla();
}

/* ---------- pantalla de regla ---------- */
function pintarRegla(){
  L.fase = "regla"; L.comprobado = false;
  $("#progIn").style.width = "0%";
  $("#progBar").setAttribute("aria-valuenow", "0");
  $("#feedback").className = "feedback"; $("#feedback").innerHTML = "";
  const r = L.lec.regla || { t: L.lec.titulo, p: "", ej: [] };
  let h = '<div class="regla"><h3>' + r.t + '</h3>';
  if (r.p) h += '<p>' + r.p + '</p>';
  if (r.ej && r.ej.length){
    h += '<ul>' + r.ej.map(e => '<li>' + e + '</li>').join('') + '</ul>';
  }
  h += '</div>';
  if (L.esRepaso) h += '<p class="tipRegla">Repaso: ' + L.total +
        (L.total === 1 ? ' pregunta pendiente.' : ' preguntas pendientes.') + '</p>';
  $("#ejercicio").innerHTML = h;
  $("#ejercicio").scrollTop = 0;
  const b = $("#accion");
  b.textContent = L.esRepaso ? "Empezar el repaso" : "Empezar los ejercicios";
  b.className = "btn"; b.disabled = false;
}

/* ---------- ejercicios ---------- */
function pintarEjercicio(){
  const item = L.lista[L.i], ex = item.ex;
  L.fase = "ejercicio"; L.comprobado = false; L.sel = null; L.armado = [];

  $("#contador").textContent = (L.i + 1) + "/" + L.total;
  const pct = Math.round(L.i / L.total * 100);
  $("#progIn").style.width = pct + "%";
  $("#progBar").setAttribute("aria-valuenow", String(pct));
  $("#feedback").className = "feedback"; $("#feedback").innerHTML = "";

  let h = '<div class="preg">' + ex.p + '</div>';

  if (ex.audio){
    h += '<div class="audioAprox"><button type="button" id="btnAudio">🔊 Escuchar</button>' +
         '<small>Pronunciación aproximada (voz italiana). No se evalúa.</small></div>';
  }

  if (ex.t === "e"){
    const orden = barajar(ex.op.map((t, k) => k));
    L.opciones = orden.map(k => ({ txt: ex.op[k], ok: k === ex.c }));
    h += '<div class="opciones" role="group">';
    L.opciones.forEach((o, k) => {
      h += '<button class="opcion" data-op="' + k + '"><span class="letra" aria-hidden="true">' +
           "ABCD"[k] + '</span>' + o.txt + '</button>';
    });
    h += '</div>';
  }

  if (ex.t === "c"){
    h += '<div class="enunciado">«' + ex.es + '»</div>';
    h += '<div class="lineaResp" id="linea" aria-label="Tu frase"></div>';
    h += '<div style="height:18px"></div><div class="banco" id="banco"></div>';
  }

  if (ex.t === "w"){
    h += '<div class="enunciado">«' + ex.es + '»</div>';
    h += '<input class="escribir" id="txt" autocomplete="off" autocapitalize="off" spellcheck="false"' +
         ' aria-label="Escribe la respuesta" placeholder="' + (ex.ph || "") + '">';
  }

  $("#ejercicio").innerHTML = h;
  $("#ejercicio").scrollTop = 0;

  const b = $("#accion");
  b.textContent = "Comprobar"; b.className = "btn"; b.disabled = true;

  if (ex.audio){
    const ab = $("#btnAudio");
    if (ab) ab.addEventListener("click", () => IL.hablar(ex.audio));
  }
  if (ex.t === "e"){
    $("#ejercicio").querySelectorAll(".opcion").forEach(x => {
      x.addEventListener("click", () => {
        if (L.comprobado) return;
        $("#ejercicio").querySelectorAll(".opcion").forEach(y => y.classList.remove("sel"));
        x.classList.add("sel");
        L.sel = parseInt(x.dataset.op, 10);
        b.disabled = false;
      });
    });
  }
  if (ex.t === "c") pintarBanco();
  if (ex.t === "w"){
    const t = $("#txt");
    t.addEventListener("input", () => { b.disabled = t.value.trim().length === 0; });
    t.addEventListener("keydown", e => { if (e.key === "Enter" && !b.disabled) b.click(); });
    setTimeout(() => t.focus(), 120);
  }
}

function pintarBanco(){
  const ex = L.lista[L.i].ex;
  const banco = $("#banco"), linea = $("#linea");
  if (!banco || !linea) return;
  const fichas = barajar(ex.banco.map((t, k) => ({ t: t, k: k })));
  banco.innerHTML = "";

  fichas.forEach(f => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "ficha"; b.textContent = f.t;
    b.addEventListener("click", () => {
      if (L.comprobado) return;
      b.classList.add("usada");
      L.armado.push({ t: f.t, nodo: b });
      pintarLinea();
    });
    banco.appendChild(b);
  });

  function pintarLinea(){
    linea.innerHTML = "";
    L.armado.forEach((f, k) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ficha"; b.textContent = f.t;
      b.addEventListener("click", () => {
        if (L.comprobado) return;
        L.armado.splice(k, 1);
        if (f.nodo) f.nodo.classList.remove("usada");
        pintarLinea();
      });
      linea.appendChild(b);
    });
    $("#accion").disabled = L.armado.length === 0;
  }
}

/* ---------- comprobar ---------- */
function comprobar(){
  const item = L.lista[L.i], ex = item.ex;
  const fb = $("#feedback");
  let bien = false, correcta = "";

  if (ex.t === "e"){
    bien = !!(L.opciones[L.sel] && L.opciones[L.sel].ok);
    correcta = L.opciones.find(o => o.ok).txt;
    $("#ejercicio").querySelectorAll(".opcion").forEach((x, k) => {
      if (L.opciones[k].ok) x.classList.add("ok");
      else if (x.classList.contains("sel")) x.classList.add("mal");
      x.classList.remove("sel");
    });
  }
  if (ex.t === "c"){
    const dicho = L.armado.map(f => f.t).join(" ");
    bien = acepta(ex.r, ex.alt, dicho);
    correcta = ex.r;
  }
  if (ex.t === "w"){
    const t = $("#txt");
    bien = acepta(ex.r, ex.alt, t.value);
    correcta = ex.r;
    t.classList.add(bien ? "ok" : "mal");
    t.disabled = true;
  }

  L.comprobado = true;
  const explica = '<div class="explica"><b>Por qué:</b> ' +
    (ex.por || ("La respuesta correcta es «" + correcta + "».")) + '</div>';

  if (bien){
    L.ok++;
    if (L.esRepaso) quitaRepaso(item.lecId, item.idx);
    fb.className = "feedback ok";
    fb.innerHTML = "¡Correcto! ✓";
  } else {
    if (!L.esRepaso) guardaRepaso(item.lecId, item.idx);
    fb.className = "feedback mal";
    fb.innerHTML = "Casi. Era: <b>" + correcta + "</b>" + explica;
  }

  const b = $("#accion");
  b.textContent = (L.i >= L.total - 1) ? "Terminar" : "Continuar";
  b.className = "btn"; b.disabled = false;
}

function siguiente(){
  L.i++;
  if (L.i >= L.total) return acabar();
  pintarEjercicio();
}

/* ---------- final ---------- */
function acabar(){
  const prec = Math.round(L.ok / L.total * 100);
  const pend = IL.S.repaso.length;

  if (!L.esRepaso){
    if (!IL.hecha(L.lec.id)) IL.S.hechas.push(L.lec.id);
    IL.S.xp += 10;
    const h = IL.hoy();
    if (IL.S.ultimo !== h){
      IL.S.racha = (IL.S.ultimo === IL.ayer()) ? IL.S.racha + 1 : 1;
      IL.S.ultimo = h;
    }
  } else {
    IL.S.xp += 3;
  }
  IL.guardar();

  $("#finIco").textContent = prec >= 80 ? "🏆" : "📘";
  $("#finTit").textContent = L.esRepaso ? "Repaso terminado" : "¡Lección completada!";
  $("#finSub").textContent = prec >= 80
    ? "Bien. Vuelve mañana para que no se te olvide."
    : "Las que fallaste ya están en tu lista de repaso.";
  $("#finPrec").textContent = prec + "%";
  $("#finRepaso").textContent = pend;
  $("#finRacha").textContent = IL.S.racha;
  $("#continuar").textContent = "Volver a la ruta";
  $("#continuar").onclick = function(){ IL.pintarMapa(); };
  IL.mostrar("fin");
}

/* ---------- UN SOLO manejador de clic ---------- */
$("#accion").addEventListener("click", function(){
  if (!L) return;
  if (L.fase === "regla"){ pintarEjercicio(); return; }   // Empezar
  if (!L.comprobado){ comprobar(); return; }              // Comprobar
  siguiente();                                            // Continuar
});
$("#salir").addEventListener("click", function(){ L = null; IL.pintarMapa(); });

IL.iniciarLeccion = iniciarLeccion;
IL.iniciarRepaso = iniciarRepaso;
})();
