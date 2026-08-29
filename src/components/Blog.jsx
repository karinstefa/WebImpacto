import Reveal from "./Reveal";
import { blogPosts } from "../data";

export default function Blog() {
  return (
    <section id="escritos" className="section th-negro" aria-labelledby="escritos-titulo">
      <div className="halftone halftone--corner" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Cap. 07 · Publicaciones</p>
          <h2 id="escritos-titulo" className="section-title">
            Escritos
          </h2>
          <p className="section-lead">
            Artículos y reflexiones sobre justicia, democracia y gestión de lo público.
          </p>
        </Reveal>

        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <Reveal as="article" key={post.title} delay={i * 110} className="post sticker">
              <div className="post__media">
                <img
                  className="post__img photo-bn"
                  src={post.image}
                  alt={post.imageAlt}
                  width="980"
                  height="613"
                  loading="lazy"
                />
                <span className="post__cat">{post.category}</span>
              </div>
              <div className="post__body">
                <p className="post__meta">Por Sebastián Caballero Ortega · {post.date}</p>
                <h3 className="post__title">{post.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
