import React from "react";
import "./portfolio.scss";
import pubgScreen from "../../assets/pubgScreen.png";
import CGScreen from "../../assets/CGScreen.png";

export default function Portfolio() {
  return (
    <div className="container-portfolio">
      <div className="title">My projects</div>
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
            <p>Video Game Store Interface</p>
            <div className="tags">
              {" "}
              <div>react</div>
              <div>sass</div>
              <div>react router</div>
              <div>rest Api</div>
              <div>supabase</div>
            </div>
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
            <p>PUBG - stats - SPA</p>
            <div className="tags">
              {" "}
              <div>react</div>
              <div>material UI</div>
              <div>react router</div>
              <div>rest Api</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
