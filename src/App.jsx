import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Formation from "./components/Formation.jsx";
import Experience from "./components/Experience.jsx";
import Timeline from "./components/Timeline.jsx";
import Commitment from "./components/Commitment.jsx";
import QuoteBanner from "./components/QuoteBanner.jsx";
import Vision from "./components/Vision.jsx";
import Blog from "./components/Blog.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import { slogans } from "./data.js";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <a className="skip-link" href="#inicio">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee text={slogans.mantra} />
        <About />
        <Formation />
        <Experience />
        <Timeline />
        <Commitment />
        <QuoteBanner />
        <Vision />
        <Blog />
        <Cta />
        <Marquee className="marquee--rojo" text={`${slogans.voces} ★ ${slogans.yatoca}`} />
      </main>
      <Footer />
    </>
  );
}
