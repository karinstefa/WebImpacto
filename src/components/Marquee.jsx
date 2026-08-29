import { StarSolid } from "./Doodles.jsx";

/**
 * Cinta corrida (ticker) con slogans de la marca en Kalam.
 * El texto se anuncia una sola vez a lectores de pantalla;
 * la pista animada queda oculta (aria-hidden).
 */
export default function Marquee({ text, className = "", copies = 3 }) {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {Array.from({ length: copies }).map((_, i) => (
        <span className="marquee__chunk" key={i}>
          {text}
          <StarSolid className="marquee__star" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`.trim()}>
      <p className="sr-only">{text}</p>
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
