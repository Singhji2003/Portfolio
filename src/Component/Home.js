import React, { Component } from 'react'
import './Css/Home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
    <img src={require("./Image/show.png")} onClick={()=>{
       document.getElementById("nav").style.marginTop = "0px";
       document.getElementById("show").style.display = "none"
       document.getElementById("hide").style.display = "block"
    }} id="show" width="70px" className="navres" alt=""/>
    <img src={require("./Image/hide.png")} onClick={()=>{
       document.getElementById("nav").style.marginTop = "-920px";
       document.getElementById("hide").style.display = "none"
       document.getElementById("show").style.display = "block"
    }} id="hide" width="70px" className="navres" alt=""/>
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
