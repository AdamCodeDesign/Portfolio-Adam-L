import React from "react";
import { motion, transform } from "framer-motion";
import "./hero.scss";
import Navbar from "../navbar/Navbar";

export default function Hero() {
  const robotAnimation = {
    height: { top: "30px" },
    low: { y: [10, 0, 10] },
  };

  const textAnimation = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };
  const text1 = "Hello, ";
  const text2 =
    "nice to see you! I would like to introduce you to a candidate for the position of ";
  const text3 = "Frontend Developer. ";
  const text4 = "Below you will find more ";
  const text5 = "information about him. ";

  return (
    <div className="container-hero">
      <div className="hero">
        <div className="robot-container">
          <motion.div
            className="robot"
            drag
            variants={robotAnimation}
            initial="height"
            animate={{ y: [-10, -20, -10], x: [-10, 0, -10] }}
            transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
          >
            <motion.div
              className="radar"
              animate={{ rotate: [0, 20, 0] }}
              transition={{
                animationTimingFunction: "linear",
                repeat: Infinity,
                duration: 4,
              }}
            ></motion.div>
            <motion.div className="smile">
              <motion.div className="smile1"></motion.div>
              <motion.div className="smile2"></motion.div>
              <motion.div className="smile3"></motion.div>
              <motion.div className="smile4"></motion.div>
              <motion.div className="smile5"></motion.div>
              <motion.div className="smile6"></motion.div>
            </motion.div>
            <motion.div className="eye1"></motion.div>
            <motion.div className="eye2"></motion.div>
            <motion.div
              className="ear1"
              variants={robotAnimation}
              initial="height"
              animate="low"
              transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="ear2"
              variants={robotAnimation}
              initial="height"
              animate="low"
              transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
        <motion.div
          className="info"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          {" "}
          {[...text1].map((letter, idx) => (
            <motion.span key={idx} variants={textAnimation} className="text1">
              {letter}
            </motion.span>
          ))}
          {[...text2].map((letter, idx) => (
            <motion.span key={idx} variants={textAnimation} className="text2">
              {letter}
            </motion.span>
          ))}
          {[...text3].map((letter, idx) => (
            <motion.span key={idx} variants={textAnimation} className="text3">
              {letter}
            </motion.span>
          ))}
          {[...text4].map((letter, idx) => (
            <motion.span key={idx} variants={textAnimation} className="text4">
              {letter}
            </motion.span>
          ))}
          {[...text5].map((letter, idx) => (
            <motion.span key={idx} variants={textAnimation} className="text5">
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
