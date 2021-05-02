import React from "react";
import Figma from "./svg/Figma";
import Github from "./svg/Github";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Github />
      <Figma />
      <div className="nav-container">
        <div className="links">
          <a href="#about" className="link">
            about
          </a>
          <a href="#how" className="link">
            how it works
          </a>
          <a href="#team" className="link">
            team
          </a>
        </div>
        <h1 className="logo">noise.</h1>
      </div>
    </nav>
  );
}
