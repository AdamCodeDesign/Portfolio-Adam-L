import "./navbar.scss";
import git from "../../assets/github.png";
import pubg from "../../assets/pubg.png";
import CG from "../../assets/CG.svg";
import React from "react";
import { delay, motion } from "framer-motion";

export default function Navbar() {
  const myName = "Adam Leszczyk";
  const variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.15}},
    hidden: { opacity: 0 },
  };
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <div className="wrapper">
        <motion.span initial="hidden" animate="visible" variants={variants}>
          {[...myName].map((letter, idx) => (
            <motion.span key={idx} variants={variants}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
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
