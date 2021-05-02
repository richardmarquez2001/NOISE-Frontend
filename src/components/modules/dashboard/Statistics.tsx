import React from "react";

export default function Statistics(props: any) {
  return (
    <div className="statistics-container">
      <h1>Your Statistics</h1>
      <div><img src={props.img} alt=""/></div>
    </div>
  );
}
