import React from "react";
import { Image, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/profile.svg";
import { PassChange } from "./PassChange/PassChange";

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu color="yellow" inverted borderless className="top-menu" fixed="top">
        <Menu.Item header className="user-logo">
          <Image src={logo} size="mini" avatar />
          <span className="user">Username</span>
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="title">
            <span className="title">Title</span>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <PassChange />
            </Menu.Item>
            <Menu.Item>
              <span className="trigger">Log Out</span>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
