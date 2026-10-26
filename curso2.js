/* ===== Curso de interlingua · Unidades 3 y 4 ===== */
const CURSO_B = [
{
  id: "u3", titulo: "Unidad 3", sub: "Actiones — verbos, negación y preguntas",
  lecciones: [
    { id: "u3l1", titulo: "Verbos -ar", emoji: "🗣️",
      regla: { t: "El presente es una sola forma",
        p: "Los verbos terminan en <b class='il'>-ar</b> en infinitivo: parlar, laborar, amar. En presente se quita la <b class='il'>-r</b> y esa forma sirve para todas las personas: <b class='il'>io parla</b>, <b class='il'>tu parla</b>, <b class='il'>nos parla</b>.",
        ej: ["<b class='il'>parlar → io parla</b> — hablar → yo hablo", "<b class='il'>laborar → nos labora</b> — trabajar → trabajamos"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «parlar»?", op: ["hablar", "comer", "vivir"], c: 0,
        por: "«parlar» es hablar. Comer es «mangiar»." },
      { t: "e", p: "¿Qué significa «io parla»?", op: ["yo hablo", "yo hablé", "yo hablaré"], c: 0,
        por: "La forma sin -r es el presente: io parla = yo hablo." },
      { t: "c", p: "Traduce al interlingua", es: "Nosotros trabajamos", banco: ["nos", "labora", "io", "es"], r: "nos labora",
        por: "«nos» + «labora». No se añade terminación de persona." },
      { t: "w", p: "Escribe en interlingua", es: "amar", r: "amar", ph: "el infinitivo",
        por: "El infinitivo termina en -ar: amar." },
      { t: "e", p: "¿Qué significa «ille labora»?", op: ["él trabaja", "ellos trabajan", "tú trabajas"], c: 0,
        por: "«ille» es singular (él). Para ellos sería «illes»." }
    ]},
    { id: "u3l2", titulo: "Non", emoji: "🚫",
      regla: { t: "Negar es fácil",
        p: "La negación es <b class='il'>non</b> y va <b>antes del verbo</b>: <b class='il'>io non parla</b> (no hablo). No se usa ningún auxiliar, como el «do not» del inglés.",
        ej: ["<b class='il'>Io non parla anglese.</b> — No hablo inglés.", "<b class='il'>Illa non ha fratres.</b> — Ella no tiene hermanos."] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «Io non parla»?", op: ["Yo no hablo", "Yo hablo", "Yo no soy"], c: 0,
        por: "«non» delante del verbo lo niega." },
      { t: "e", p: "¿Dónde va la negación?", op: ["antes del verbo", "después del verbo", "al final"], c: 0,
        por: "Siempre antes: «io non ha», no «io ha non»." },
      { t: "c", p: "Traduce al interlingua", es: "Ella no tiene hermanos", banco: ["illa", "non", "ha", "fratres", "es"], r: "illa non ha fratres",
        por: "Orden: pronombre + non + verbo + objeto." },
      { t: "w", p: "Escribe la negación en interlingua", es: "«no»", r: "non", ph: "una palabra",
        por: "Se escribe «non», con n final." },
      { t: "e", p: "¿Qué significa «Nos non es»?", op: ["Nosotros no somos", "Nosotros somos", "Ellos no son"], c: 0,
        por: "«non» niega, «nos» es nosotros." }
    ]},
    { id: "u3l3", titulo: "Questiones", emoji: "❓",
      regla: { t: "Preguntar",
        p: "Puedes preguntar de dos formas: con la partícula <b class='il'>esque</b> al principio (<b class='il'>Esque tu parla interlingua?</b>) o con una palabra interrogativa: <b class='il'>que</b> (qué), <b class='il'>qui</b> (quién), <b class='il'>ubi</b> (dónde), <b class='il'>quando</b> (cuándo), <b class='il'>quanto</b> (cuánto).",
        ej: ["<b class='il'>Esque tu es preste?</b> — ¿Estás listo?", "<b class='il'>Ubi es le aeroporto?</b> — ¿Dónde está el aeropuerto?"] },
      ejercicios: [
      { t: "e", p: "La partícula «esque» sirve para", op: ["negar", "preguntar", "formar el plural"], c: 1,
        por: "«esque» convierte la frase en pregunta: Esque tu parla?" },
      { t: "e", p: "¿Qué significa «ubi»?", op: ["cuándo", "dónde", "quién"], c: 1,
        por: "«ubi» = dónde. «quando» = cuándo y «qui» = quién." },
      { t: "c", p: "Traduce al interlingua", es: "¿Dónde trabajas?", banco: ["ubi", "tu", "labora", "es", "qui"], r: "ubi tu labora",
        por: "La palabra interrogativa abre la frase: ubi tu labora." },
      { t: "w", p: "Escribe en interlingua", es: "cuándo", r: "quando", ph: "una palabra",
        por: "Se escribe con qu: quando." },
      { t: "e", p: "«Esque tu parla interlingua?» significa", op: ["¿Hablas interlingua?", "Hablas interlingua", "No hablas interlingua"], c: 0,
        por: "«esque» no niega: solo pregunta." }
    ]},
    { id: "u3l4", titulo: "Vita quotidian", emoji: "☕",
      regla: { t: "Verbos del día a día",
        p: "<b class='il'>mangiar</b> comer · <b class='il'>biber</b> beber · <b class='il'>leger</b> leer · <b class='il'>dormir</b> dormir · <b class='il'>voler</b> querer. Con «voler» se pide algo: <b class='il'>io vole</b> + verbo.",
        ej: ["<b class='il'>Io vole biber aqua.</b> — Quiero beber agua.", "<b class='il'>Nos mangia a mediedie.</b> — Comemos al mediodía."] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «mangiar»?", op: ["beber", "comer", "dormir"], c: 1,
        por: "«mangiar» es comer (en interlingua NO se dice «manjar»). Beber es «biber»." },
      { t: "e", p: "¿Qué significa «aqua»?", op: ["agua", "pan", "leche"], c: 0,
        por: "«aqua» es agua." },
      { t: "c", p: "Traduce al interlingua", es: "Yo quiero beber agua", banco: ["io", "vole", "biber", "aqua", "mangiar"], r: "io vole biber aqua",
        por: "Orden: io + vole + verbo en infinitivo + objeto." },
      { t: "w", p: "Escribe en interlingua", es: "leer", r: "leger", ph: "el infinitivo",
        por: "Leer es «leger», con g." },
      { t: "e", p: "¿Qué significa «Io dormi ben»?", op: ["Duermo bien", "Como bien", "Vivo bien"], c: 0,
        por: "«dormir» es dormir; «ben» es bien." }
    ]}
  ]
},
{
  id: "u4", titulo: "Unidad 4", sub: "Frases útiles — presentarte, viajar y el hangar",
  lecciones: [
    { id: "u4l1", titulo: "Presentar se", emoji: "🤝",
      regla: { t: "Presentarte de verdad",
        p: "Con lo que ya sabes puedes decir quién eres, de dónde vienes y qué haces. Fíjate en la estructura: <b class='il'>Io es</b> + información, <b class='il'>Io ha</b> + lo que tienes, <b class='il'>Io labora in</b> + lugar.",
        ej: ["<b class='il'>Io es de Mexico.</b> — Soy de México.", "<b class='il'>Io ha dece annos in le aere.</b> — Llevo diez años en el aire.", "<b class='il'>Io labora in un hangar.</b> — Trabajo en un hangar."] },
      ejercicios: [
      { t: "e", p: "«Io es de Mexico» significa", op: ["Soy de México", "Estoy en México", "Vivo México"], c: 0,
        por: "«de» marca el origen: soy DE México." },
      { t: "c", p: "Traduce al interlingua", es: "Yo tengo diez años", banco: ["io", "ha", "dece", "annos", "es"], r: "io ha dece annos",
        por: "La edad se dice con «ha»: io ha dece annos." },
      { t: "w", p: "Escribe en interlingua", es: "soy de México", r: "io es de mexico", ph: "cuatro palabras",
        por: "io + es + de + mexico." },
      { t: "e", p: "«Io labora in un hangar» significa", op: ["Trabajo en un hangar", "Trabajo un hangar", "Estoy un hangar"], c: 0,
        por: "«in» es en/dentro de: labora IN un hangar." },
      { t: "c", p: "Traduce al interlingua", es: "Yo amo volar", banco: ["io", "ama", "volar", "es"], r: "io ama volar",
        por: "«amar» + verbo en infinitivo: io ama volar." }
    ]},
    { id: "u4l2", titulo: "In viage", emoji: "✈️",
      regla: { t: "Para moverte",
        p: "Preguntas que vas a usar siempre: <b class='il'>Ubi es…?</b> (¿dónde está…?), <b class='il'>Quanto costa?</b> (¿cuánto cuesta?), <b class='il'>Io vole un billet</b> (quiero un billete). Y <b class='il'>hodie</b> hoy, <b class='il'>cras</b> mañana, <b class='il'>heri</b> ayer.",
        ej: ["<b class='il'>Ubi es le aeroporto?</b>", "<b class='il'>Quanto costa le billet?</b>", "<b class='il'>Io viage a Mexico hodie.</b>"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «Ubi es le aeroporto?»", op: ["¿Dónde está el aeropuerto?", "¿Cuándo sale el avión?", "¿Cuánto cuesta el billete?"], c: 0,
        por: "«ubi» pregunta el lugar y «aeroporto» es el aeropuerto." },
      { t: "e", p: "¿Qué significa «Quanto costa?»", op: ["¿Cuánto cuesta?", "¿Dónde está?", "¿Qué es?"], c: 0,
        por: "«quanto» es cuánto y «costa» viene de costar." },
      { t: "c", p: "Traduce al interlingua", es: "Yo quiero un billete", banco: ["io", "vole", "un", "billet", "ha"], r: "io vole un billet",
        por: "«vole» es querer; «ha» es tener." },
      { t: "w", p: "Escribe en interlingua", es: "hoy", r: "hodie", ph: "una palabra",
        por: "Hoy es «hodie»; mañana es «cras»." },
      { t: "e", p: "«Io viage a Mexico» significa", op: ["Viajo a México", "Vivo en México", "Soy de México"], c: 0,
        por: "«viagiar» es viajar; en presente pierde la -r y queda «viage» (viajo)." }
    ]},
    { id: "u4l3", titulo: "In le hangar", emoji: "🪂",
      regla: { t: "Hablar en el hangar",
        p: "Para hablar del día y del plan: <b class='il'>Il ha bon tempore</b> (hay buen tiempo), <b class='il'>Le vento es forte</b> (el viento es fuerte), <b class='il'>Esque tu es preste?</b> (¿estás listo?), <b class='il'>Nos vole volar hodie</b> (queremos volar hoy).",
        ej: ["<b class='il'>Il ha bon tempore hodie.</b>", "<b class='il'>Esque tu es preste?</b> — Sí: <b class='il'>Io es preste</b>.", "<b class='il'>Nos vole volar al montania.</b>"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «Il ha bon tempore»?", op: ["Hay buen tiempo", "Hace frío", "Hay viento"], c: 0,
        por: "«il ha» es hay, y «bon tempore» es buen tiempo." },
      { t: "e", p: "«Esque tu es preste?» significa", op: ["¿Estás listo?", "¿Dónde estás?", "¿Estás cansado?"], c: 0,
        por: "«preste» es listo/preparado." },
      { t: "c", p: "Traduce al interlingua", es: "Nosotros queremos volar hoy", banco: ["nos", "vole", "volar", "hodie", "es"], r: "nos vole volar hodie",
        por: "nos + vole + volar + hodie." },
      { t: "w", p: "Escribe en interlingua", es: "viento", r: "vento", ph: "una palabra",
        por: "Viento es «vento»." },
      { t: "e", p: "«Le vento es forte» significa", op: ["El viento es fuerte", "El cielo es azul", "Hace calor"], c: 0,
        por: "«forte» es fuerte; «celo» es cielo." }
    ]}
  ]
}
];
