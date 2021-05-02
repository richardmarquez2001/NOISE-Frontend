import React from "react";
import DashboardWrapper from "./components/views/DashboardWrapper";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/views/Landing";
import Messages from "./components/views/Messages";
import Profile from "./components/views/Profile";
import HomeWrapper from "./components/views/HomeWrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeWrapper />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/profile">
            <Profile />
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
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
