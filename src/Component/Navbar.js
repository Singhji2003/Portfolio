import React, { Component } from 'react'
import './Css/Navbar.css'
import './Css/ResponsiveNavbar.css'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav>
      <div className='logo' >
         <h1>Arpan Singh</h1> 
      </div>
     < ul >
        <li><Link to="/">Home</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
  </nav>
  <div className='navres' >
    <img src={require("./Image/show.png")} alt="" srcset="" />
    <img src={require("./Image/hide.png")} alt="" srcset="" />
  </div>
  
  </>
  
    )
  }
  
}
