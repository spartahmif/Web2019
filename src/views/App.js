import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { HeaderNav } from "../components/HeaderNav/HeaderNav";
import { SideBar } from "../components/SideBar/SideBar";
import { Login } from "./Login/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        {/* <HeaderNav /> */}
        {/* <SideBar /> */}
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
