/**
 * Isotipo del movimiento IMPACTO: bocadillo de diálogo con una estrella
 * en negativo (recortada con fill-rule evenodd para que el fondo asome).
 * Es el símbolo recurrente de la marca: bullets, sellos, hero y footer.
 */
export default function Isotipo({ className = "", label, ...rest }) {
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": "true" };

  return (
    <svg
      viewBox="0 0 100 92"
      className={`isotipo ${className}`.trim()}
      fill="currentColor"
      {...a11y}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M50 4 C27 4 8 20 8 40 C8 52 14 62 24 69 C22 77 17 84 10 89 C21 87 30 82 36 76 C40 77 45 78 50 78 C55 78 60 77 64 76 C70 82 79 87 90 89 C83 84 78 77 76 69 C86 62 92 52 92 40 C92 20 73 4 50 4 Z M50 17 L55.9 32.9 L72.8 33.6 L59.5 44.1 L64.1 60.4 L50 51 L35.9 60.4 L40.5 44.1 L27.2 33.6 L44.1 32.9 Z"
      />
    </svg>
  );
}
