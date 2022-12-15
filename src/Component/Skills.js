import React, { Component } from 'react'
import './Css/Skills.css'
export default class Skills extends Component {
  render() {
    return (
        <div className='all' >   
        <div className="skill">
        <h1 id='skills'>Skills</h1>
    </div>
    <section>
        <div className="skills">
            <div className="language">
                <h1>Languages</h1>
                <hr/>
                <div className="items">
                   <div className="img"><img src={require("./Image/html.png")} alt=""/> <p>HTML</p>  </div> 
                   <div className="img"><img src={require("./Image/css.png")} alt=""/><p> CSS</p> </div> 
                   <div className="img"><img src={require("./Image/jslogo.png")} alt=""/><p> Java Script</p> </div> 
                   <div className="img"><img src={require("./Image/c.png")} alt=""/><p> C</p> </div> 
                   <div className="img"><img src={require("./Image/c++.png")} alt=""/><p> C++</p> </div> 
                   
                </div>
           
        </div>
            <div className="language">
                <h1>FrameWorks</h1>
                <hr/>
                <div className="items">
                   <div className="img"><img src={require("./Image/bootstarp.png")} alt=""/> <p>BootStrap</p>  </div> 
                </div>
            </div>
            <div className="language">
                <h1>Others</h1>
                <hr/>
                <div className="items">
                   <div className="img"><img src={require("./Image/word.png")} alt=""/> <p>Word Document</p>   
               

                   </div>
                </div>
            </div>
        </div>
        <br/>
    </section>
      </div>
     

    )
  }
}
