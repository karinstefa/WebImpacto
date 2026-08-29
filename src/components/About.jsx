import Reveal from "./Reveal";
import Isotipo from "./Isotipo.jsx";
import { SparkDoodle } from "./Doodles.jsx";
import { about } from "../data";

export default function About() {
  return (
    <section id="porque" className="section th-crema" aria-labelledby="porque-titulo">
      <div className="container about__grid">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="porque-titulo" className="section-title">
            {about.title}
          </h2>
          <p className="section-lead">{about.lead}</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="about__bubble">
            <SparkDoodle
              style={{ position: "absolute", top: "-2rem", right: "-1.4rem", width: "2.6rem", color: "var(--negro)" }}
            />
            <blockquote className="about__quote-text">{about.quote}</blockquote>
            <div className="about__quote-seal">
              <Isotipo aria-hidden="true" />
              <p className="about__quote-sign">Sebastián Caballero Ortega</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
