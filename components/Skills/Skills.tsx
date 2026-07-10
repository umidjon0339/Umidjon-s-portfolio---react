"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { skills, type Skill } from "@/lib/data";
import "./Skills.scss";

const variants: Variants = {
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

const topRowSkills = skills.slice(0, 7);
const bottomRowSkills = skills.slice(7);

function SkillBox({ skill, index }: { skill: Skill; index: number }) {
  const { title, Icon, tone, category } = skill;

  return (
    <motion.div
      key={`${title}-${index}`}
      className="box"
      whileHover={{ scale: 1.05, y: -6 }}
    >
      <div className="skillLine">
        <div className="iconWrap" style={{ color: tone }}>
          <Icon />
        </div>
        <div className="skillText">
          <h2>{title}</h2>
          <span>{category}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <div className="container">
      <motion.div className="skills">
        <div className="titleContainer">
          <div className="title">
            <Image src="/people.webp" alt="" width={250} height={90} />
            <h1>
              My <motion.b whileHover={{ color: "orange" }}>&nbsp;Core&nbsp;</motion.b>
            </h1>
          </div>
          <div className="title titlerow">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Skills </motion.b>&nbsp;&amp;&nbsp;
              <motion.b whileHover={{ color: "orange" }}>Abilities</motion.b>
            </h1>
            <a className="cvButton" href="/U.Jumaqulov_Resume.pdf" download>
              Download CV
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
              {[...topRowSkills, ...topRowSkills].map((skill, index) => (
                <SkillBox key={`${skill.title}-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="marqueeRow reverse">
            <div className="rowLabel">Mobile, Backend &amp; Tools</div>
            <div className="marqueeTrack">
              {[...bottomRowSkills, ...bottomRowSkills].map((skill, index) => (
                <SkillBox key={`${skill.title}-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
