import React, { Component } from 'react'
import './Css/Home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
<section>
    <div className="img">
    <img src={require("./Image/arpan.png")} width="200px" alt=""/>
</div>
<div className="details">
    <h1>Arpan Kumar Singh</h1>
    <h2>Software Engineer, Front-End Developer, College Student</h2>
</div>
<div className="social-media">
    <img src={require("./Image/GitHub.png")} id="githublogo" width="100px" alt=""/>
    <img src={require("./Image/Instagram.png")} id="insta" width="100px" alt=""/>
    <img src={require("./Image/linkedin.png")} id="linkedin" height="50px" width="50px" alt=""/>
</div>
<div className="button">
    <button><i className="fa fa-download"></i><a href={require("./resume.pdf")} download = "Resume">Resume</a></button>
</div>
</section>
</div>
      </div>
    )
  }
}
