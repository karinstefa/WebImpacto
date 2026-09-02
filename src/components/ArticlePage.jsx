import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ImpactoLogo from "./ImpactoLogo.jsx";
import { articles, site } from "../data";

function formatInline(text) {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const inner = token.slice(2, -2);
    if (token.startsWith("**")) {
      parts.push(
        <strong key={i}>{formatInline(inner)}</strong>
      );
    } else {
      parts.push(<em key={i}>{formatInline(inner)}</em>);
    }
    i += 1;
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function renderBlock(block, i) {
  switch (block.type) {
    case "heading":
      return <h3 key={i} className="article__h3">{formatInline(block.content)}</h3>;
    case "paragraph":
      return <p key={i} className="article__p">{formatInline(block.content)}</p>;
    case "list":
      return (
        <ul key={i} className="article__list">
          {block.items.map((item, j) => (
            <li key={j}>{formatInline(item)}</li>
          ))}
        </ul>
      );
    case "note":
      return <div key={i} className="article__note">{formatInline(block.content)}</div>;
    case "links":
      return (
        <div key={i} className="article__links">
          {block.links.map((link, j) => (
            <a key={j} className="article__link" href={link.url} target="_blank" rel="noreferrer">
              {link.text}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  const goBackToEscritos = () =>
    navigate("/", { state: { scrollTo: "escritos" } });

  if (!article) {
    return (
      <div className="article article--missing">
        <div className="container article__inner">
          <p className="article__404">Artículo no encontrado</p>
          <Link className="btn btn--rojo" to="/">
            <ArrowLeft size={16} aria-hidden="true" /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header is-scrolled">
        <div className="container header__inner">
          <Link className="brand" to="/" aria-label="Ir al inicio">
            <ImpactoLogo />
            <span className="brand__name">
              {site.firstName}
              <span className="brand__role">Abogado Constitucionalista · DDHH</span>
            </span>
          </Link>
          <button type="button" className="btn btn--rojo article__back" onClick={goBackToEscritos}>
            <ArrowLeft size={16} aria-hidden="true" />
            Escritos
          </button>
        </div>
      </header>

      <main className="article">
        <article className="container article__inner">
          <p className="eyebrow">{article.category}</p>
          <h1 className="article__title">{article.title}</h1>
          <p className="article__meta">Por Sebastián Caballero Ortega · {article.date}</p>

          <figure className="article__media">
            <img
              className="article__img"
              src={article.image}
              alt={article.imageAlt}
              width="980"
              height="613"
            />
          </figure>

          <div className="article__body">
            {article.body.map((block, i) => renderBlock(block, i))}
          </div>

          <p className="article__source">
            Fuente: {article.source.label}
          </p>

          <div className="article__nav">
            <button type="button" className="btn btn--linea" onClick={goBackToEscritos}>
              <ArrowLeft size={16} aria-hidden="true" /> Ver todos los escritos
            </button>
          </div>
        </article>
      </main>
    </>
  );
}
