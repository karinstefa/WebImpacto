import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import ImpactoLogo from "./ImpactoLogo.jsx";
import { navLinks, site } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const pos = window.scrollY + 180;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="container header__inner">
        <a className="brand" href="#inicio" onClick={close} aria-label="Ir al inicio">
          <ImpactoLogo />
          <span className="brand__name">
            {site.firstName}
            <span className="brand__role">Abogado Constitucionalista · DDHH</span>
          </span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="navegacion-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="navegacion-principal" aria-label="Navegación principal">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav__link ${active === link.id ? "is-active" : ""}`}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn--rojo nav__cta" href="#contacto" onClick={close}>
                Contacto
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
