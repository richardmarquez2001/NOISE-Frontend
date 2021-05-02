import React from "react";
import DashboardWrapper from "./components/views/DashboardWrapper";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/views/Landing";
import HomeWrapper from "./components/views/HomeWrapper";
import MessagesWrapper from "./components/views/MessagesWrapper";
import ProfileWrapper from "./components/views/ProfileWrapper";
import CreateProjectWrapper from "./components/views/CreateProjectWrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeWrapper />
          </Route>
          <Route path="/messages">
            <MessagesWrapper />
          </Route>
          <Route path="/profile">
            <ProfileWrapper />
          </Route>
          <Route path="/dashboard">
            <DashboardWrapper />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/createproject">
            <CreateProjectWrapper />
          </Route>
          <Route path="/">
          </Route>
            <Landing />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
