import React from "react";
import "./portfolio.scss";
import pubgScreen from "../../assets/pubgScreen.png";
import CGScreen from "../../assets/CGScreen.png";

export default function Portfolio() {
  return (
    <div className="container-portfolio">
      <div className="cheap-games card">
        <div className="imgContainer">
          <a href="https://cheap-games.netlify.app/">
            <img src={CGScreen} alt="Cheap-games img" />
          </a>
        </div>
        <div className="description-card">
          <div className="cardName">
            <span>Cheap Games</span>
            <span>08</span>
            <span>2023</span>
          </div>
          <div className="description">
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
          </div>
        </div>
      </div>
      <div className="pubg card">
        {" "}
        <div className="imgContainer">
          {" "}
          <a href="https://pubg-score.netlify.app/">
            <img src={pubgScreen} alt="pubg img" />
          </a>
        </div>
        <div className="description-card">
          <div className="cardName">
            <span>Pubg Score</span>
            <span>04</span>
            <span>2024</span>
          </div>{" "}
          <div className="description">
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
            <p>tutaj bedzie opis projektu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
