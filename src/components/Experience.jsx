import { Landmark, Scale } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data";

const icons = { landmark: Landmark, scale: Scale };

export default function Experience() {
  return (
    <section id="experiencia" className="section th-negro" aria-labelledby="experiencia-titulo">
      <div className="halftone halftone--corner" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Cap. 03 · Experiencia</p>
          <h2 id="experiencia-titulo" className="section-title">
            Experiencia
          </h2>
          <p className="section-lead">
            Una trayectoria construida desde dos frentes: la gestión de lo público
            y la defensa de los derechos en los tribunales.
          </p>
        </Reveal>

        <div className="experience__grid">
          {[experience.management, experience.litigation].map((column, ci) => {
            const Icon = icons[column.icon];
            return (
              <Reveal as="article" key={column.title} delay={ci * 130} className="experience__card">
                <header className="experience__head">
                  <span className="experience__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="experience__title">{column.title}</h3>
                </header>
                <ul className="experience__list">
                  {column.items.map((item) => (
                    <li key={item.title} className="experience__item">
                      <p className="experience__item-title">
                        {item.title}
                        {item.badge && <span className="badge">{item.badge}</span>}
                      </p>
                      {item.sub && <p className="experience__item-sub">{item.sub}</p>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
