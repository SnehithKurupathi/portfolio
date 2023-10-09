import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <>
        <section id="home">
          <div className="header">
            <nav id="nav-wrap">
              <ul id="nav" className="nav">
                <li className="current">
                  <a className="smoothscroll" href="#home">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume">
                    RESUME
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio">
                    WORKS
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
            <div className="row banner">
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name} className="social-link">
                        <a href={item.url} target="">
                          <p>{item.name}</p>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
