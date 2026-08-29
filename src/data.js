/**
 * Central content for the site — every fact comes from the original
 * site's copy, organized here so components stay purely presentational.
 */

export const site = {
  name: "Sebastián Caballero Ortega",
  firstName: "Sebastián Caballero",
  lastName: "Ortega",
  tagline: "Abogado Constitucionalista — Defensor de Derechos Humanos",
  heroQuote: "Comprometido con la justicia, la democracia y la defensa de quienes no tienen voz.",
  email: "sebastian.caballero.ortega@gmail.com",
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/sebastiancaballer0",
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/Sebastian.Caballero.Ortega",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sebasti%C3%A1n-caballero-30780b12b/",
    },
  ],
};

export const navLinks = [
  { id: "porque", label: "El porqué" },
  { id: "formacion", label: "Formación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "momentos", label: "Momentos" },
  { id: "compromiso", label: "Compromiso" },
  { id: "vision", label: "Visión" },
  { id: "escritos", label: "Escritos" },
];

export const heroFacts = [
  {
    value: "2018",
    text: "Personería jurídica lograda para Colombia Humana ante la Corte Constitucional",
  },
  {
    value: "2021",
    text: "Fundación de Primera Línea Jurídica, red nacional de defensa",
  },
  {
    value: "2022",
    text: "Gerente de campaña a la Cámara · Pacto Histórico, Valle del Cauca",
  },
  {
    value: "3.000",
    text: "Empresas administradas como Vicepresidente Jurídico de la SAE",
  },
];

export const about = {
  eyebrow: "Cap. 01 · El porqué",
  title: "¿Por qué la defensa de los Derechos Humanos?",
  lead: "Desde el ejercicio del derecho penal y constitucional, he defendido víctimas de crímenes de Estado, he denunciado estructuras ilegales y he acompañado procesos sociales en momentos críticos del país.",
  quote: "La justicia no es un privilegio. Es un derecho.",
};

export const formation = [
  {
    icon: `${import.meta.env.BASE_URL}img/form-abogado.png`,
    degree: "Abogado",
    school: "Universidad Libre de Colombia",
  },
  {
    icon: `${import.meta.env.BASE_URL}img/form-magister.png`,
    degree: "Magíster en Derecho Constitucional",
    school: "Universidad Libre de Colombia",
    note: "Tesis sobre Lawfare en América Latina",
  },
  {
    icon: `${import.meta.env.BASE_URL}img/form-penal.png`,
    degree: "Especialización en Ciencias Penales y Criminológicas",
    school: "Universidad Externado de Colombia",
  },
  {
    icon: `${import.meta.env.BASE_URL}img/form-constitucional.png`,
    degree: "Especialización en Derecho Constitucional",
  },
  {
    icon: `${import.meta.env.BASE_URL}img/form-economia.png`,
    degree: "Estudios de Posgrado en Economía",
    school: "Universidad de los Andes",
  },
];

export const experience = {
  management: {
    icon: "landmark",
    title: "Gestión pública",
    items: [
      {
        title: "Gerente del FFIE",
        sub: "Fondo de Financiamiento de la Infraestructura Educativa",
        badge: "Actual",
      },
      {
        title: "Vicepresidente Jurídico de la SAE",
        sub: "Sociedad de Activos Especiales · lideró la administración de más de 3.000 empresas",
      },
      {
        title: "Gerente de campaña a la Cámara de Representantes",
        sub: "Pacto Histórico en el Valle del Cauca · 2022",
      },
      {
        title: "Encargado de la campaña presidencial en la región",
        sub: "2022",
      },
      {
        title: "Comisión de empalme del Ministerio de Justicia",
        sub: "2022",
      },
      {
        title: "Comisión de expertos para la Reforma a la Justicia",
        sub: "2023",
      },
    ],
  },
  litigation: {
    icon: "scale",
    title: "Ejercicio litigante",
    items: [
      {
        title: "Defensa de víctimas de crímenes de Estado",
        sub: "Acompañamiento jurídico frente al abuso del poder estatal",
      },
      {
        title: "Acciones constitucionales de alto impacto",
        sub: "Tutelas y acciones con relevancia para la democracia y los derechos",
      },
      {
        title: "Fundador de Primera Línea Jurídica",
        sub: "Red nacional de abogados que brindó defensa de oficio a jóvenes criminalizados por protestar",
      },
    ],
  },
};

export const timeline = [
  {
    year: "2018",
    title: "Personería jurídica de Colombia Humana",
    text: "Hice parte del equipo jurídico que demandó el amparo de tutela y que, a instancias de la Corte Constitucional, logró la personería jurídica del movimiento político Colombia Humana.",
  },
  {
    year: "2021",
    title: "Nace Primera Línea Jurídica",
    text: "Fundación Primera Línea Jurídica: Durante el estallido social impulsé la creación de una red nacional de abogados para brindar defensa de oficio a jóvenes criminalizados por ejercer su derecho a la protesta.",
  },
  {
    year: "2022",
    title: "Los límites del poder",
    text: "Promoví una acción de tutela contra el entonces presidente Iván Duque y el comandante de las FF. MM., Eduardo Enrique Zapateiro, por participación indebida en política durante la campaña presidencial. El Consejo de Estado estudió el caso y reiteró las restricciones para estos cargos.",
  },
];

export const commitment = {
  eyebrow: "Cap. 05 · Compromiso social",
  title: "El derecho como servicio",
  image: `${import.meta.env.BASE_URL}img/compromiso.jpg`,
  imageAlt: "Sebastián Caballero Ortega durante una jornada de compromiso social",
  items: [
    {
      icon: "users",
      text: "Miembro del Comité Permanente por la Defensa de los Derechos Humanos",
    },
    {
      icon: "globe",
      text: "Intervenciones en instancias internacionales como la CIDH — Comisión Interamericana de Derechos Humanos",
    },
    {
      icon: "heart",
      text: "Defensa jurídica gratuita a jóvenes criminalizados por ejercer el derecho a la protesta",
    },
  ],
};

export const quoteBanner = {
  before: "La defensa jurídica también es defensa de la ",
  highlight: "dignidad",
  after: ".",
};

export const vision = {
  eyebrow: "Cap. 06 · Propósito y visión",
  title: "Propósito y visión",
  lines: [
    "La defensa de los derechos no es para mí un discurso, es una responsabilidad que asumí como forma de vida.",
    "No hablo desde el pasado. Hablo desde la esperanza y desde el compromiso de construir un futuro más justo.",
  ],
  body: "Desde esa convicción personal, imagino un país donde la justicia funcione, las instituciones respondan y las oportunidades no dependan del privilegio. Un país que podamos tejer juntos, donde el apoyo entre todos fortalezca lo público y dignifique la vida de cada persona.",
  pillarsLabel: "Un país con:",
  pillars: [
    {
      icon: "scale",
      title: "Justicia independiente",
      text: "Un sistema judicial autónomo, garante y al servicio de las personas.",
    },
    {
      icon: "landmark",
      title: "Fortalecimiento institucional",
      text: "Instituciones sólidas, cercanas y al servicio de lo público.",
    },
    {
      icon: "eye",
      title: "Transparencia",
      text: "Gestión con rendición de cuentas y cero privilegios.",
    },
    {
      icon: "book",
      title: "Educación como eje de transformación",
      text: "La educación como motor de oportunidades y de transformación social.",
    },
  ],
};

export const blogPosts = [
  {
    image: `${import.meta.env.BASE_URL}img/blog-politica.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre política",
    category: "Política",
    date: "5 de septiembre de 2025",
    title: "Primera Línea Jurídica: orígenes y propósito",
  },
  {
    image: `${import.meta.env.BASE_URL}img/blog-ffie.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre el FFIE",
    category: "Gobierno",
    date: "5 de septiembre de 2025",
    title: "¿Qué es el FFIE y cuáles son sus prioridades?",
  },
  {
    image: `${import.meta.env.BASE_URL}img/blog-justicia.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre justicia",
    category: "Justicia",
    date: "17 de agosto de 2025",
    title: "Democratizar lo público con técnica y garantías",
  },
];

export const cta = {
  title: "¿Tienes una causa que defender?",
  sub: "Cada proceso comienza con una conversación.",
  body: "Si necesitas orientación jurídica, quieres conocer mi trabajo o tienes algo que compartir, estoy disponible para escucharte.",
};

/* Movimiento IMPACTO — identidad de marca (manual de marca) */
export const movement = {
  name: "IMPACTO",
  tagline: "HACEMOS QUE PASE",
};

export const slogans = {
  mantra: "IMAGINA. MUÉVETE. PARTICIPA. ACTÚA. TRANSFORMA. IMPACTA.",
  voces: "SOMOS MUCHAS VOCES, UN MISMO IMPACTO",
  hacemos: "HACEMOS QUE PASE",
  gente: "La gente primero, SIEMPRE!",
  cambio: "EL CAMBIO NO SE ESPERA ¡SE HACE!",
  juntxs: "JUNTXS SOMOS IMPACTO",
  yatoca: "YA TOCA",
};

export const footer = {
  bio: "Abogado constitucionalista, defensor de derechos humanos y gestor público. Creo que la justicia, la democracia y lo público se construyen todos los días, junto a la gente.",
  formTitle: "Escríbeme",
  formNote: "Tu mensaje se abrirá en tu aplicación de correo, listo para enviarse.",
};