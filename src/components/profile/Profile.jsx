import React from "react";
import { motion } from "framer-motion";
import photo from "../../assets/photoCV.jpeg";
import "./profile.scss";

export default function Profile() {
  const myName = "Adam Leszczyk";
  const profession = "FRONTEND DEVELOPER";
  const variantsName = {
    visible: { opacity: 1, transition: {staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };
  const variantsProfession = {
    visible: { opacity: 1, transition: {delayChildren:1.5, staggerChildren: 0.1 } },
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
              variants={variantsName}
            >
              {[...myName].map((letter, idx) => (
                <motion.span key={idx} variants={variantsName}>
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="profession"
              initial="hidden"
              whileInView="visible"
              variants={variantsProfession}
            >
              {[...profession].map((letter, idx) => (
                <motion.span key={idx} variants={variantsProfession}>
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
