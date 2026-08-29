/**
 * Logotipo del movimiento IMPACTO recreado en HTML/CSS + SVG:
 * palabra escalonada en 3 líneas inclinadas 8.3° —
 * "IM" en negro sobre paralelogramo rojo, "PAC" en negro/tinta,
 * "T" + "O" como óvalo con estrella en negativo — y tagline
 * vertical lateral "HACEMOS QUE PASE".
 *
 * Los colores se heredan por variables CSS (--logo-*) según el
 * bloque de color donde se ubique (negro / crema / rojo / verde).
 */
export default function ImpactoLogo({ className = "", tagline = true, ...rest }) {
  return (
    <span
      className={`logo-impacto ${className}`.trim()}
      role="img"
      aria-label="IMPACTO — hacemos que pase"
      {...rest}
    >
      {tagline && (
        <span className="logo-impacto__tag" aria-hidden="true">
          HACEMOS QUE PASE
        </span>
      )}
      <span className="logo-impacto__stack" aria-hidden="true">
        <span className="logo-impacto__row logo-impacto__row--im">IM</span>
        <span className="logo-impacto__row logo-impacto__row--pac">PAC</span>
        <span className="logo-impacto__row logo-impacto__row--to">
          T
          <svg className="logo-impacto__o" viewBox="0 0 60 64">
            <path
              fillRule="evenodd"
              d="M30 2 C14 2 3 15 3 32 C3 49 14 62 30 62 C46 62 57 49 57 32 C57 15 46 2 30 2 Z M30 14 L34.5 25.9 L47.1 26.4 L37.2 34.3 L40.6 46.6 L30 39.6 L19.4 46.6 L22.8 34.3 L12.9 26.4 L25.5 25.9 Z"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}
