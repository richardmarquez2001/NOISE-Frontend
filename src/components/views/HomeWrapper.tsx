import React from "react";
import Sidebar from "../modules/Sidebar";
import Home from "./Home";

export default function HomeWrapper() {
  return (
    <React.Fragment>
      <Sidebar />
      <Home />
    </React.Fragment>
  );
}