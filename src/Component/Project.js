import React, { Component } from 'react'
import './Css/Project.css'
export default class Project extends Component {
  render() {
    return (
      <>
      <div className="all">
        <div className="project">
        <h1>Projects</h1>
    </div>
        <div className="container">
        <div className="item">
            <div className="img"><img src={require("./Image/sciencetour.PNG")} alt=""/></div>
            <h1>Knowledge Catalyst</h1>
            <div className="logo"><img src={require("./Image/wordpress.jpg")} alt=""/>
            <img src={require("./Image/elementor.jpg")} alt=""/></div>
            <div className="para">
            <p>This website is basically for education purspose in which you can get the notes of 6th class and others. And still working on many things.</p></div>
            <button ><a target= "_blank" rel="noreferrer" href="http://knowledgecatalyst.unaux.com/">View Live</a>  </button>
        </div>
        <div className="item">
             <div className="img"><img src={require("./Image/textutils.PNG")} alt=""/></div>
            <h1>TextUtils </h1>
            <div className="logo"><img src={require("./Image/react.png")} alt=""/></div>
            <div className="para">
            <div className="para">
            <p>This website is made by pure React Js and in this you can change your text as per your choice. And also it has many fuctionality to do.</p></div>
            <button id="github"><a rel="noreferrer" href="https://singhji2003.github.io/TextUtils/" target = "_blank">View on GitHub </a> </button>
        </div>
        <div className="item-2 item">
             <div className="img"><img src={require("./Image/youtube.PNG" )}alt=""/></div>
            <h1>Youtube Clone </h1>
            <div className="logo"><img src={require("./Image/react.png")} alt=""/></div>
            <div className="para">
            <div className="para">
            <p>This website is only for practice purpose in which I fetch data from api and show the results.</p></div>
            <button id="github"><a rel="noreferrer" href="https://singhji2003.github.io/LiveVideos" target = "_blank">View on GitHub </a> </button>
        </div>    
    </div>
    </div>
    </div>
    </div>
</>
    )
  }
}
