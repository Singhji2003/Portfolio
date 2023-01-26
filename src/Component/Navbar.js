import React, { Component } from 'react'
import './Css/Navbar.css'
import './Css/ResponsiveNavbar.css'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='logo' >
         <h1>Arpan Singh</h1> 
      </div>
      <nav id='nav'>
     < ul >
        <li><Link to="/"  onClick={()=>{
      document.getElementById("nav").style.top = "0px";
       document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";

    }} >Home</Link></li>
            <li><Link to="/skill" onClick={()=>{
      document.getElementById("nav").style.top = "0px";
       document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";

    }}>Skills</Link></li>
            <li><Link to="/project" onClick={()=>{
      document.getElementById("nav").style.top = "0px";
       document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";

    }}>Projects</Link></li>
            <li><Link to="/contact" onClick={()=>{
      document.getElementById("nav").style.top = "0px";
       document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";

    }}>Contact</Link></li>
        </ul>
  </nav>
  <div className='navres' >
    <img src={require("./Image/show.png")} id = "show" width = "60px" alt="" srcset="" onClick={()=>{
      document.getElementById("hide").style.display = "block";
      document.getElementById("show").style.display = "none";
      document.getElementById("nav").style.top = "250px"

    }} />
    <img src={require("./Image/hide.png")} id = "hide" width = "60px" alt="" srcset="" onClick={()=>{
      document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";
      document.getElementById("nav").style.top = "0px"

    }} />
  </div>
  
  </>
  
    )
  }
  
}
