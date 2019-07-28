import React, { Component } from "react";
import "./Dashboard.scss";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { SideBar } from "../../components/SideBar/SideBar";
import { SheetData } from "../../components/SheetData/SheetData";

class DashboardComponent extends Component {
  render() {
    return (
      <div className="dashboard">
        <HeaderNav />
        <SideBar />
        <SheetData />
      </div>
    );
  }
}

export const Dashboard = DashboardComponent;
