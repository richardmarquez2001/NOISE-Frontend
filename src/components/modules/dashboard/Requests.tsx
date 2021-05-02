import React from "react";

export default function Requests(props: any) {
  return (
    <div className="requests-container">
      <h1>Recent Requests</h1>
      <div><img src={props.img} alt=""/></div>
    </div>
  );
}
