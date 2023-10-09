import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="about">
          <div className="row">
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <div className="three columns">
                <img className="profile-pic" src="images/profile.jpg" alt="" />
              </div>
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>{" "}
              <p>{resumeData.aboutMe}</p>
              <div className="banner-text">
                <h3 style={{ color: "black", fontFamily: "sans-serif" }}>
                  I am a {resumeData.role}.{resumeData.roleDescription}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
