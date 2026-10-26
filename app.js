/* ===== Interlingua · motor ===== */
(function(){
"use strict";

const KEY = "interlingua_v1";
const $ = id => document.getElementById(id);

let S = { hechas: [], xp: 0, gemas: 0, racha: 0, ultimo: "" };
try { const g = JSON.parse(localStorage.getItem(KEY)); if (g) S = Object.assign(S, g); } catch(e){}
const guardar = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} };

/* ---------- utilidades ---------- */
function normaliza(t){
  return String(t||"")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[¿?¡!.,;:"«»]/g,"")
    .replace(/\s+/g," ").trim();
}
const hoy = () => new Date().toISOString().slice(0,10);
function ayer(){
  const d = new Date(); d.setDate(d.getDate()-1);
  return d.toISOString().slice(0,10);
}
function hablar(texto){
  try{
    if(!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    const voces = speechSynthesis.getVoices();
    const it = voces.find(v => /it(-|_)IT/i.test(v.lang));
    const es = voces.find(v => /es(-|_)ES/i.test(v.lang));
    if (it) { u.voice = it; u.lang = "it-IT"; }
    else if (es) { u.voice = es; u.lang = "es-ES"; }
    u.rate = 0.85;
    speechSynthesis.speak(u);
  }catch(e){}
}
function mostrar(id){
  ["ruta","leccion","fin"].forEach(p => $(p).classList.toggle("activa", p === id));
}

/* ---------- progreso ---------- */
const todas = () => CURSO.flatMap(u => u.lecciones);
function hecha(id){ return S.hechas.indexOf(id) >= 0; }
function desbloqueada(id){
  const t = todas();
  const i = t.findIndex(l => l.id === id);
  if (i <= 0) return true;
  return hecha(t[i-1].id);
}

/* ---------- MAPA ---------- */
function pintarMapa(){
  $("racha").textContent = S.racha;
  $("xp").textContent = S.xp;
  $("gemas").textContent = S.gemas;

  let h = "";
  CURSO.forEach((u, ui) => {
    const hechasU = u.lecciones.filter(l => hecha(l.id)).length;
    h += '<div class="unidad">';
    h += '<div class="unidadTit">' + u.titulo + ' · ' + hechasU + '/' + u.lecciones.length + '</div>';
    h += '<div class="unidadSub">' + u.sub + '</div>';
    h += '<div class="nodos">';
    u.lecciones.forEach((l, li) => {
      const ok = hecha(l.id);
      const libre = desbloqueada(l.id);
      const cls = ok ? "hecho" : (libre ? "act" : "bloq");
      const lado = (li % 2 === 0) ? "izq" : "der";
      const ico = ok ? "✓" : (libre ? l.emoji : "🔒");
      h += '<div class="nodo ' + lado + '">';
      h += '<button class="circulo ' + cls + '" data-lec="' + l.id + '">' + ico + '</button>';
      h += '<div class="nodoInfo"><b>' + l.titulo + '</b><span>' + (ok ? "Completada" : (libre ? "Empezar" : "Bloqueada")) + '</span></div>';
      h += '</div>';
    });
    h += '</div></div>';
  });
  $("mapa").innerHTML = h;

  $("mapa").querySelectorAll(".circulo").forEach(b => {
    b.addEventListener("click", () => {
      if (b.classList.contains("bloq")) return;
      iniciarLeccion(b.dataset.lec);
    });
  });
  mostrar("ruta");
}

/* ---------- LECCION ---------- */
let L = null;

function iniciarLeccion(id){
  const lec = todas().find(l => l.id === id);
  if (!lec) return;
  L = { lec: lec, idx: 0, vidas: 3, ok: 0, total: lec.ejercicios.length, comprobado: false, sel: null, armado: [] };
  $("vidas").textContent = "❤❤❤";
  mostrar("leccion");
  pintarEjercicio();
}

function pintarEjercicio(){
  const ex = L.lec.ejercicios[L.idx];
  L.comprobado = false; L.sel = null; L.armado = [];
  $("progIn").style.width = (L.idx / L.total * 100) + "%";
  $("feedback").className = "feedback"; $("feedback").textContent = "";
  const btn = $("accion"); btn.textContent = "Comprobar"; btn.disabled = true; btn.className = "btn";

  let h = '<div class="preg">' + ex.p + '</div>';

  if (ex.t === "e" || ex.t === "a"){
    if (ex.t === "a"){
      h += '<button class="audioBtn" id="btnAudio">🔊 Escuchar</button>';
      h += '<div class="preg">Elige lo que oíste</div>';
    }
    h += '<div class="opciones">';
    ex.op.forEach((o,i) => {
      h += '<button class="opcion" data-op="' + i + '"><span class="letra">' + "ABCD"[i] + '</span>' + o + '</button>';
    });
    h += '</div>';
  }

  if (ex.t === "c"){
    h += '<div class="enunciado">«' + ex.es + '»</div>';
    h += '<div class="lineaResp" id="linea"></div>';
    h += '<div style="height:18px"></div><div class="banco" id="banco"></div>';
  }

  if (ex.t === "w"){
    h += '<div class="enunciado">«' + ex.es + '»</div>';
    h += '<input class="escribir" id="txt" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + (ex.ph||"") + '">';
  }

  $("ejercicio").innerHTML = h;
  $("ejercicio").scrollTop = 0;

  if (ex.t === "a"){
    $("btnAudio").addEventListener("click", () => hablar(ex.texto));
    setTimeout(() => hablar(ex.texto), 350);
  }
  if (ex.t === "e" || ex.t === "a"){
    $("ejercicio").querySelectorAll(".opcion").forEach(b => {
      b.addEventListener("click", () => {
        if (L.comprobado) return;
        $("ejercicio").querySelectorAll(".opcion").forEach(x => x.classList.remove("sel"));
        b.classList.add("sel");
        L.sel = parseInt(b.dataset.op, 10);
        $("accion").disabled = false;
      });
    });
  }
  if (ex.t === "c") pintarBanco();
  if (ex.t === "w"){
    const t = $("txt");
    t.addEventListener("input", () => { $("accion").disabled = t.value.trim().length === 0; });
    t.addEventListener("keydown", e => { if (e.key === "Enter" && !$("accion").disabled) comprobar(); });
    setTimeout(() => t.focus(), 120);
  }
}

function pintarBanco(){
  const ex = L.lec.ejercicios[L.idx];
  const banco = $("banco"), linea = $("linea");
  banco.innerHTML = ""; linea.innerHTML = "";

  ex.banco.forEach((pal, i) => {
    const b = document.createElement("button");
    b.className = "ficha"; b.textContent = pal; b.dataset.i = i;
    b.addEventListener("click", () => {
      if (L.comprobado) return;
      b.classList.add("usada");
      L.armado.push({ pal: pal, i: i });
      pintarLinea();
    });
    banco.appendChild(b);
  });

  function pintarLinea(){
    linea.innerHTML = "";
    L.armado.forEach((f, k) => {
      const b = document.createElement("button");
      b.className = "ficha"; b.textContent = f.pal;
      b.addEventListener("click", () => {
        if (L.comprobado) return;
        L.armado.splice(k,1);
        const orig = banco.querySelector('.ficha[data-i="' + f.i + '"]');
        if (orig) orig.classList.remove("usada");
        pintarLinea();
      });
      linea.appendChild(b);
    });
    $("accion").disabled = L.armado.length === 0;
  }
}

function comprobar(){
  const ex = L.lec.ejercicios[L.idx];
  const fb = $("feedback");
  let bien = false, correcto = "";

  if (ex.t === "e" || ex.t === "a"){
    bien = (L.sel === ex.c);
    correcto = ex.op[ex.c];
    $("ejercicio").querySelectorAll(".opcion").forEach((b,i) => {
      if (i === ex.c) b.classList.add("ok");
      else if (b.classList.contains("sel")) b.classList.add("mal");
      b.classList.remove("sel");
    });
  }
  if (ex.t === "c"){
    const dicho = normaliza(L.armado.map(f => f.pal).join(" "));
    bien = (dicho === normaliza(ex.r));
    correcto = ex.r;
  }
  if (ex.t === "w"){
    const t = $("txt");
    bien = (normaliza(t.value) === normaliza(ex.r));
    correcto = ex.r;
    t.classList.add(bien ? "ok" : "mal");
    t.disabled = true;
  }

  L.comprobado = true;
  if (bien){ L.ok++; fb.className = "feedback ok"; fb.innerHTML = "¡Correcto! 🎉"; }
  else {
    L.vidas--;
    $("vidas").textContent = "❤".repeat(Math.max(0,L.vidas)) + "🖤".repeat(3 - Math.max(0,L.vidas));
    fb.className = "feedback mal";
    fb.innerHTML = "Casi. La respuesta era: <b>" + correcto + "</b>";
  }

  const btn = $("accion");
  if (L.vidas <= 0){
    btn.textContent = "Ver resultado"; btn.className = "btn rojo"; btn.disabled = false;
  } else {
    btn.textContent = (L.idx >= L.total - 1) ? "Terminar" : "Continuar";
    btn.className = "btn"; btn.disabled = false;
  }
  btn.onclick = siguiente;
}

function siguiente(){
  if (L.vidas <= 0) return acabar(false);
  L.idx++;
  if (L.idx >= L.total) return acabar(true);
  pintarEjercicio();
}

function acabar(completa){
  const prec = Math.round(L.ok / L.total * 100);
  if (completa){
    if (!hecha(L.lec.id)) { S.hechas.push(L.lec.id); }
    S.xp += 10; S.gemas += 5;
    const h = hoy();
    if (S.ultimo !== h){
      S.racha = (S.ultimo === ayer()) ? S.racha + 1 : 1;
      S.ultimo = h;
    }
    guardar();
    $("finIco").textContent = "🏆";
    $("finTit").textContent = "¡Lección completada!";
    $("finSub").textContent = "Interlingua se aprende en tandas cortas. Vuelve mañana.";
  } else {
    $("finIco").textContent = "💔";
    $("finTit").textContent = "Te quedaste sin vidas";
    $("finSub").textContent = "No pasa nada: repite la lección y la clavas.";
  }
  $("finXp").textContent = completa ? "+10" : "+0";
  $("finPrec").textContent = prec + "%";
  $("finRacha").textContent = S.racha;
  $("continuar").textContent = completa ? "Continuar" : "Reintentar";
  $("continuar").onclick = () => {
    if (completa) pintarMapa();
    else iniciarLeccion(L.lec.id);
  };
  mostrar("fin");
}

/* ---------- eventos ---------- */
$("accion").addEventListener("click", () => {
  if (L && !L.comprobado) comprobar();
});
$("salir").addEventListener("click", () => { pintarMapa(); });
$("reiniciar").addEventListener("click", () => {
  if (confirm("¿Borrar todo el progreso?")){
    S = { hechas: [], xp: 0, gemas: 0, racha: 0, ultimo: "" };
    guardar(); pintarMapa();
  }
});

/* arranque */
if ("speechSynthesis" in window) speechSynthesis.getVoices();
pintarMapa();
})();
