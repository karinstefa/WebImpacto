import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import ArticlePage from "./components/ArticlePage.jsx";

// Gate scroll-reveal animations behind a JS-supported flag so content
// is always visible when JavaScript is unavailable.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articulo/:slug" element={<ArticlePage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
