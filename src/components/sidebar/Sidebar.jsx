import React, { useState } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { delay, motion } from "framer-motion";
import "./sidebar.scss"

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 30px 30px)",
      transition: {
        type: "spring",
        stiffness: 30,
      },
      backgroundColor: "rgb(138, 239, 138)"
    },
    closed: {
      clipPath: "circle(20px at 30px 30px)",
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
