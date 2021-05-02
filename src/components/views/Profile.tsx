import React from "react";
import Sidebar from "../modules/Sidebar";
export default function Profile() {
  function renderPositions(value: string) {
    // idk how this works u can remove this if u want @dylan
    let data = value;
    return <div>{data}</div>;
  }

  return (
    <div className="content-container">
      profile page
    </div>
  );
}
