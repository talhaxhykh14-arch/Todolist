import React from "react";
import image from '../../Images/Home.jpg'
import '../Home/Home.css'
const Home = ()=>{
    return(
        <>
        <img className="img2" src={image} alt="" />
        <h1 className="h1">We are full Services</h1>
        <h1 className="h1-2">Digital Marketing Agency</h1>
        <h2 className="h2">Welcome to the Digital Impacts</h2>
        <p className="row">______________________</p>
        <p className="p">We partner with our clients with a team of professionals, we are able to provide <br />the best on our side. We strive to be leaders in digital marketing services worldwide <br />by revolutionizing the industry and setting new standards of professionalism and success.</p>
        <button className="Message">Message Us Now</button>
        </>
  
    )
}
export default Home;