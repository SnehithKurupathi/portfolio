import React, { Component } from "react";
import "./ContactUs.css";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <label htmlFor="name" className="label-name">
                  Name:
                </label>
                <input type="text" id="name" className="name" />
                <label htmlFor="mobile-number" className="label-name">
                  Mobile Number:
                </label>
                <input type="number" id="mobile-number" className="name" />
                <label htmlFor="email" className="label-name">
                  Email:
                </label>
                <input type="email" id="email" className="name" />
                <button className="submit" type="button">
                  Submit
                </button>
                <h4>Linked in :{resumeData.linkedinId}</h4>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}
