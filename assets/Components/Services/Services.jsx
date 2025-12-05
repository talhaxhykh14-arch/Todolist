import React from "react";
import logos from '../../Images/Logos.png'
import images2 from '../../Images/Boxes.png'
import '../Services/Services.css'
const Services = ()=>{
    return(
        <>
        <div className="line1">
            <h1>We</h1>
            <h1 className="pro">Provide </h1>
            <h1> The</h1>
            <h1>Best</h1>

        </div>
            <div className="line2">
            <h1>Services</h1>
            <h1>With </h1>
            <h1 className="our"> Our</h1>

        </div>
        <h1 className="dev">Developers</h1>
        <img className="img3" src={images2} alt="" />
        <h1 className="ind">Industries We</h1>
        <h1 className="work">Work With</h1>
        <p className="p2">We work as a technology partner for various industries <br />Our expertise can be applied to the specific demands</p>
        <p className="p3">and nuances in your industry</p>
        <img className="img4" src={logos} alt="" />
        </>


    )

}
export default Services;