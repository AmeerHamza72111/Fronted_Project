// BackgroundWithLogo.js
import React from "react";
import "./BackGround.css";
import backImg from "../images/flat-lay-back-school-concept-with-copy-space 1.jpg";
import logo2 from "../images/Esyclick logo 2.png";

const BackGround = () => {
  return (
    <div className="background-container">
      <img src={backImg} alt="Background" className="background-image" />
      <div className="logo-container">
        <img src={logo2} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default BackGround;
