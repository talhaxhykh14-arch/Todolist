import React from "react";
import images3 from '../../Images/Domain.png'
import './About.css'
const About = ()=>{
    return(
    <>
<h1>EVERYTHING YOU NEED TO KNOW ABOUT</h1>
<h2 className="digital">THE DIGITAL IMPACTS</h2>
<p className="The">The Digital Impacts create a perfect company for its customers. Digital Impacts offers the best services to ensure your business thrives online. Because we partner with our clients <br /> with a team of professionals, we can to provide the best on our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and setting new</p>
<p className="stand">standards of professionalism and success.</p>
<h2 className="our">OUR VISION</h2>
<p className="we">We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new standards of professionalism and success. Our vision is to become</p>
<p className="a">a top agency offering online marketing strategies, digital sales solutions, and internet brand management in the international business sphere.</p>
<h2 className="mission">OUR MISSION</h2>
<p className="partner">Our mission is to partner with customers for their success as we create diverse client base including companies and individuals functioning in many different fields and economies. We <br /> will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique demands of</p>
<p className="each">each client.</p>
<img className="domain" src={images3} alt="" />
        </>

    )

}
export default About;