# Sebastián Caballero Ortega — Sitio web profesional

Sitio personal y profesional de **Sebastián Caballero Ortega**, abogado
constitucionalista, defensor de derechos humanos y gestor público.
Construido desde cero con **React + Vite** como una aplicación de una
sola página con navegación por anclas.

## Requisitos

- Node.js 18+ (probado con Node 20/22)
- npm

## Cómo ejecutar

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo → http://localhost:5173
npm run build      # build de producción → dist/
npm run preview    # previsualiza el build de producción
```

## Estructura

```
src/
  App.jsx               # composición de secciones + skip-link
  main.jsx              # punto de entrada (carga estilos y <App/>)
  styles.css            # sistema de diseño completo (tokens, secciones, responsive)
  data.js               # todo el contenido del sitio (centralizado)
  components/
    Reveal.jsx          # animación de aparición al hacer scroll (IntersectionObserver)
    Seal.jsx            # sello institucional SVG (anillo tipográfico + balanza)
    Navbar.jsx          # navegación fija, menú móvil, sección activa
    Hero.jsx            # portada: video/marco, presentación y datos clave
    About.jsx           # Cap. 01 — ¿Por qué la defensa de los DDHH?
    Formation.jsx       # Cap. 02 — Formación académica
    Experience.jsx      # Cap. 03 — Gestión pública + Ejercicio litigante
    Timeline.jsx        # Cap. 04 — Momentos que marcaron su trayectoria
    Commitment.jsx      # Cap. 05 — Compromiso social
    QuoteBanner.jsx     # Cita central
    Vision.jsx          # Cap. 06 — Propósito y visión
    Blog.jsx            # Cap. 07 — Escritos
    Cta.jsx             # Llamado a la acción
    Footer.jsx          # Contacto + form (mailto) + redes + datos legales
public/
  img/                  # imágenes y video (servidos de forma estática)
```

## Decisiones de diseño

- **Paleta «institucional»**: azul marino profundo (`#081A38`) como color
  de autoridad y confianza, latón cálido (`#C9A86A`) como acento de
  prestigio, y crema (`#FBF7EE`) para las superficies claras. La gama
  evoluciona la paleta original del sitio antiguo (navy + bronce) hacia
  un contraste más contemporáneo y legible.
- **Tipografía**: *Fraunces* (serif de carácter editorial) para los
  titulares y *Public Sans* — la tipografía del sistema de diseño del
  gobierno federal de EE. UU. — para el cuerpo: un guiño deliberado a la
  vocación de servicio público del perfil.
- **Símbolo distintivo**: un sello SVG original (anillo tipográfico con la
  balanza de la justicia) que aparece en portada, citas, CTA y footer,
  reforzando la idea de un "expediente institucional" de campaña.
- **Ritmo de lectura**: los capítulos están numerados (`Cap. 01… Cap. 07`)
  porque el sitio narra una trayectoria en orden; se alternan secciones
  claras con capítulos oscuros para dar dramatismo a la experiencia y la
  visión.
- **Accesibilidad**: HTML semántico, salto de contenido, foco visible,
  `aria-current` en la navegación, contraste AA, `prefers-reduced-motion`
  (desactiva video y animaciones) y texto de imagen alternativo.
- **Rendimiento**: video de portada comprimido (720p, ~1.5 MB),
  `loading="lazy"` en imágenes secundarias, animaciones solo con
  `opacity/transform`.
- **Formulario de contacto**: sin backend; al enviar se compone un
  mensaje `mailto:` hacia el correo del perfil, listo en la aplicación de
  correo del visitante.

## Contenido

Todo el contenido proviene del sitio original (héroe, formación,
experiencia, momentos clave, compromiso social, citas, visión, escritos y
contacto) y está centralizado en `src/data.js` para facilitar su edición.