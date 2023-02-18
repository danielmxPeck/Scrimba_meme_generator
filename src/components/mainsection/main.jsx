import React, { Component } from "react";
import "./main.css";
import memephoto from "/src/assets/Shut-Up-And-Take-My-Money-Fry.jpg";

const Main = () => {
  return (
    <main>
      <div className="inputText">
        <input type="text" placeholder="up" />
        <input type="text" placeholder="down" />
      </div>
      <button className="inputButton">Get a new meme image 🖼</button>
      <img src={memephoto} alt="" />
    </main>
  );
};

export default Main;
