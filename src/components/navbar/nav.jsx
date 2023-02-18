import React, { Component } from "react";
import "./nav.css";
import trollFace from "/src/assets/Troll Face.png";

const NavBar = () => {
  return (
    <nav>
      <img src={trollFace} alt="" />
      <h2 className="headerTitle">Header Content</h2>
      <h4 className="projectTitle">React Course - Project 3</h4>
    </nav>
  );
};

export default NavBar;
