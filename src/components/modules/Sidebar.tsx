import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="logo shake">noise.</h1>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/home">
          Home
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/dashboard">
          dashboard
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/messages">
          messages
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/profile">
          profile
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/">
          log out
        </Link>
      </div>
    </nav>
  );
}
