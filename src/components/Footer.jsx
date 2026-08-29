import { useState } from "react";
import { Send } from "lucide-react";
import Isotipo from "./Isotipo.jsx";
import ImpactoLogo from "./ImpactoLogo.jsx";
import SocialIcon from "./SocialIcon";
import { footer, movement, site, slogans } from "../data";

export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = `Mensaje de ${name}`;
    const body = `${message}\n\n— ${name}${email ? ` · ${email}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <footer id="contacto" className="footer section th-negro" aria-labelledby="contacto-titulo">
      <div className="container">
        <div className="footer__top">
          <ImpactoLogo />
          <p className="footer__juntxs">
            <Isotipo aria-hidden="true" />
            {slogans.juntxs}
          </p>
        </div>

        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Isotipo label="Isotipo del movimiento IMPACTO" />
              <p className="footer__name">
                {site.name}
                <span className="footer__role">Abogado Constitucionalista · DDHH</span>
              </p>
            </div>

            <p className="footer__bio">{footer.bio}</p>

            <a className="footer__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>

            <ul className="footer__socials">
              {site.socials.map((social) => (
                <li key={social.id}>
                  <a
                    className="footer__social"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon id={social.id} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact">
            <h3 id="contacto-titulo" className="contact__title">
              {footer.formTitle}
            </h3>
            <p className="contact__note">{footer.formNote}</p>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    className="contact__input"
                    id="nombre"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="correo">
                    Correo electrónico
                  </label>
                  <input
                    className="contact__input"
                    id="correo"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  className="contact__textarea"
                  id="mensaje"
                  name="message"
                  required
                  placeholder="Cuéntame tu causa, tu proyecto o la conversación que quieres tener…"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn btn--verde">
                  <Send size={16} aria-hidden="true" />
                  Enviar mensaje
                </button>
              </div>
            </form>

            {sent && (
              <p className="contact__status" role="status">
                Se abrió tu aplicación de correo con el mensaje listo para enviar. ¡Gracias por
                escribir!
              </p>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Sebastián Caballero Ortega. Todos los derechos reservados.</p>
          <p className="footer__bottom-seal">
            <Isotipo aria-hidden="true" />
            <span>
              Movimiento {movement.name} · {slogans.hacemos} ·{" "}
              <span className="footer__handle">{movement.handle}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
