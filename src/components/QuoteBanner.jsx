import Reveal from "./Reveal";
import Isotipo from "./Isotipo.jsx";
import { Watermark } from "./Doodles.jsx";
import { quoteBanner, slogans } from "../data";

export default function QuoteBanner() {
  return (
    <section className="quote-banner section th-verde" aria-label="Cita">
      <Watermark lines={3} />
      <Isotipo className="quote-banner__seal quote-banner__seal--left" aria-hidden="true" />
      <Isotipo className="quote-banner__seal quote-banner__seal--right" aria-hidden="true" />

      <div className="container">
        <Reveal>
          <blockquote className="quote-banner__text">
            {quoteBanner.before}
            <em>{quoteBanner.highlight}</em>
            {quoteBanner.after}
          </blockquote>
        </Reveal>
        <p className="quote-banner__voces">
          <Isotipo aria-hidden="true" />
          {slogans.voces}
        </p>
      </div>
    </section>
  );
}
