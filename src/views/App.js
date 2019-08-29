import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Profile } from "views/Profile";
import { HeaderNav } from "../components/HeaderNav/HeaderNav";
import { Login } from "./Login/Login";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <div className="app-container">
          <Route path="/login" component={Login} />
          <Profile />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(App)
);
