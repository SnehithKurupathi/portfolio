import React, { Component } from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import resumeData from "./ResumeData";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
