import React from "react";
import janedoe from "../../../media/img/placeholder.png";

export default function Project(props: any) {
  return (
    <div className="project-container">
      <div className="profile-info">
        <img src={props.ownerImg || janedoe} alt="Image of the project owner" />
        <h1 className="owner-name">{props.ownerName}</h1>
        <h2 className="city">{props.city}</h2>
        <h1 className="looking-for">Looking for:</h1>
        {console.log(props.tags)}
        {props.tags.map((tag: any) => {
          return <p className="tag">{tag}</p>;
        })}
      </div>
      <div className="project-info">
        <h1 className="project-name">{props.projectName}</h1>
        <p className="project-desc">{props.projectInfo}</p>
        <div className="img-container">
          {props.images.length!=0 &&<>
          <h2>Project Images</h2>
          <div className="images">
            {props.images.map((imgURL: any) => {
              return <img className="project-img" src={imgURL} />;
            })}
          </div></>
          }
        </div>
      </div>
    </div>
  );
}
