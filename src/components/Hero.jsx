import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Isotipo from "./Isotipo.jsx";
import { SparkDoodle, Watermark } from "./Doodles.jsx";
import { heroFacts, site, slogans } from "../data";

export default function Hero() {
  const [motionOk] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const [nameTop, nameMid] = site.firstName.split(" ");

  return (
    <section id="inicio" className="hero th-rojo" aria-labelledby="hero-titulo">
      {motionOk && (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}img/about-portrait.png`}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={`${import.meta.env.BASE_URL}img/hero-bg.mp4`} type="video/mp4" />
        </video>
      )}
      <div className="hero__scrim" aria-hidden="true" />
      <div className="halftone halftone--corner" aria-hidden="true" />
      <Watermark className="hero__watermark" lines={3} />

      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <Isotipo />
            Defensor de Derechos Humanos
          </p>
          <h1 id="hero-titulo" className="hero__name">
            <span className="hero__line">{nameTop}</span>
            <span className="hero__line hero__line--block">{nameMid}</span>
            <span className="hero__line hero__line--star">
              {site.lastName}
              <Isotipo />
            </span>
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__quote">«{site.heroQuote}»</p>
          <div className="hero__cta">
            <a className="btn btn--verde btn--lg" href="#porque">
              Conocer mi trayectoria
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--linea btn--lg" href="#contacto">
              Ir a contacto
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <figure className="hero__frame">
            <SparkDoodle className="hero__spark" />
            <img
              className="hero__photo photo-bn"
              src={`${import.meta.env.BASE_URL}img/hero-portrait.png`}
              alt="Retrato oficial de Sebastián Caballero Ortega"
              width="1280"
              height="720"
              fetchPriority="high"
            />
            <figcaption className="hero__frame-caption">
              <span>Abogado Constitucionalista</span>
              <Isotipo label="Isotipo del movimiento IMPACTO" />
            </figcaption>
            <span className="ribbon ribbon--negro hero__ribbon">{slogans.gente}</span>
          </figure>
        </div>
      </div>

      <dl className="hero__facts">
        <div className="container">
          {heroFacts.map((fact) => (
            <div key={fact.value} className="hero__fact">
              <dt className="hero__fact-value">{fact.value}</dt>
              <dd className="hero__fact-text">{fact.text}</dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
