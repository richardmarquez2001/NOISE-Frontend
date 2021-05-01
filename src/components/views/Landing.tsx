import React from "react";
import Navbar from "../modules/Navbar";
import Slogan from "../modules/Slogan";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <React.Fragment>
      <Navbar />
      <Slogan />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis velit
        nunc, pellentesque sed purus praesent. Non mollis.
      </p>
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>
    </React.Fragment>
  );
}
