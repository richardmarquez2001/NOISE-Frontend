import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props: any) {
  return (
    <nav className="sidebar">
      <h1 className="logo shake">noise.</h1>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/home">
          <p className={props.home}>home</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/dashboard">
          <p className={props.dashboard}>dashboard</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/messages">
          <p className={props.messages}>messages</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/createproject">
        <p className={props.createproject}>create project</p>
        </Link>
      </div>
      <div className="link">
        <Link style={{ textDecoration: "None" }} to="/profile">
          <p className={props.profile}>profile</p>
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
