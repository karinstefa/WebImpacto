import Reveal from "./Reveal";
import { formation } from "../data";

export default function Formation() {
  return (
    <section id="formacion" className="section th-verde" aria-labelledby="formacion-titulo">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Cap. 02 · Formación</p>
          <h2 id="formacion-titulo" className="section-title">
            Formación y trayectoria académica
          </h2>
        </Reveal>

        <div className="formation__grid">
          {formation.map((item, i) => (
            <Reveal as="article" key={item.degree} delay={(i % 3) * 90} className="sticker">
              <div className="formation__icon">
                <img src={item.icon} alt="" width="64" height="64" loading="lazy" />
              </div>
              <h3 className="formation__degree">{item.degree}</h3>
              {item.school && <p className="formation__school">{item.school}</p>}
              {item.note && <p className="formation__note">{item.note}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
