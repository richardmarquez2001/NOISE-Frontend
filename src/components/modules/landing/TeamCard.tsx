import React from "react";
export default function TeamCard(props: any) {
  return (
    <div className="team-card">
      <a href={props.linkedIn}><img src={props.imgURL} alt={props.alt}/></a>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
    </div>
  );
}