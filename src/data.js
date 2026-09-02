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
    degree: "Especialización en Economía",
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
    slug: "primera-linea-juridica",
    image: `${import.meta.env.BASE_URL}img/blog-politica.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre política",
    category: "Política",
    date: "5 de septiembre de 2025",
    title: "Primera Línea Jurídica: orígenes y propósito",
  },
  {
    slug: "ffie-prioridades",
    image: `${import.meta.env.BASE_URL}img/blog-ffie.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre el FFIE",
    category: "Gobierno",
    date: "5 de septiembre de 2025",
    title: "¿Qué es el FFIE y cuáles son sus prioridades?",
  },
  {
    slug: "democratizar-lo-publico",
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

export const articles = [
  {
    slug: "primera-linea-juridica",
    title: "Primera Línea Jurídica: orígenes y propósito",
    category: "Política",
    date: "5 de septiembre de 2025",
    image: `${import.meta.env.BASE_URL}img/blog-politica.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre política",
    source: {
      label: "Propia",
    },
    body: [
      {
        type: "paragraph",
        content:
          "La **Primera Línea Jurídica** surgió en 2021 como **red de abogados** que ofreció **asistencia legal gratuita** a manifestantes durante el Paro Nacional. Fue impulsada por juristas como **Augusto Ocampo** y **Miguel Ángel del Río**, con capítulos en varias ciudades y cientos de profesionales voluntarios. Aquí contamos qué es, por qué nació y qué hacía en terreno.",
      },
      {
        type: "links",
        links: [
          { text: "Infobae", url: "https://www.infobae.com/america/colombia/2021/05/30/crean-la-primera-linea-juridica-para-defender-manifestantes-en-el-paro-nacional/" },
          { text: "El Espectador", url: "https://www.elespectador.com/judicial/primera-linea-de-defensores-de-la-protesta-a-imputados-por-terrorismo/" },
        ],
      },
      {
        type: "heading",
        content: "¿Qué es?",
      },
      {
        type: "paragraph",
        content:
          "Una **red nacional de defensa** que brindó orientación, reacción a capturas y acompañamiento procesal a personas que ejercían el **derecho a la protesta**. Diversos reportes periodísticos y académicos registran su despliegue y cobertura.",
      },
      {
        type: "links",
        links: [
          { text: "RTVE", url: "https://www.rtve.es/noticias/20210603/colombia-defensa-gratuita-para-detenidos-protestas/2098200.shtml" },
          { text: "Pressenza", url: "https://www.pressenza.com/es/2021/08/quien-es-la-primera-linea-juridica/" },
        ],
      },
      {
        type: "heading",
        content: "¿Cómo nació y quiénes la impulsaron?",
      },
      {
        type: "paragraph",
        content:
          "Crónicas y entrevistas sitúan su **gestación en mayo–julio de 2021**; Infobae atribuye la idea inicial a **Augusto Ocampo** y reseña el trabajo articulado con **Miguel Ángel del Río** y otros; El Espectador recoge el relato de Del Río sobre la conformación de la red.",
      },
      {
        type: "heading",
        content: "¿Qué hacía en la práctica?",
      },
      {
        type: "list",
        items: [
          "Recepción de casos en puntos de protesta.",
          "**Asistencia inmediata** frente a capturas y verificación de garantías.",
          "**Pedagogía constitucional** básica para manifestantes.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Coberturas hablan de **cientos** (RTVE reportó 800) y hasta **miles** de abogados inscritos (estimaciones en medios universitarios), lo que refleja un despliegue amplio y descentralizado.",
      },
      {
        type: "links",
        links: [
          { text: "RTVE", url: "https://www.rtve.es/noticias/20210603/colombia-defensa-gratuita-para-detenidos-protestas/2098200.shtml" },
          { text: "Unimedios Medellín", url: "https://unimedios.medellin.unal.edu.co/bitacora/conexion/914-las-primeras-lineas-protagonistas-en-las-manifestaciones.html" },
        ],
      },
    ],
  },
  {
    slug: "ffie-prioridades",
    title: "¿Qué es el FFIE y cuáles son sus prioridades?",
    category: "Gobierno",
    date: "5 de septiembre de 2025",
    image: `${import.meta.env.BASE_URL}img/blog-ffie.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre el FFIE",
    source: {
      label: "Propia",
    },
    body: [
      {
        type: "heading",
        content: "Fondo de Financiamiento de la Infraestructura Educativa",
      },
      {
        type: "paragraph",
        content:
          "El Fondo de Financiamiento de la Infraestructura Educativa (FFIE) es una **cuenta especial del Ministerio de Educación** (sin personería jurídica) creada por ley para viabilizar y financiar proyectos de **infraestructura educativa física y digital** en todo el país. Su marco actual se rige por el **Decreto 1433 de 2020** y lineamientos técnicos que priorizan transparencia, eficiencia y control. Aquí explicamos su naturaleza, cómo opera y sus prioridades presentes.",
      },
      {
        type: "links",
        links: [
          { text: "Función Pública", url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=144973" },
          { text: "Alcaldía de Bogotá", url: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=101373" },
        ],
      },
      {
        type: "heading",
        content: "Naturaleza y objeto",
      },
      {
        type: "paragraph",
        content:
          "El FFIE canaliza recursos de diversas fuentes para **construcción, mejoramiento, ampliación y dotación** de sedes educativas de educación inicial, preescolar, básica y media (incluye interventorías). Es **instrumento financiero del MEN** sin personería jurídica, creado por el art. 59 de la Ley 1753/2015 (mod. art. 184 Ley 1955/2019) y reglamentado por el Decreto 1433/2020.",
      },
      {
        type: "links",
        links: [
          { text: "Función Pública", url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=144973" },
          { text: "Ministerio de Educación Nacional", url: "https://www.mineducacion.gov.co/1759/articles-356180_recurso_11.pdf" },
        ],
      },
      {
        type: "heading",
        content: "Cómo funciona",
      },
      {
        type: "paragraph",
        content:
          "El FFIE cuenta con **Junta Administradora** (prioriza proyectos) y una **Unidad de Gestión** (ejecuta esquemas para diseñar, contratar y hacer seguimiento a obras). Su portal y micrositios publican misiones, proyectos y documentos/circulares para la trazabilidad pública.",
      },
      {
        type: "links",
        links: [
          { text: "Ministerio de Educación Nacional", url: "https://www.mineducacion.gov.co/1759/articles-351433_recurso_1.pdf" },
          { text: "FFIE — Conócenos", url: "https://ffie.com.co/conocenos/" },
        ],
      },
      {
        type: "heading",
        content: "Prioridades actuales",
      },
      {
        type: "list",
        items: [
          "**Transparencia y anticorrupción** (Política UG-FFIE, versión vigente), con obligaciones para contratistas y mecanismos de control.",
          "**Ejecución territorial** con seguimiento a proyectos y convocatorias, además de reportes y listados de proveedores.",
        ],
      },
      {
        type: "links",
        links: [
          { text: "Política Anticorrupción UG-FFIE", url: "https://ffie.com.co/wp-content/uploads/2025/08/PO-PM-03-02-POLITICA-ANTICORRUPCION-UG-FFIE-V3.pdf" },
          { text: "Ministerio de Educación Nacional — listado de proveedores", url: "https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Infraestructura/424867%3AFFIE-publica-listado-de-posibles-proveedores-para-obras-de-infraestructura-educativa-garantizando-transparencia-en-los-procesos-de-seleccion" },
        ],
      },
    ],
  },
  {
    slug: "democratizar-lo-publico",
    title: "Democratizar lo público con técnica y garantías",
    category: "Justicia",
    date: "17 de agosto de 2025",
    image: `${import.meta.env.BASE_URL}img/blog-justicia.jpg`,
    imageAlt: "Imagen de contexto del artículo sobre justicia",
    source: {
      label: "Propia",
    },
    body: [
      {
        type: "paragraph",
        content:
          "**Resumen.** La Nueva Prensa publicó una conversación con Sebastián Caballero —entonces vicepresidente jurídico de la Sociedad de Activos Especiales (SAE)— en la que expone su ruta profesional, su visión sobre apertura democrática y el sentido público de la administración de bienes del Estado. Este artículo recoge los puntos esenciales para nuestros lectores.",
      },
      {
        type: "links",
        links: [
          { text: "La Nueva Prensa — Entrevista con Sebastián Caballero", url: "https://www.lanuevaprensa.com.co/component/k2/entrevista-con-sebastian-caballero-cabeza-juridica-de-la-sae" },
        ],
      },
      {
        type: "heading",
        content: "Vocación y formación en derechos humanos",
      },
      {
        type: "paragraph",
        content:
          "Caballero relata que su práctica jurídica se forjó en entornos de alto impacto, iniciándose en el Colectivo de Abogados Jorge Alvear/Albear Restrepo y trabajando en casos emblemáticos de la memoria judicial del país. Esa experiencia consolidó su foco en garantías y en el valor democrático del debido proceso.",
      },
      {
        type: "heading",
        content: "Apertura democrática y personería jurídica",
      },
      {
        type: "paragraph",
        content:
          "Desde su trabajo político-jurídico, integró el equipo que defendió la personería de Colombia Humana, destacando que reconocer derechos de participación fortalece el contrato social y reduce escenarios de exclusión. En ese marco, ha estudiado y expuesto el fenómeno del *lawfare* en América Latina como instrumentalización de la justicia, un riesgo frente al cual propone respuestas con evidencia y controles.",
      },
      {
        type: "heading",
        content: "Acompañamiento a la protesta social",
      },
      {
        type: "paragraph",
        content:
          "Durante el estallido social de 2021, impulsó una red de defensa para jóvenes judicializados, conocida como Primera Línea Jurídica, con énfasis en asistencia técnica, documentación de casos y salvaguarda de garantías.",
      },
      {
        type: "heading",
        content: "Gestión en SAE: bienes para el interés público",
      },
      {
        type: "paragraph",
        content:
          "En su paso por la SAE, sintetiza el propósito en una idea: democratizar los activos incautados para que sirvan a la gente, con más transparencia y controles frente a la corrupción. El enfoque combina orden jurídico, criterios objetivos de asignación y mejora de la eficiencia administrativa.",
      },
      {
        type: "heading",
        content: "Mirada de país y reformas",
      },
      {
        type: "paragraph",
        content:
          "Caballero subraya que la \"apertura democrática\" es el punto de partida de un Estado que escucha y corrige; por eso participa en espacios técnicos —como comisiones de empalme o de expertos— orientados a modernizar la justicia y elevar estándares de integridad institucional.",
      },
      {
        type: "note",
        content:
          "La entrevista completa fue publicada el **13 de abril de 2024** en La Nueva Prensa. Invitamos a leerla para ampliar citas y contexto.",
      },
      {
        type: "links",
        links: [
          { text: "La Nueva Prensa — Entrevista con Sebastián Caballero", url: "https://www.lanuevaprensa.com.co/component/k2/entrevista-con-sebastian-caballero-cabeza-juridica-de-la-sae" },
        ],
      },
    ],
  },
];