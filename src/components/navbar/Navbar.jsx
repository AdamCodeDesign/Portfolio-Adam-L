import "./navbar.scss";
import git from "../../assets/github.png";
import pubg from "../../assets/pubg.png";
import CG from "../../assets/CG.svg";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  const myName = 'const myName = "Adam Leszczyk"';
  const profession = 'const profession = "FRONTEND DEVELOPER"';
  const variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="logo">
          <motion.span initial="hidden" animate="visible" variants={variants}>
            {[...myName].map((letter, idx) => (
              <motion.span key={idx} variants={variants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ fontSize: "0.5em" }}
          >
            {[...profession].map((letter, idx) => (
              <motion.span key={idx} variants={variants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div className="sites">
          <a href="#">
            <img src={git} alt="git icon" />
          </a>
          <a href="#">
            <img src={pubg} alt="pubg icon" />
          </a>
          <a href="#">
            <img src={CG} alt="cheap games icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
