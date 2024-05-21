import React from "react";
import { motion } from "framer-motion";
import './skills.scss'

export default function Skills() {
  const skillName = {
    react: "React",
    js: "JavaScript",
    sass: "Sass",
    html: "Html",
    rwd: "RWD",
    mui: "MUI",
    git: "Git/GitHub",
    api: "Rest Api",
  };

  const {react, js, sass, html, rwd, mui, git, api} = skillName
  console.log({ git });
  return <motion.div className="skills">
    <p>Skills</p>
    <p>{react}</p>
    <p>{js}</p>
    <p>{sass}</p>
    <p>{html}</p>
    <p>{rwd}</p>
    <p>{mui}</p>
    <p>{git}</p>
    <p>{api}</p>
  </motion.div>;
}
