import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Parallax from "@/components/Parallax/Parallax";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import VisitCount from "@/components/VisitCount/VisitCount";

export default function Home() {
  return (
    <>
      <section id="Home">
        <div className="content">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id="Skills" className="parallaxSection">
        <Parallax>What Can I Do</Parallax>
      </section>

      <section>
        <div className="content">
          <Skills />
        </div>
      </section>

      <section id="Projects" className="parallaxSection">
        <Parallax>What I have done</Parallax>
      </section>

      <Portfolio />

      <section id="Contact">
        <div className="content">
          <Contact />
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Umidjon Jumaqulov. All rights reserved.</p>
        <VisitCount />
      </footer>
    </>
  );
}
