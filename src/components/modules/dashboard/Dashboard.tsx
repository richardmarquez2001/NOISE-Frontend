import React from "react";
import Recomended from "./Recomended";
import Requests from "./Requests";
import Statistics from "./Statistics";

export default function Dashboard() {
  const name = "Jane Doe"; //ooga booga api call get name

  return (
    <div className="content-container">
      <header>
        <h1>Hi {name}</h1>
        <p>Are you ready to make some noise?</p>
        <img src="" alt="profile picture" />
      </header>
      <Requests />
      <Statistics />
      <Recomended />
    </div>
  );
}
