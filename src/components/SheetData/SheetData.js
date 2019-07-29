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
      key: "1KTGCJWfulxXXrEd3uLveWM_LBASbKjQMG-dr3IcZAzA",
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
    const id = "16518030";
    return (
      <div id="score-details">
        {data.map(obj => {
          if (obj.NIM === id) {
            var keys = Object.keys(obj);
            var retVal = "";
            for (var key of keys) {
              if (
                key !== "Nama Lengkap" &&
                key !== "Nama Panggilan" &&
                key !== "NIM" &&
                key !== "Kelompok" &&
                obj[key] !== null
              ) {
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
