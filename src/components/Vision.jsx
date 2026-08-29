import { BookOpen, Eye, Landmark, Scale } from "lucide-react";
import Reveal from "./Reveal";
import { vision } from "../data";

const icons = { scale: Scale, landmark: Landmark, eye: Eye, book: BookOpen };

export default function Vision() {
  return (
    <section id="vision" className="section th-crema" aria-labelledby="vision-titulo">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{vision.eyebrow}</p>
          <h2 id="vision-titulo" className="section-title">
            {vision.title}
          </h2>
        </Reveal>

        <div className="vision__intro">
          {vision.lines.map((line, i) => (
            <Reveal as="p" key={line} delay={i * 90} className="vision__line">
              {line}
            </Reveal>
          ))}
          <Reveal as="p" delay={180} className="vision__body">
            {vision.body}
          </Reveal>
        </div>

        <Reveal delay={120} className="vision__panel sticker">
          <p className="vision__panel-label">{vision.pillarsLabel}</p>
          <ul className="vision__pillars">
            {vision.pillars.map((pillar) => {
              const Icon = icons[pillar.icon];
              return (
                <li key={pillar.title} className="vision__pillar">
                  <span className="vision__pillar-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="vision__pillar-title">{pillar.title}</h3>
                  <p className="vision__pillar-text">{pillar.text}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
