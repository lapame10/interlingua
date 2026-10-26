/* ===== Curso de interlingua · contenido =====
   Tipos de ejercicio:
   e = elección múltiple · c = construir frase · w = escribir · a = escuchar
*/
const CURSO = [
{
  id: "u1", titulo: "Unidad 1", sub: "Salutationes — saludos y primeras palabras",
  lecciones: [
    { id: "u1l1", titulo: "Saluta!", emoji: "👋", ejercicios: [
      { t: "e", p: "¿Qué significa «bon dia»?", op: ["Buenos días", "Buenas noches", "Gracias"], c: 0 },
      { t: "e", p: "¿Qué significa «gratias»?", op: ["Por favor", "Gracias", "Adiós"], c: 1 },
      { t: "a", p: "Escucha y elige", texto: "bon vespere", op: ["bon vespere", "bon dia", "bon nocte"], c: 0 },
      { t: "w", p: "Escribe en interlingua", es: "gracias", r: "gratias", ph: "una palabra" },
      { t: "c", p: "Traduce al interlingua", es: "Adiós", banco: ["adeo", "bon", "io", "gratias"], r: "adeo" }
    ]},
    { id: "u1l2", titulo: "Io es", emoji: "🙋", ejercicios: [
      { t: "e", p: "¿Qué significa «io»?", op: ["tú", "yo", "él"], c: 1 },
      { t: "e", p: "¿Qué significa «ille es»?", op: ["ella es", "él es", "yo soy"], c: 1 },
      { t: "c", p: "Traduce al interlingua", es: "Yo soy Luciana", banco: ["io", "es", "luciana", "tu"], r: "io es luciana" },
      { t: "w", p: "Escribe en interlingua", es: "tú eres", r: "tu es", ph: "dos palabras" },
      { t: "e", p: "¿Qué significa «nos es»?", op: ["nosotros somos", "ellos son", "tú eres"], c: 0 }
    ]},
    { id: "u1l3", titulo: "Tu nomine", emoji: "🪪", ejercicios: [
      { t: "e", p: "¿Qué significa «Como sta tu?»", op: ["¿Cómo estás?", "¿Cómo te llamas?", "¿De dónde eres?"], c: 0 },
      { t: "e", p: "«Mi nomine es Ana» significa", op: ["Mi nombre es Ana", "Soy de Ana", "Ana está bien"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "¿Cuál es tu nombre?", banco: ["qual", "es", "tu", "nomine", "ubi"], r: "qual es tu nomine" },
      { t: "w", p: "Escribe en interlingua", es: "estoy bien", r: "io sta ben", ph: "tres palabras" },
      { t: "a", p: "Escucha y elige", texto: "io sta ben", op: ["io sta ben", "io es ben", "tu sta ben"], c: 0 }
    ]},
    { id: "u1l4", titulo: "Numeros", emoji: "🔢", ejercicios: [
      { t: "e", p: "¿Qué número es «tres»?", op: ["dos", "tres", "cuatro"], c: 1 },
      { t: "e", p: "¿Qué número es «cinque»?", op: ["cinco", "seis", "siete"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Dos casas", banco: ["duo", "casas", "tres", "le"], r: "duo casas" },
      { t: "w", p: "Escribe el número en interlingua", es: "siete", r: "septe", ph: "una palabra" },
      { t: "e", p: "¿Qué número es «dece»?", op: ["diez", "nueve", "doce"], c: 0 }
    ]}
  ]
},
{
  id: "u2", titulo: "Unidad 2", sub: "Personas — plural, tener y la familia",
  lecciones: [
    { id: "u2l1", titulo: "Plurale", emoji: "📚", ejercicios: [
      { t: "e", p: "El plural de «casa» es", op: ["casa", "casas", "casae"], c: 1 },
      { t: "e", p: "El plural de «homine» es", op: ["homines", "homins", "homine"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Los hermanos", banco: ["le", "fratres", "fratre", "es"], r: "le fratres" },
      { t: "w", p: "Escribe el plural", es: "filia → ?", r: "filias", ph: "una palabra" },
      { t: "e", p: "¿Qué significa «illes»?", op: ["ellos", "tú", "yo"], c: 0 }
    ]},
    { id: "u2l2", titulo: "Haber", emoji: "🤲", ejercicios: [
      { t: "e", p: "¿Qué significa «io ha»?", op: ["yo tengo", "yo soy", "yo voy"], c: 0 },
      { t: "e", p: "«Illa ha un filia» significa", op: ["Ella tiene una hija", "Él tiene una hija", "Ella es una hija"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Yo tengo un hermano", banco: ["io", "ha", "un", "fratre", "es"], r: "io ha un fratre" },
      { t: "w", p: "Escribe en interlingua", es: "tú tienes", r: "tu ha", ph: "dos palabras" },
      { t: "e", p: "¿Qué significa «nos ha»?", op: ["nosotros tenemos", "ellos tienen", "yo tengo"], c: 0 }
    ]},
    { id: "u2l3", titulo: "Le familia", emoji: "👨‍👩‍👧", ejercicios: [
      { t: "e", p: "¿Qué significa «matre»?", op: ["madre", "padre", "hermana"], c: 0 },
      { t: "e", p: "¿Qué significa «soror»?", op: ["hermano", "hermana", "hijo"], c: 1 },
      { t: "c", p: "Traduce al interlingua", es: "Mi madre es buena", banco: ["mi", "matre", "es", "bon", "grande"], r: "mi matre es bon" },
      { t: "w", p: "Escribe en interlingua", es: "padre", r: "patre", ph: "una palabra" },
      { t: "e", p: "¿Qué significa «infante»?", op: ["niño", "anciano", "hombre"], c: 0 }
    ]},
    { id: "u2l4", titulo: "Adjectivos", emoji: "🎨", ejercicios: [
      { t: "e", p: "¿Qué significa «parve»?", op: ["grande", "pequeño", "bonito"], c: 1 },
      { t: "e", p: "«Le casa es grande» significa", op: ["La casa es grande", "Las casas son grandes", "La casa está grande"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Un hombre bueno", banco: ["un", "homine", "bon", "es", "parve"], r: "un homine bon" },
      { t: "w", p: "Escribe en interlingua", es: "bella / bonita", r: "belle", ph: "una palabra" },
      { t: "e", p: "Los adjetivos en interlingua…", op: ["cambian según el género", "no cambian nunca", "solo cambian en plural"], c: 1 }
    ]}
  ]
},
{
  id: "u3", titulo: "Unidad 3", sub: "Actiones — verbos, negación y preguntas",
  lecciones: [
    { id: "u3l1", titulo: "Verbos -ar", emoji: "🗣️", ejercicios: [
      { t: "e", p: "¿Qué significa «parlar»?", op: ["hablar", "comer", "vivir"], c: 0 },
      { t: "e", p: "¿Qué significa «io parla»?", op: ["yo hablo", "yo hablé", "yo hablaré"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Nosotros trabajamos", banco: ["nos", "labora", "io", "es"], r: "nos labora" },
      { t: "w", p: "Escribe en interlingua", es: "amar", r: "amar", ph: "una palabra" },
      { t: "e", p: "¿Qué significa «ille labora»?", op: ["él trabaja", "ellos trabajan", "tú trabajas"], c: 0 }
    ]},
    { id: "u3l2", titulo: "Non", emoji: "🚫", ejercicios: [
      { t: "e", p: "¿Qué significa «Io non parla»?", op: ["Yo no hablo", "Yo hablo", "Yo no soy"], c: 0 },
      { t: "e", p: "¿Dónde va la negación?", op: ["antes del verbo", "después del verbo", "al final"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Ella no tiene hermanos", banco: ["illa", "non", "ha", "fratres", "es"], r: "illa non ha fratres" },
      { t: "w", p: "Escribe la negación en interlingua", es: "«no»", r: "non", ph: "una palabra" },
      { t: "e", p: "¿Qué significa «Nos non es»?", op: ["Nosotros no somos", "Nosotros somos", "Ellos no son"], c: 0 }
    ]},
    { id: "u3l3", titulo: "Questiones", emoji: "❓", ejercicios: [
      { t: "e", p: "La partícula «esque» sirve para", op: ["negar", "preguntar", "formar el plural"], c: 1 },
      { t: "e", p: "¿Qué significa «ubi»?", op: ["cuándo", "dónde", "quién"], c: 1 },
      { t: "c", p: "Traduce al interlingua", es: "¿Dónde trabajas?", banco: ["ubi", "tu", "labora", "es", "qui"], r: "ubi tu labora" },
      { t: "w", p: "Escribe en interlingua", es: "cuándo", r: "quando", ph: "una palabra" },
      { t: "e", p: "«Esque tu parla interlingua?» significa", op: ["¿Hablas interlingua?", "Hablas interlingua", "No hablas interlingua"], c: 0 }
    ]},
    { id: "u3l4", titulo: "Vita quotidian", emoji: "☕", ejercicios: [
      { t: "e", p: "¿Qué significa «manjar»?", op: ["beber", "comer", "dormir"], c: 1 },
      { t: "e", p: "¿Qué significa «aqua»?", op: ["agua", "pan", "leche"], c: 0 },
      { t: "c", p: "Traduce al interlingua", es: "Yo quiero beber agua", banco: ["io", "vole", "biber", "aqua", "manjar"], r: "io vole biber aqua" },
      { t: "w", p: "Escribe en interlingua", es: "leer", r: "leger", ph: "una palabra" },
      { t: "e", p: "¿Qué significa «Io dormi ben»?", op: ["Duermo bien", "Como bien", "Vivo bien"], c: 0 }
    ]}
  ]
}
];
