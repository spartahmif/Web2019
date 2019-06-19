import React, { Component } from "react";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// import { auth } from "../../store/actions";
import "./Login.scss";
import { Button, Message, Input } from "../../components";

class LoginComponent extends Component {
  state = { username: "", password: "" };

  onButtonClick = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (e.target.className.includes("login")) {
      this.props.auth(username, password, true);
    } else {
      this.props.auth(username, password, false);
    }
  };

  onInputChange = event => {
    this.setState({ [event.target.className]: event.target.value });
  };

  render() {
    var messageComponent, redirect;
    if (this.props.authMessage) {
      const { type, header, message } = this.props.authMessage;
      messageComponent = (
        <Message className={type} header={header} message={message} />
      );
    }

    if (this.props.isLoggedIn) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div className="ui container loginContainer">
        <div className="ui raised very padded segment">
          {redirect}
          <h2 className="ui header">Login</h2>
          <form className="ui form">
            <Input
              className="username"
              label="Username"
              placeholder="Username"
              onChange={this.onInputChange}
            />
            <Input
              className="password"
              label="Password"
              placeholder="Password"
              onChange={this.onInputChange}
            />
            {messageComponent}
            <Button className="login" onClick={this.onButtonClick}>
              Login
            </Button>
            <Button className="forgetpassword" onClick={this.onButtonClick}>
              Forget Password
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export const Login = LoginComponent;

// const mapStateToProps = state => {
//   return {
//     authMessage: state.auth.authMessage,
//     isLoggedIn: state.auth.userToken != null
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     auth: (email, password, islogin) => dispatch(auth(email, password, islogin))
//   };
// };

// export const Login = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginComponent);
