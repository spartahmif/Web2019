import React from "react";
import { SideBarItem } from "./SideBarItem/SideBarItem";
import { Menu, Image } from "semantic-ui-react";
import "./SideBar.scss";
import logo from "../../assets/images/Logo.png";

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Profile", "Dashboard"],
      highlights: [null, true],
      icons: ["address card", "thumb tack"]
    };
  }

  handleClick(i) {
    const labels = this.state.labels.slice();
    const newHighlight = Array(2).fill(null);
    const icons = this.state.icons.slice();
    newHighlight[i] = true;
    this.setState({ labels: labels, highlights: newHighlight, icons: icons });
  }

  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <Menu.Item onClick={() => this.handleClick(0)}>
          <SideBarItem
            highlight={this.state.highlights[0]}
            label={this.state.labels[0]}
            icon={this.state.icons[0]}
          />
        </Menu.Item>
        <Menu.Item onClick={() => this.handleClick(1)}>
          <SideBarItem
            highlight={this.state.highlights[1]}
            label={this.state.labels[1]}
            icon={this.state.icons[1]}
          />
        </Menu.Item>
        <Menu.Menu className="side-nav-container">
          <Menu.Item className="logo">
            <Image src={logo} size="medium"></Image>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
