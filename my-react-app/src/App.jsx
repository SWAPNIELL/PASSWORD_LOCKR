import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage  from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
        </div>
    </Router>
  );
}
c
