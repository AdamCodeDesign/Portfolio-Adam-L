import React from "react";
import { motion } from "framer-motion";

export default function Links() {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const menuLinks = [
    "Hero",
    "Profile",
    "Skills",
    "Certificates",
    "Experience",
    "Portfolio",
    "Contact",
  ];
  return (
    <motion.div
      className="links"
      style={{ color: "rgb(2, 18, 15)" }}
      variants={variants}
    >
      {menuLinks.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
