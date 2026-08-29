import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import Isotipo from "./Isotipo.jsx";
import { BoltDoodle } from "./Doodles.jsx";
import { cta, site, slogans } from "../data";

export default function Cta() {
  return (
    <section className="cta section th-crema" aria-labelledby="cta-titulo">
      <div className="container">
        <Reveal className="cta__panel">
          <div className="halftone halftone--corner" aria-hidden="true" />
          <BoltDoodle className="cta__bolt" />
          <Isotipo className="cta__seal" aria-hidden="true" />
          <p className="ribbon ribbon--verde cta__ribbon">{slogans.cambio}</p>
          <p className="eyebrow cta__eyebrow">Contacto</p>
          <h2 id="cta-titulo" className="cta__title">
            {cta.title}
          </h2>
          <p className="cta__sub">{cta.sub}</p>
          <p className="cta__body">{cta.body}</p>
          <div className="cta__actions">
            <a className="btn btn--verde btn--lg" href="#contacto">
              Ir a contacto
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--linea btn--lg" href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" />
              Escribir por correo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
