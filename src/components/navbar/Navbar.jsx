import React from 'react'
import "./navbar.scss";
import git from '../../assets/github.png'
import pubg from "../../assets/pubg.png";
import CG from "../../assets/CG.svg";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="sites">
          <a href="https://github.com/AdamCodeDesign">
            <img src={git} alt="git icon" />
          </a>
          <a href="https://pubg-score.netlify.app/">
            <img src={pubg} alt="pubg icon" />
          </a>
          <a href="https://cheap-games.netlify.app/">
            <img src={CG} alt="cheap games icon" />
          </a>
        </div>
    </div>
  )
}
