import "./App.scss";
import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import VisitCount from "./components/VisitCount/VisitCount";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";

import Skills from "./components/Skills/Skills";

const App = () => {
  useEffect(() => {
    // Fire-and-forget: increment visit counter on serverless endpoint.
    fetch("/api/visit", { method: "POST", keepalive: true }).catch(() => {});
  }, []);

  return (
    <div>
      <section id="Home">
        <div className="content">
          <Navbar />

          <Hero />
        </div>
      </section>

      <section id="Skills">
        <Parallax>What Can I Do</Parallax>
      </section>

      <section id="Skills" className="mobileSkills">
        <div className="content">
          {" "}
          <Skills />
        </div>
      </section>

      <section id="Projects">
        <Parallax>What I have done</Parallax>
      </section>

      <Portfolio />

      <section id="Contact">
        <div className="content">
          <Contact />
        </div>
      </section>

      <footer className="site-footer">
        <div className="content">
          <VisitCount />
        </div>
      </footer>
    </div>
  );
};

export default App;
