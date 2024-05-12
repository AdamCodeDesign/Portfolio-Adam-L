import React from "react";
import { delay, motion } from "framer-motion";
import photo from "../../assets/photoCV.jpeg";
import "./profile.scss";

export default function Profile() {
  const myName = "Adam Leszczyk";
  const profession = "FRONTEND DEVELOPER";
  const descriptionProfile1 =
    "I am deeply passionate about frontend development, particularly in the realm of React.js and UI design.  ";
  const descriptionProfile2 =
    "My interest in this field is all-encompassing, driving me to explore every facet related to it.";
  const descriptionProfile3 =
    "In September of last year, I successfully completed a comprehensive JavaScript programming course with a focus on React.";
  const descriptionProfile4 =
    "I have been fervently dedicated to honing my skills, consistently challenging myself with the exploration and implementation of innovative frontend techniques.";
  const variantsName = {
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    hidden: { opacity: 0 },
  };
  const variantsProfession = {
    visible: {
      opacity: 1,
      transition: { delayChildren: 1.5, staggerChildren: 0.05 },
    },
    hidden: { opacity: 0 },
  };
  const variantsDescription = {
    visible: {
      transition: {
        delayChildren: 3,
        staggerChildren: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
  };
  const itemVariantsDescription = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -30,
      opacity: 0,
    },
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
            <motion.ol
              className="description"
              initial="hidden"
              whileInView="visible"
              variants={variantsDescription}
            >
              <motion.li variants={itemVariantsDescription}>
                {descriptionProfile1}
              </motion.li>
              <motion.li variants={itemVariantsDescription}>
                {descriptionProfile2}
              </motion.li>
              <motion.li variants={itemVariantsDescription}>
                {descriptionProfile3}
              </motion.li>
              <motion.li variants={itemVariantsDescription}>
                {descriptionProfile4}
              </motion.li>
            </motion.ol>
        </div>
      </div>
    </div>
  );
}
