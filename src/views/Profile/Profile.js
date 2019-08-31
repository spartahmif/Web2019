import React, { Component } from "react";
import "./style.scss";
import { googleScript } from "api";

export class Profile extends Component {
  getProfileData(nim, callback) {
    googleScript
      .get("", {
        params: { token: nim }
      })
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.getProfileData("bce33f9e8ff51acec209d7e2cd401936", data => {
      this.setState({ data: data });
    });
  }

  constructor() {
    super();
    this.state = { data: null };
  }

  render() {
    var content;
    var excludeKeys = ["md5"];
    var nonScore = [
      "NIM",
      "Nama Panggilan",
      "Nama Lengkap",
      "List",
      "Kelompok"
    ];
    this.state.data === null
      ? (content = (
          <div>
            <h1>LOADING</h1>
          </div>
        ))
      : (content = (
          <div className="profile-container">
            <h1>Profile Peserta</h1>
            <div className="biodata-container">
              <h2>Biodata</h2>

              {Object.keys(this.state.data).map(eachKey => {
                if (!excludeKeys.includes(eachKey)) {
                  if (!nonScore.includes(eachKey)) {
                    return (
                      <p>{`${eachKey} : ${parseFloat(
                        this.state.data[eachKey]
                      ).toFixed(2)}`}</p>
                    );
                  } else {
                    return <p>{`${eachKey} : ${this.state.data[eachKey]}`}</p>;
                  }
                }
              })}
            </div>
          </div>
        ));
    return content;
  }
}
