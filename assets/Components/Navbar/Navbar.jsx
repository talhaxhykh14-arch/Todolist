import React from "react";
import logo from '../../Images/Digital.png'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
            <img className="img" src={logo} alt="" />
        <div className="navbar">
      
          <div className="nav2">
      <Link to='/home' className='home'>Home</Link>
          <Link to='/services' className='services'>Services</Link>
          <Link to='/about us' className='aboutus '>About Us</Link>
          <Link to='/portfolio' className='portfolio'>Portfolio</Link>
     
          </div>
    
          <button className="button">Contact Us</button>
        </div>
        <div className="box">1</div>
        
        </>

    )
}
export default Navbar;