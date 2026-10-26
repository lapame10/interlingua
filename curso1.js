/* ===== Curso de interlingua · Unidades 1 y 2 =====
   e = elegir · c = construir frase · w = escribir
   audio = texto opcional para el botón de pronunciación APROXIMADA (nunca se evalúa)
   por   = explicación que se muestra si fallas
*/
const CURSO_A = [
{
  id: "u1", titulo: "Unidad 1", sub: "Salutationes — saludos y primeras palabras",
  lecciones: [
    { id: "u1l1", titulo: "Saluta!", emoji: "👋",
      regla: { t: "Saludos y cortesía",
        p: "En interlingua el saludo cambia con la hora: <b class='il'>bon dia</b> (mañana), <b class='il'>bon vespere</b> (tarde/noche) y <b class='il'>bon nocte</b> (al despedirte de noche). Para dar las gracias: <b class='il'>gratias</b>; para despedirte: <b class='il'>adeo</b>.",
        ej: ["<b class='il'>Salute!</b> — ¡Hola!", "<b class='il'>Bon dia, gratias!</b> — ¡Buenos días, gracias!", "<b class='il'>Adeo!</b> — ¡Adiós!"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «bon dia»?", op: ["Buenos días", "Buenas noches", "Gracias"], c: 0,
        audio: "bon dia", por: "«dia» es día y «bon» es bueno. Para la noche se dice «bon nocte»." },
      { t: "e", p: "¿Qué significa «gratias»?", op: ["Por favor", "Gracias", "Adiós"], c: 1,
        audio: "gratias", por: "«gratias» es gracias. Para despedirte es «adeo»." },
      { t: "e", p: "Si te vas de noche, ¿qué dices?", op: ["bon dia", "bon nocte", "salute"], c: 1,
        audio: "bon nocte", por: "Al despedirte de noche: «bon nocte». «bon dia» es solo para la mañana." },
      { t: "w", p: "Escribe en interlingua", es: "gracias", r: "gratias", ph: "una palabra",
        por: "Se escribe «gratias», con una sola t." },
      { t: "c", p: "Traduce al interlingua", es: "Adiós", banco: ["adeo", "bon", "io", "gratias"], r: "adeo",
        por: "«adeo» es adiós. «gratias» es gracias y «bon» es bueno." }
    ]},
    { id: "u1l2", titulo: "Io es", emoji: "🙋",
      regla: { t: "Pronombres y el verbo ser/estar",
        p: "Los pronombres son <b class='il'>io</b> (yo), <b class='il'>tu</b> (tú), <b class='il'>ille</b> (él), <b class='il'>illa</b> (ella), <b class='il'>nos</b> (nosotros), <b class='il'>vos</b> (ustedes), <b class='il'>illes</b> (ellos). El verbo <b class='il'>esser</b> tiene <b class='il'>es</b> para todas las personas: io es, tu es, nos es.",
        ej: ["<b class='il'>Io es</b> mexican — Yo soy mexicana.", "<b class='il'>Tu es</b> un amico — Tú eres un amigo.", "<b class='il'>Nos es</b> hic — Nosotros estamos aquí."] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «io»?", op: ["tú", "yo", "él"], c: 1, por: "«io» es yo. «tu» es tú e «ille» es él." },
      { t: "e", p: "¿Qué significa «ille es»?", op: ["ella es", "él es", "yo soy"], c: 1,
        por: "«ille» es él; «illa» es ella. El verbo es el mismo: «es»." },
      { t: "c", p: "Traduce al interlingua", es: "Yo soy Luciana", banco: ["io", "es", "luciana", "tu"], r: "io es luciana",
        por: "El orden es pronombre + «es» + nombre: io es luciana. No se dice «io luciana es»." },
      { t: "w", p: "Escribe en interlingua", es: "tú eres", r: "tu es", ph: "dos palabras",
        por: "«tu» + «es». El verbo no cambia según la persona." },
      { t: "e", p: "¿Qué significa «nos es»?", op: ["nosotros somos", "ellos son", "tú eres"], c: 0,
        por: "«nos» es nosotros; «illes» es ellos." }
    ]},
    { id: "u1l3", titulo: "Tu nomine", emoji: "🪪",
      regla: { t: "Presentarte",
        p: "Para el nombre: <b class='il'>Mi nomine es…</b> y la pregunta <b class='il'>Qual es tu nomine?</b>. Para preguntar cómo está alguien: <b class='il'>Como sta tu?</b>, y se contesta <b class='il'>Io sta ben</b>.",
        ej: ["<b class='il'>Qual es tu nomine?</b> — ¿Cuál es tu nombre?", "<b class='il'>Mi nomine es Ana.</b>", "<b class='il'>Como sta tu? — Io sta ben.</b>"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «Como sta tu?»", op: ["¿Cómo estás?", "¿Cómo te llamas?", "¿De dónde eres?"], c: 0,
        audio: "como sta tu", por: "«sta» viene de «star» (estar). Para el nombre sería «qual es tu nomine»." },
      { t: "e", p: "«Mi nomine es Ana» significa", op: ["Mi nombre es Ana", "Soy de Ana", "Ana está bien"], c: 0,
        por: "«nomine» es nombre y «mi» es mi." },
      { t: "c", p: "Traduce al interlingua", es: "¿Cuál es tu nombre?", banco: ["qual", "es", "tu", "nomine", "ubi"], r: "qual es tu nomine",
        por: "Se pregunta con «qual…?» al inicio. «ubi» significa dónde." },
      { t: "w", p: "Escribe en interlingua", es: "estoy bien", r: "io sta ben", ph: "tres palabras",
        por: "«io sta ben»: pronombre + «sta» + «ben»." },
      { t: "e", p: "Alguien te dice «Como sta tu?». ¿Qué contestas?", op: ["Io sta ben", "Adeo", "Qual es tu nomine"], c: 0,
        audio: "io sta ben", por: "Se responde con «io sta ben» (estoy bien)." }
    ]},
    { id: "u1l4", titulo: "Numeros", emoji: "🔢",
      regla: { t: "Los números del 1 al 10",
        p: "un, duo, tres, quatro, cinque, sex, septe, octo, nove, dece. Se escriben con <b class='il'>qu</b> en quatro y con <b class='il'>c</b> en cinque, como en las lenguas de origen.",
        ej: ["<b class='il'>tres casas</b> — tres casas", "<b class='il'>dece annos</b> — diez años"] },
      ejercicios: [
      { t: "e", p: "¿Qué número es «tres»?", op: ["dos", "tres", "cuatro"], c: 1, por: "«duo» es dos y «quatro» es cuatro." },
      { t: "e", p: "¿Qué número es «cinque»?", op: ["cinco", "seis", "siete"], c: 0, por: "«sex» es seis y «septe» es siete." },
      { t: "c", p: "Traduce al interlingua", es: "Dos casas", banco: ["duo", "casas", "tres", "le"], r: "duo casas",
        por: "El número va antes del sustantivo: duo casas." },
      { t: "w", p: "Escribe el número en interlingua", es: "siete", r: "septe", ph: "una palabra",
        por: "Siete es «septe». «sex» es seis." },
      { t: "e", p: "¿Qué número es «dece»?", op: ["diez", "nueve", "doce"], c: 0, por: "«nove» es nueve y «dece» es diez." }
    ]}
  ]
},
{
  id: "u2", titulo: "Unidad 2", sub: "Personas — plural, tener y la familia",
  lecciones: [
    { id: "u2l1", titulo: "Plurale", emoji: "📚",
      regla: { t: "Cómo se forma el plural",
        p: "Se añade <b class='il'>-s</b> si la palabra termina en vocal (<b class='il'>casa → casas</b>) y <b class='il'>-es</b> si termina en consonante (<b class='il'>homine → homines</b>). El artículo <b class='il'>le</b> sirve para singular y plural.",
        ej: ["<b class='il'>le casa / le casas</b> — la casa / las casas", "<b class='il'>homine / homines</b> — hombre / hombres"] },
      ejercicios: [
      { t: "e", p: "El plural de «casa» es", op: ["casa", "casas", "casae"], c: 1,
        por: "Termina en vocal, así que solo se añade -s: casas." },
      { t: "e", p: "El plural de «homine» es", op: ["homines", "homins", "homine"], c: 0,
        por: "«homine» termina en -e; el plural solo añade -s: homines." },
      { t: "c", p: "Traduce al interlingua", es: "Los hermanos", banco: ["le", "fratres", "fratre", "es"], r: "le fratres",
        por: "«le» no cambia en plural, y «fratre» pasa a «fratres»." },
      { t: "w", p: "Escribe el plural", es: "filia → ?", r: "filias", ph: "una palabra",
        por: "«filia» termina en vocal: filias." },
      { t: "e", p: "¿Qué significa «illes»?", op: ["ellos", "tú", "yo"], c: 0,
        por: "«illes» es ellos; singular «ille» es él." }
    ]},
    { id: "u2l2", titulo: "Haber", emoji: "🤲",
      regla: { t: "El verbo tener: haber",
        p: "«haber» significa tener. Igual que «esser», tiene una sola forma por tiempo: <b class='il'>io ha</b>, <b class='il'>tu ha</b>, <b class='il'>nos ha</b>. Nunca cambia según la persona.",
        ej: ["<b class='il'>Io ha un fratre.</b> — Tengo un hermano.", "<b class='il'>Nos ha duo casas.</b> — Tenemos dos casas."] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «io ha»?", op: ["yo tengo", "yo soy", "yo voy"], c: 0,
        por: "«ha» viene de «haber» (tener). Ser es «es»." },
      { t: "e", p: "«Illa ha un filia» significa", op: ["Ella tiene una hija", "Él tiene una hija", "Ella es una hija"], c: 0,
        por: "«illa» = ella, «ha» = tiene, «filia» = hija." },
      { t: "c", p: "Traduce al interlingua", es: "Yo tengo un hermano", banco: ["io", "ha", "un", "fratre", "es"], r: "io ha un fratre",
        por: "Tener es «ha», no «es». «fratre» va después de «un»." },
      { t: "w", p: "Escribe en interlingua", es: "tú tienes", r: "tu ha", ph: "dos palabras",
        por: "El verbo no cambia: tu ha, igual que io ha." },
      { t: "e", p: "¿Qué significa «nos ha»?", op: ["nosotros tenemos", "ellos tienen", "yo tengo"], c: 0,
        por: "«nos» es nosotros, y «ha» sirve para todas las personas." }
    ]},
    { id: "u2l3", titulo: "Le familia", emoji: "👨‍👩‍👧",
      regla: { t: "La familia",
        p: "<b class='il'>patre</b> padre, <b class='il'>matre</b> madre, <b class='il'>fratre</b> hermano, <b class='il'>soror</b> hermana, <b class='il'>filio</b> hijo, <b class='il'>filia</b> hija, <b class='il'>infante</b> niño.",
        ej: ["<b class='il'>Mi matre es bon.</b> — Mi madre es buena.", "<b class='il'>Io ha un soror.</b> — Tengo una hermana."] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «matre»?", op: ["madre", "padre", "hermana"], c: 0,
        por: "«matre» es madre; «patre» es padre." },
      { t: "e", p: "¿Qué significa «soror»?", op: ["hermano", "hermana", "hijo"], c: 1,
        por: "«soror» es hermana; el hermano es «fratre»." },
      { t: "c", p: "Traduce al interlingua", es: "Mi madre es buena", banco: ["mi", "matre", "es", "bon", "grande"], r: "mi matre es bon",
        por: "«bon» es bueno/buena y no cambia: no existe «bona»." },
      { t: "w", p: "Escribe en interlingua", es: "padre", r: "patre", ph: "una palabra",
        por: "Padre es «patre». Madre es «matre»." },
      { t: "e", p: "¿Qué significa «infante»?", op: ["niño", "anciano", "hombre"], c: 0,
        por: "«infante» es niño. Hombre es «homine»." }
    ]},
    { id: "u2l4", titulo: "Adjectivos", emoji: "🎨",
      regla: { t: "Los adjetivos no cambian",
        p: "En interlingua el adjetivo es <b class='il'>invariable</b>: no cambia por género ni por número, y puede ir antes o después del sustantivo. <b class='il'>bon</b> es bueno y buena; <b class='il'>grande</b> igual en singular y plural.",
        ej: ["<b class='il'>un bon homine / un bon femina</b>", "<b class='il'>le casas es grande</b> — las casas son grandes"] },
      ejercicios: [
      { t: "e", p: "¿Qué significa «parve»?", op: ["grande", "pequeño", "bonito"], c: 1,
        por: "«parve» es pequeño; grande es «grande»." },
      { t: "e", p: "«Le casa es grande» significa", op: ["La casa es grande", "Las casas son grandes", "La casa está grande"], c: 0,
        por: "«casa» está en singular: es una sola casa." },
      { t: "c", p: "Traduce al interlingua", es: "Un hombre bueno", banco: ["un", "homine", "bon", "es", "parve"], r: "un homine bon",
        por: "No se dice «bon homine es»: el adjetivo no lleva verbo." },
      { t: "w", p: "Escribe en interlingua", es: "bella / bonita", r: "belle", ph: "una palabra",
        por: "«belle» sirve igual para masculino y femenino." },
      { t: "e", p: "Los adjetivos en interlingua…", op: ["cambian según el género", "no cambian nunca", "solo cambian en plural"], c: 1,
        por: "Son invariables: «bon» vale para él y para ella, singular y plural." }
    ]}
  ]
}
];
