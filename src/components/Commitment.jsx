import Reveal from "./Reveal";
import Isotipo from "./Isotipo.jsx";
import { commitment, slogans } from "../data";

export default function Commitment() {
  return (
    <section id="compromiso" className="section th-rojo" aria-labelledby="compromiso-titulo">
      <div className="halftone halftone--corner" aria-hidden="true" />
      <div className="container commitment__grid">
        <Reveal delay={80} className="commitment__media">
          <figure>
            <img
              className="commitment__img photo-bn"
              src={commitment.image}
              alt={commitment.imageAlt}
              width="1600"
              height="592"
              loading="lazy"
            />
          </figure>
          <span className="ribbon ribbon--negro commitment__ribbon">{slogans.yatoca}</span>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{commitment.eyebrow}</p>
            <h2 id="compromiso-titulo" className="section-title">
              {commitment.title}
            </h2>
          </Reveal>
          <ul className="commitment__list">
            {commitment.items.map((item, i) => (
              <Reveal as="li" key={item.text} delay={i * 100} className="commitment__item">
                <Isotipo aria-hidden="true" />
                <p className="commitment__text">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
