import Reveal from "./Reveal";
import { timeline } from "../data";

export default function Timeline() {
  return (
    <section id="momentos" className="section th-crema" aria-labelledby="momentos-titulo">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Cap. 04 · Trayectoria</p>
          <h2 id="momentos-titulo" className="section-title">
            Momentos que marcaron su trayectoria
          </h2>
        </Reveal>

        <div className="timeline__grid">
          <ol className="timeline">
            {timeline.map((entry, i) => (
              <Reveal as="li" key={entry.year} delay={i * 110} className="timeline__item">
                <p className="timeline__year">{entry.year}</p>
                <p className="timeline__label">{entry.title}</p>
                <blockquote className="timeline__text">{entry.text}</blockquote>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={140} className="timeline__media">
            <figure className="timeline__frame">
              <div className="timeline__frame-inner">
                <img
                  className="timeline__img photo-bn"
                  src={`${import.meta.env.BASE_URL}img/momentos.png`}
                  alt="Momentos que marcaron la trayectoria de Sebastián Caballero Ortega"
                  width="1280"
                  height="720"
                  loading="lazy"
                />
              </div>
              <figcaption className="timeline__caption">
                2018 · 2021 · 2022 — Los momentos que definieron un camino
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
