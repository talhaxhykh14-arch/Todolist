import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.png";
import edit from "../../Images/Edit.png";
import basket from "../../Images/basket.png";
import tick from "../../Images/tick.png";
import "../Completed/Comp.css";
const Comp = () => {
    const [hidebox,sethidebox] = useState(true)
    const hidebox1=() =>{
        sethidebox(false)
    }
    const [hidebox2,sethidebox2] = useState(true)
    const hidebox3=() =>{
        sethidebox2(false)
    }
    const title = localStorage.getItem("title") || "TODO TITLE";
    const detail = localStorage.getItem("detail") || "TODO SUB TITLE";
    return (
        <>
            <div className="box12">
                <div className="nav4">
                    <Link to="/edit"><img className="arrow4" src={arrow} alt="" /></Link>
                    <h1 className="comp">Completed Task</h1> </div>
                <div className="box9">
                    <div className="titles4">
                        <div className="title5">{title}</div>
                        <div className="sub4">{detail}</div>
                    </div>
                    <div className="images5">
                        <Link to='/edit'><img src={edit} alt="" /></Link>
                        <img src={basket} alt="" />
                        {/* <img src={tick} alt="" /> */}
                    </div>
                </div>
                { hidebox &&
                          <div className="box10">
                    <div className="titles5">
                        <div className="title6">TODO TITLE</div>
                        <div className="sub5">TODO SUB TITLE</div>
                    </div>
                    <div className="images6">
                        <img src={edit} alt="" />
                        <img onClick={hidebox1} src={basket} alt="" />
                        {/* <img src={tick} alt="" /> */}
                    </div>
                </div>
                }
                { hidebox2 &&
                          <div className="box11">
                    <div className="titles6">
                        <div className="title7">TODO TITLE</div>
                        <div className="sub6">TODO SUB TITLE</div>
                    </div>
                    <div className="images7">
                        <img src={edit} alt="" />
                        <img onClick={hidebox3} src={basket} alt="" />
                        {/* <img src={tick} alt="" />  */}
                    </div>
                </div>
                }
          
          {/* <div>Testing4</div> */}
            </div>
        </>
    );
};
export default Comp;