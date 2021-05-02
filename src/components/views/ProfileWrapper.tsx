import React from "react";
import Sidebar from "../modules/Sidebar";
import Profile from "./Profile";

export default function ProfileWrapper() {
  return (
    <React.Fragment>
      <Sidebar />
      <Profile />
    </React.Fragment>
  );
}