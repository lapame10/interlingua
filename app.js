/* ===== Interlingua · estado, progreso y mapa ===== */
(function(){
"use strict";

const KEY = "interlingua_v1";          // se conserva: el progreso ya guardado sigue valiendo
const CURSO = (typeof CURSO_A !== "undefined" ? CURSO_A : []).concat(typeof CURSO_B !== "undefined" ? CURSO_B : []);
const $ = id => document.getElementById(id);

const base = { hechas: [], xp: 0, racha: 0, ultimo: "", repaso: [] };
let S = Object.assign({}, base);
try {
  const g = JSON.parse(localStorage.getItem(KEY));
  if (g && typeof g === "object"){
    S.hechas = Array.isArray(g.hechas) ? g.hechas : [];
    S.xp = Number(g.xp) || 0;
    S.racha = Number(g.racha) || 0;
    S.ultimo = typeof g.ultimo === "string" ? g.ultimo : "";
    S.repaso = Array.isArray(g.repaso) ? g.repaso.filter(r => r && r.lec) : [];
  }
} catch(e){}

function guardar(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }

/* --- fechas LOCALES (no UTC: a las 18:00 de CDMX UTC ya es mañana) --- */
function fechaLocal(d){
  d = d || new Date();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const dia = String(d.getDate()).padStart(2,"0");
  return d.getFullYear() + "-" + m + "-" + dia;
}
function hoy(){ return fechaLocal(new Date()); }
function ayer(){ const d = new Date(); d.setDate(d.getDate()-1); return fechaLocal(d); }

function normaliza(t){
  return String(t||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[¿?¡!.,;:"«»()]/g,"").replace(/\s+/g," ").trim();
}

function hablar(texto){
  try{
    if(!("speechSynthesis" in window)) return false;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    const v = speechSynthesis.getVoices();
    const it = v.find(x => /^it/i.test(x.lang));
    const es = v.find(x => /^es/i.test(x.lang));
    if (it){ u.voice = it; u.lang = "it-IT"; }
    else if (es){ u.voice = es; u.lang = "es-ES"; }
    u.rate = 0.82;
    speechSynthesis.speak(u);
    return true;
  }catch(e){ return false; }
}

const todas = () => CURSO.flatMap(u => u.lecciones);
const getLec = id => todas().find(l => l.id === id);
const hecha = id => S.hechas.indexOf(id) >= 0;
function desbloqueada(id){
  const t = todas(), i = t.findIndex(l => l.id === id);
  if (i <= 0) return true;
  return hecha(t[i-1].id);
}

function mostrar(p){
  ["ruta","leccion","fin"].forEach(id => $(id).classList.toggle("activa", id === p));
}

/* ---------- MAPA ---------- */
function pintarMapa(){
  $("racha").textContent = S.racha;
  $("xp").textContent = S.xp;

  let h = "";
  if (S.repaso.length){
    h += '<div class="repasoBar"><span class="ico" aria-hidden="true">🔁</span>' +
         '<div><b>Repaso pendiente</b><span>' + S.repaso.length +
         (S.repaso.length === 1 ? ' pregunta que fallaste' : ' preguntas que fallaste') +
         '</span></div><button id="btnRepaso">Repasar</button></div>';
  }

  CURSO.forEach(u => {
    const hechasU = u.lecciones.filter(l => hecha(l.id)).length;
    h += '<div class="unidad"><div class="unidadTit">' + u.titulo + ' · ' + hechasU + '/' + u.lecciones.length + '</div>';
    h += '<div class="unidadSub">' + u.sub + '</div><div class="nodos">';
    u.lecciones.forEach((l, li) => {
      const ok = hecha(l.id), libre = desbloqueada(l.id);
      const cls = ok ? "hecho" : (libre ? "act" : "bloq");
      const ico = ok ? "✓" : (libre ? l.emoji : "🔒");
      const estado = ok ? "completada" : (libre ? "empezar" : "bloqueada");
      const aria = 'Lección: ' + l.titulo + '. ' + (ok ? "Completada" : (libre ? "Empezar" : "Bloqueada: termina la lección anterior"));
      h += '<div class="nodo ' + (li % 2 ? "der" : "izq") + '">';
      h += '<button class="circulo ' + cls + '" data-lec="' + l.id + '" data-estado="' + estado + '"' +
           ' aria-label="' + aria + '"' + (libre ? '' : ' disabled aria-disabled="true"') + '>' + ico + '</button>';
      h += '<div class="nodoInfo" aria-hidden="true"><b>' + l.titulo + '</b><span>' +
           (ok ? "Completada" : (libre ? "Empezar" : "Bloqueada")) + '</span></div></div>';
    });
    h += '</div></div>';
  });

  $("mapa").innerHTML = h;
  const rb = $("btnRepaso");
  if (rb) rb.addEventListener("click", () => window.IL.iniciarRepaso());

  $("mapa").querySelectorAll(".circulo").forEach(b => {
    b.addEventListener("click", () => {
      if (b.disabled || b.dataset.estado === "bloqueada") return;
      window.IL.iniciarLeccion(b.dataset.lec);
    });
  });
  mostrar("ruta");
}

$("reiniciar").addEventListener("click", () => {
  if (confirm("¿Borrar todo el progreso guardado?")){
    S = Object.assign({}, base, { hechas: [], repaso: [] });
    guardar(); pintarMapa();
  }
});

/* API compartida con leccion.js */
window.IL = { S: S, guardar: guardar, curso: CURSO, todas: todas, getLec: getLec,
  hecha: hecha, desbloqueada: desbloqueada, pintarMapa: pintarMapa, mostrar: mostrar,
  normaliza: normaliza, hablar: hablar, hoy: hoy, ayer: ayer, $: $ };

if ("speechSynthesis" in window) speechSynthesis.getVoices();
pintarMapa();
})();
