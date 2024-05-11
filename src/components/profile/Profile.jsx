
import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const myName = 'const myName = "Adam Leszczyk"';
  const profession = 'const profession = "FRONTEND DEVELOPER"';
  const variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="profile">
        <div className="photo">
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
    </div>
  );
}
