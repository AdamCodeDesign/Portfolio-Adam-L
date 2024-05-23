import React from "react";
import { motion } from "framer-motion";
import "./skills.scss";
import { FaReact, FaSass } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import jsIcon from "../../assets/js.svg";
import htmlIcon from "../../assets/html.png";
import muiIcon from "../../assets/mui3.png";
import gitIcon from "../../assets/github.png";
import apiIcon from "../../assets/api.png";

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

  const { react, js, sass, html, rwd, mui, git, api } = skillName;
  console.log({ git });
  return (
    <motion.div className="skills-container">
      <div className="title">Skills</div>
      <div className="skills-icons">
        <motion.div>
          <motion.span className="react">
            <FaReact />
          </motion.span>{" "}
          {react}
        </motion.div>
        <div>
          <img src={jsIcon} alt="" />
          {js}
        </div>
        <div>
          <FaSass className="sass" />
          {sass}
        </div>
        <div>
          <img src={htmlIcon} alt="" />
          {html}
        </div>
        <div>
          <span style={{ fontSize: "50px" }}>{rwd}</span>Responsive Web Design
        </div>
        <div>
          <img src={muiIcon} alt="" />
          {mui}
        </div>
        <div>
          <img src={gitIcon} alt="" />
          {git}
        </div>
        <div>
          <img src={apiIcon} alt="" style={{ color: "white" }} />
          {api}
        </div>
      </div>
    </motion.div>
  );
}
