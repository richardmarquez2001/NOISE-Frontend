import React from "react";
import Dashboard from "../modules/dashboard/Dashboard";
import Sidebar from "../modules/Sidebar";

export default function DashboardWrapper() {
  return (
    <React.Fragment>
      <Sidebar dashboard="purple"/>
      <Dashboard />
    </React.Fragment>
  );
}
