import React from "react";
import { motion } from "framer-motion";
import photo from "../../assets/photoCV.jpeg";
import "./profile.scss";

export default function Profile() {
  const myName = 'const myName = "Adam Leszczyk"';
  const profession = 'const profession = "FRONTEND DEVELOPER"';
  const variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="container-profile">
      <div className="profile">
        <img src={photo} alt="photo" className="myphoto" />
        <div className="about-me">
          <div className="myname">
            <motion.span
              initial="hidden"
              whileInView="visible"
              variants={variants}
            >
              {[...myName].map((letter, idx) => (
                <motion.span key={idx} variants={variants}>
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
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
      </div>
    </div>
  );
}
