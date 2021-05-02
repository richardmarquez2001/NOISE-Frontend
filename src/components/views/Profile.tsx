import React from "react";
import Sidebar from "../modules/Sidebar";
export default function Profile() {
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <img src = "" alt = "display img"></img>
        <h1>Name</h1>
        <h3>Talent</h3>
      </div>
      <div>
        <b>Bio</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil perferendis fuga aspernatur eligendi natus earum rerum autem aliquam error!</p>
        
      </div>
    </React.Fragment>
  );
}
