import React from "react";
import { motion, transform } from "framer-motion";
import "./hero.scss";

export default function Hero() {
  const robotAnimation = {
    height: { top: "30px" },
    low: { y: [10, 0, 10] },
  };

  const textAnimation = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  const robotMesage =
    "HI, human! I would like to introduce You another human. He is my friend and looking for a job. Below, You will find some information about him.";
  return (
    <div className="container-hero">
      <motion.div
        className="robot"
        drag
        variants={robotAnimation}
        initial="height"
        animate={{ y: [10, 0, 10], x: [10, 0, 10] }}
        transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
      >
        <motion.div className="radar"></motion.div>
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
      <motion.span
        className="info"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        {" "}
        {[...robotMesage].map((letter, idx) => (
          <motion.span key={idx} variants={textAnimation}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
