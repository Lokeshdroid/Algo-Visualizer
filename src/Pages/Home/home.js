import React from "react";
import "./home.css";
import visual_svg from "../../assests/undraw_visualization_c2ps.svg";

function home() {
  return (
    <div className="container">
      <div className="caption">
        <h1 style={{ fontSize: "3rem", fontWeight: "70" }}> Welcome 👋, </h1>
        <h2 style={{ fontSize: "2rem", marginTop: "1.9rem", fontWeight: "50" }}>
          Thanks for visiting my website.{" "}
        </h2>
        <br />
        <h2 style={{ fontSize: "2rem", marginTop: "0.5rem", fontWeight: "50" }}>
          Choose the Algorithm you want to visualize...{" "}
        </h2>
      </div>
      <img src={visual_svg} alt="visualization" className="visualImg" />
    </div>
  );
}

export default home;
