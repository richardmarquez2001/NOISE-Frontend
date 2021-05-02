import React from "react";
import Dashboard from "../modules/dashboard/Dashboard";
import Sidebar from "../modules/Sidebar";
import Project from "./CreateProject";

export default function CreateProjectWrapper() {
  return (
    <React.Fragment>
      <Sidebar dashboard="purple"/>
      <Project />
    </React.Fragment>
  );
}
