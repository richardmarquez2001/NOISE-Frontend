import React from "react";
export default function HowCard(props: any) {
  return (
    <div className="how-card">
      <img src={props.imgURL} alt={props.alt}/>
      <h1><em>{props.num}</em> {props.desc}</h1>
    </div>
  );
}