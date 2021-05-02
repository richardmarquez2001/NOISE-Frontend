import React from "react";
import Navbar from "../modules/landing/Navbar";
import Slogan from "../modules/landing/Slogan";
import { Link } from "react-router-dom";
import landingPicture from "../../media/img/landingPicture.png";
import HowCard from "../modules/landing/HowCard";
import htw1 from "../../media/img/howitworks1.png";
import htw2 from "../../media/img/howitworks2.png";
import htw3 from "../../media/img/howitworks3.png";
import alain from "../../media/img/alain.png";
import dylan from "../../media/img/dylan.png";
import ric from "../../media/img/ric.png";
import van from "../../media/img/van.png";
import TeamCard from "../modules/landing/TeamCard";

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
      <img
        className="landing-photo"
        src={landingPicture}
        alt="girl running with excitment"
      />
      <div className="landing-container2">
        <h1 id="about" className="titles">
          about
        </h1>
        <p className="about-msg">
          Noise is....Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc, nec magna convallis malesuada eget aliquam id. Sit dolor cursus
          viverra sit. Lobortis nisi ac, libero risus ante semper pellentesque.
          Vel ac mauris tempor felis luctus.
        </p>
        <h1 id="how" className="titles">
          how it works
        </h1>
        <div className="how-card-container">
          <HowCard
            imgURL={htw1}
            alt="mobile phone with floating objects"
            num="1."
            desc="Create your profile"
          />
          <HowCard
            imgURL={htw2}
            alt="two phones with hands interlocking"
            num="2."
            desc="Find and match with local opportunities"
          />
          <HowCard
            imgURL={htw3}
            alt="man using his laptop"
            num="3."
            desc="Gain experience and make some noise"
          />
        </div>
        <h1 id="team" className="titles">
          team
        </h1>
        <div className="team-container">
          <TeamCard
            linkedIn="https://www.linkedin.com/in/aloinn/"
            imgURL={alain}
            alt="cartoon of alain"
            name="Alain"
            role="Back-End Developer"
          />
          <TeamCard
            linkedIn="https://www.linkedin.com/in/dylanle18/"
            imgURL={dylan}
            alt="cartoon of dylan"
            name="Dylan"
            role="Front-End Developer"
          />
          <TeamCard
            linkedIn="https://www.linkedin.com/in/richard-marquez-2001/"
            imgURL={ric}
            alt="cartoon of ric"
            name="Ric"
            role="Front-End Developer"
          />
          <TeamCard
            linkedIn="https://www.linkedin.com/in/vanessahoang9/"
            imgURL={van}
            alt="cartoon of vanessa"
            name="Vanessa"
            role="UX/UI Designer"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
