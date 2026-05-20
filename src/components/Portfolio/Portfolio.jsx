import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1, // Make sure this matches your sequence
    title: "TestEdify Learning Platform",
    img: "./edify.jpg", // Update with your actual image path
    desc: "Edify is a comprehensive Next.js 16 educational platform featuring tailored portals for students, teachers, and administrators. It integrates Gemini AI for automated test generation, tracks student progress with gamified XP and streaks, and offers robust curriculum-driven navigation. Built with React 19, Tailwind CSS, and Firebase, it supports complex workflows like image-based inputs, LaTeX math rendering, and multi-language support to modernize classroom management.",
    git: "https://github.com/umidjon0339/edify-student", // Optional: Remove if private
    link: "https://testedify.uz", // NEW: Optional live visit link
  },
  {
    id: 2, // Make sure this matches your sequence
    title: "QR Restaurant Menu & POS",
    img: "./restaurant.jpg", // Update with your actual image path
    desc: "A real-time restaurant ordering platform built with Next.js, TypeScript, and Firebase. It features a dual-experience architecture: a secure Admin dashboard for staff to manage menus, track live orders, and generate table-specific QR codes, alongside a mobile-first customer interface for browsing and cart management using Zustand. The application leverages Firestore real-time listeners for live order status updates and includes multi-language support (Uzbek, Russian, English) with a responsive, themed UI tailored via Tailwind CSS.",
    git: "https://github.com/umidjon0339/yalla-menu", // Update with your actual repo link
    link: "https://yalla-menu.vercel.app", // Optional live visit link
  },
  {
    id: 7, // Make sure this matches your sequence
    title: "Modern Clinic Website",
    img: "./clinicPreview.JPG", // Update with your actual image path
    desc: "A clean, responsive informational website for a medical clinic built with Next.js, TypeScript, and Tailwind CSS. The project utilizes the Next.js App Router to deliver fast, dynamic routing for doctor profiles, service listings, and appointment booking interfaces. It features a modular component architecture and a custom static data layer, demonstrating a strong grasp of modern frontend practices for building accessible, user-friendly marketing websites.",
    git: "https://github.com/umidjon0339/healthplus-clinic", // Update with your actual repo link
    link: "https://healthplus-clinic-c3ru.vercel.app/", // Optional live visit link
  },
];

function Single({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            {/* New Flex Container for Buttons */}
            <div className="buttonContainer" style={{ display: "flex", gap: "20px" }}>
              
              {/* Conditionally render GitHub Link */}
              {item.git && (
                <a href={item.git} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p>GitHub</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
              )}

              {/* Conditionally render Live Visit Link */}
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p>Visit Project</p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
