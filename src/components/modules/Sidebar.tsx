import React from "react";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
      <nav className="sidebar">
        <h1 className="logo">noise.</h1>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/messages">messages</Link>
        <Link to="/profile">profile</Link>
        <Link to="/">log out</Link>
      </nav>
    );
}
