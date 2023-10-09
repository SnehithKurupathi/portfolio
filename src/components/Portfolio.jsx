import React, { Component } from "react";
import "./Portfolio.css";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
                alt=""
              >
                {resumeData.portfolio &&
                  resumeData.portfolio.map((item) => {
                    return (
                      <div className="columns portfolio-item">
                        <div className="item-wrap">
                          <a href="#modal-01">
                            <img src={`${item.imgUrl}`} className="item-img" />
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5 className="name">{item.name}</h5>

                                <p className="desc">{item.description}</p>
                                <button className="demo-link">
                                  <a href={item.link}>Demo</a>
                                </button>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
