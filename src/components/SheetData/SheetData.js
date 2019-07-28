import React, { Component } from "react";
import "./SheetData.scss";
import Tabletop from "tabletop";

export class SheetData extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1zfexuNowg2Z_6WUOaJHe2PeFE9Jra7eb6tRokmk7mIQ",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    const { data } = this.state;
    const id = "2";
    return (
      <div id="score-details">
        {data.map(obj => {
          if (obj.id === id) {
            var keys = Object.keys(obj);
            var retVal = "";
            for (var key of keys) {
              if (key !== "id2") {
                retVal += key + ": " + obj[key] + "\n";
              }
            }
            return (
              <div className="visual" key={obj[key]}>
                <p>{retVal}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SheetData;
