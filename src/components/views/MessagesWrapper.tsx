import React from "react";
import Sidebar from "../modules/Sidebar";
import Messages from "./Messages";

export default function MessagesWrapper() {
  return (
    <React.Fragment>
      <Sidebar messages="purple"/>
      <Messages />
    </React.Fragment>
  );
}