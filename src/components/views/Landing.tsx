import React from "react";
import Navbar from "../modules/Navbar";
import Slogan from "../modules/Slogan";
import { Link } from "react-router-dom";
import landingPicture from "../../media/landingPicture.png";

export default function Landing() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-container">
        <div className="body">
          <Slogan />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            velit nunc, pellentesque sed purus praesent. Non mollis.
          </p>
          <Link style={{ textDecoration: "None" }} to="/login">
            <span id="login-btn">Login</span>
          </Link>
          <Link style={{ textDecoration: "None" }} to="/Register">
            <span id="reg-btn">Register</span>
          </Link>
        </div>
      </div>
      <img className="landing-photo" src={landingPicture} alt=""/>
    </React.Fragment>
  );
}
