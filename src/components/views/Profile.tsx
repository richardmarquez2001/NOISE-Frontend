import React from "react";
import Sidebar from "../modules/Sidebar";
import janedoe from "../../media/img/janedoe.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="content-container">
      <div className="profile-container">
        <header>
          <div className="left-container">
            <div className="img-container">
              <img src={janedoe} alt="profile picture" />
            </div>
            <div className="header-container">
              <h1>Jane Doe</h1>
              <h2>Talent</h2>
            </div>
          </div>
          <div className="right-container">
            <Link style={{ textDecoration: "None" }} to="#">
              <span>Edit Profile</span>
            </Link>
          </div>
        </header>
        <main>
          <div className="bio-container">
            <h1>Bio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sed scelerisque justo, vitae pellentesque leo. Vivamus
              purus neque, eleifend non congue tempus, sodales ut leo.
            </p>
          </div>
          <div className="interested-positions-containers">
            <h1>Interested Positions</h1>
            <div className="interest-container">
              <div className="interest" id="interest1">
                Web Development
              </div>
              <div className="interest" id="interest2">
                Web Designer
              </div>
              <div className="interest" id="interest3">
                Front-End Developer
              </div>
            </div>
          </div>
          <div className="link-container">
            <h1>Portfolio Link</h1>
            <div className="input-container">
              <input
                type="text"
                contentEditable="false"
                value="https://www.janedoe.ca"
              />
            </div>
          </div>
          <div className="socials-container">
            <h1>Social Media Handles</h1>
            <div className="inner-socials-container">
              <div className="linkedin">janedoe7</div>
              <div className="github">janedoe7</div>
              <div className="devpost">janedoe7</div>
              <div className="facebook">janedoe7</div>
            </div>
          </div>
          <div className="talent-container">
            <h1>Talent Spotlight</h1>
            <div className="images-container">
              <div className="talent-entry">
                <img src="https://picsum.photos/301/200" alt="" />
              </div>
              <div className="talent-entry">
                <img src="https://picsum.photos/300/200" alt="" />
              </div>
              <div className="talent-entry">
                <img src="https://picsum.photos/300/201" alt="" />
              </div>
              <div className="talent-entry">
                <img src="https://picsum.photos/299/200" alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
