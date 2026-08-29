/**
 * Elementos gráficos del manual de marca IMPACTO, dibujados como SVG
 * inline: flecha a mano, rayo, chispa/asterisco, explosión outline,
 * squiggle, estrella sólida y marca de agua tipográfica "IMPACTO".
 * Todos heredan `currentColor` para vivir sobre cualquier bloque de color.
 */

export function ArrowDoodle({ className = "", ...rest }) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true" {...rest}>
      <path
        d="M10 56 C40 50 66 38 86 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path d="M78 4 L112 14 L84 40 Z" fill="currentColor" />
    </svg>
  );
}

export function BoltDoodle({ className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M58 2 L18 54 L42 54 L34 98 L80 40 L54 40 Z" />
    </svg>
  );
}

export function SparkDoodle({ className = "", ...rest }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M50 6 V94" />
      <path d="M12 28 L88 72" />
      <path d="M88 28 L12 72" />
    </svg>
  );
}

export function BurstDoodle({ className = "", ...rest }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <polygon points="50,4 58,30 84,14 70,38 96,44 68,52 82,80 56,62 50,92 42,62 18,82 30,52 4,46 32,38 16,12 44,30" />
    </svg>
  );
}

export function SquiggleDoodle({ className = "", ...rest }) {
  return (
    <svg
      viewBox="0 0 90 50"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M6 40 C14 12 26 12 26 30 C26 48 14 48 20 30 C28 8 44 8 44 26 C44 44 32 46 38 28 C46 6 66 10 82 18" />
    </svg>
  );
}

export function StarSolid({ className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true" {...rest}>
      <polygon points="50,4 61.8,35.8 95.1,37 68.9,57.9 78.5,90 50,71 21.5,90 31.1,57.9 4.9,37 38.2,35.8" />
    </svg>
  );
}

/**
 * Marca de agua: la palabra IMPACTO repetida en outline, inclinada 8.3°.
 */
export function Watermark({ word = "IMPACTO", lines = 4, className = "", ...rest }) {
  return (
    <div className={`watermark ${className}`.trim()} aria-hidden="true" {...rest}>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i}>{word}</span>
      ))}
    </div>
  );
}
