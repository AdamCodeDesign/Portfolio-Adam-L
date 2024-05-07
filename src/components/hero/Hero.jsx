import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

export default function Hero() {
  const variants = {
    height: { top: '30px'},
    low: { top: '50px'},
  };
  return (
    <div className="container-hero">
      <motion.div className="robot" drag>
        <motion.div className="radar"></motion.div>
        <motion.div className="smile">
          {" "}
          <motion.div className="smile1"></motion.div>
          <motion.div className="smile2"></motion.div>
          <motion.div className="smile3"></motion.div>
          <motion.div className="smile4"></motion.div>
          <motion.div className="smile5"></motion.div>
          <motion.div className="smile6"></motion.div>
          <motion.div className="smile7"></motion.div>
          <motion.div className="smile8"></motion.div>
          <motion.div className="smile9"></motion.div>
          <motion.div className="smile10"></motion.div>
        </motion.div>
        <motion.div className="eye1"></motion.div>
        <motion.div className="eye2"></motion.div>
        <motion.div className="ear1" variants={variants} initial='height' animate='low'></motion.div>
        <motion.div className="ear2"></motion.div>
      </motion.div>
    </div>
  );
}
