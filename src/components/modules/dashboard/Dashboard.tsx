import React from "react";
import Recomended from "./Recomended";
import Requests from "./Requests";
import Statistics from "./Statistics";
import { Link } from "react-router-dom";
import janedoe from "../../../media/img/janedoe.png";
import requests from "../../../media/img/requests.png";
import stats from "../../../media/img/stats.png";
import recommended from "../../../media/img/recommended.png";

export default function Dashboard() {
  const name = "Jane Doe"; //ooga booga api call get name

  return (
    <div className="content-container">
      <div className="dashboard-container">
        <header>
          <div className="info-container">
            <h1>
              Hi <em>{name}</em>
            </h1>
            <p>Are you ready to make some noise?</p>
          </div>
          <div className="img-container">
            <img src={janedoe} alt="profile picture" />
          </div>
        </header>
        <hr />
        <div className="find-create">
          <Link to="/home">
            <div className="find">
              <h1>Find a Project</h1>
              <p>
                Find freelance projects to gain experience and expand their
                portfolio.
              </p>
            </div>
          </Link>
          <Link to="/createproject">
          <div className="create">
            <h1>Create a Project</h1>
            <p>
              Create a project posting to find local creators to help get the
              job done.
            </p>
          </div>
          </Link>
        </div>
        <div className="main-container">
          <Requests img={requests}/>
          <Statistics img={stats}/>
          <Recomended img={recommended}/>
        </div>
      </div>
    </div>
  );
}
