import React from 'react'
import "./navbar.scss";
import git from '../../assets/github.png'
import pubg from "../../assets/pubg.png";
import CG from "../../assets/CG.svg";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="sites">
          <a href="#">
            <img src={git} alt="git icon" />
          </a>
          <a href="#">
            <img src={pubg} alt="pubg icon" />
          </a>
          <a href="#">
            <img src={CG} alt="cheap games icon" />
          </a>
        </div>
    </div>
  )
}
