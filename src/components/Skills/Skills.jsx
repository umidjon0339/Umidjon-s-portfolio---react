import "./Skills.scss";
import { motion } from "framer-motion";
import {
  SiAndroidstudio,
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillsData = [
  { title: "React.js", Icon: SiReact, tone: "#61dafb", category: "Frontend" },
  { title: "Next.js", Icon: SiNextdotjs, tone: "#ffffff", category: "Frontend" },
  { title: "TypeScript", Icon: SiTypescript, tone: "#3178c6", category: "Frontend" },
  { title: "JavaScript", Icon: SiJavascript, tone: "#f7df1e", category: "Frontend" },
  { title: "HTML5", Icon: SiHtml5, tone: "#e34f26", category: "Frontend" },
  { title: "CSS", Icon: SiCss, tone: "#1572b6", category: "Frontend" },
  { title: "Tailwind CSS", Icon: SiTailwindcss, tone: "#38bdf8", category: "Frontend" },
  { title: "Kotlin", Icon: SiKotlin, tone: "#7f52ff", category: "Mobile" },
  { title: "Jetpack Compose", Icon: SiJetpackcompose, tone: "#3ddc84", category: "Mobile" },
  { title: "Android Studio", Icon: SiAndroidstudio, tone: "#3ddc84", category: "Mobile" },
  { title: "Python", Icon: SiPython, tone: "#3776ab", category: "Backend" },
  { title: "Django", Icon: SiDjango, tone: "#092e20", category: "Backend" },
  { title: "PostgreSQL", Icon: SiPostgresql, tone: "#336791", category: "Backend" },
  { title: "Git", Icon: SiGit, tone: "#f05032", category: "Tools" },
];

const topRowSkills = skillsData.slice(0, 7);
const bottomRowSkills = skillsData.slice(7);

function Skills() {
  const variants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="container">
      <motion.div className="skills">
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              My <motion.b whileHover={{ color: "orange" }}>&nbsp;Core&nbsp;</motion.b>
            </h1>
          </div>
          <div className="title titlerow">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Skills </motion.b>&nbsp;&amp;&nbsp;
              <motion.b whileHover={{ color: "orange" }}>Abilities</motion.b>
            </h1>
            <a href="/U.Jumaqulov_Resume.pdf">
              <button>Download CV</button>
            </a>
          </div>
        </div>

        <motion.div
          className="listContainer"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          whileInView="animate"
          viewport={{ amount: 0.5 }}
        >
          <div className="marqueeRow">
            <div className="rowLabel">Frontend Stack</div>
            <div className="marqueeTrack">
              {[...topRowSkills, ...topRowSkills].map((skill, index) => {
                const Icon = skill.Icon;

                return (
                  <motion.div
                    key={`${skill.title}-${index}`}
                    className="box"
                    whileHover={{ scale: 1.05, y: -6 }}
                  >
                    <div className="skillLine">
                      <div className="iconWrap" style={{ color: skill.tone }}>
                        <Icon />
                      </div>
                      <div className="skillText">
                        <h2>{skill.title}</h2>
                        <span>{skill.category}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="marqueeRow reverse">
            <div className="rowLabel">Mobile, Backend & Tools</div>
            <div className="marqueeTrack">
              {[...bottomRowSkills, ...bottomRowSkills].map((skill, index) => {
                const Icon = skill.Icon;

                return (
                  <motion.div
                    key={`${skill.title}-${index}`}
                    className="box"
                    whileHover={{ scale: 1.05, y: -6 }}
                  >
                    <div className="skillLine">
                      <div className="iconWrap" style={{ color: skill.tone }}>
                        <Icon />
                      </div>
                      <div className="skillText">
                        <h2>{skill.title}</h2>
                        <span>{skill.category}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
