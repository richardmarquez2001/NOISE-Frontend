import React from "react";
import Sidebar from "../modules/Sidebar";
export default function Profile() {
  function renderPositions(value: string) {
    // idk how this works u can remove this if u want @dylan
    let data = value;
    return <div>{data}</div>;
  }

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <img src="" alt="display img"></img>
        <h1>Name</h1>
        <h3>Talent</h3>
      </div>
      <div>
        <b>Bio</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
          perferendis fuga aspernatur eligendi natus earum rerum autem aliquam
          error!
        </p>
        <b>Interested Positions</b>
        {renderPositions("Web Development")}
        {renderPositions("Web Designer")}
        {renderPositions("Front End Developer")}
        <b>Portfolio Link</b>
        <b>Social Media handles</b>
        <b>Talent Spotlight</b>
      </div>
    </React.Fragment>
  );
}
