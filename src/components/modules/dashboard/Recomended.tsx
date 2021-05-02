import React from "react";

export default function Recommended(props: any) {
  return (
    <div className="recommended-container">
      <h1>Recommended</h1>
      <div><img src={props.img} alt=""/></div>
    </div>
  );
}
