import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="logo shake">noise.</h1>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/home">
          <p>home</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/dashboard">
          <p>dashboard</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/messages">
          <p>messages</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/profile">
          <p>profile</p>
        </Link>
      </div>
      <div className="link logout">
        <Link style={{ textDecoration: "None" }} to="/" onClick={() => localStorage.clear()}>
          <p>log out</p>
        </Link>
      </div>
    </nav>
  );
}
