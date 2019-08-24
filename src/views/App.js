import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { HeaderNav } from "../components/HeaderNav/HeaderNav";
import { SideBar } from "../components/SideBar/SideBar";
import { Login } from "./Login/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <SideBar />
        <div className="app-container">
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
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
