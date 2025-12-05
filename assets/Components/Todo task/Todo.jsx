import React, { useState } from "react";
import arrow from '../../Images/arrow.png'
import tick from '../../Images/tick.png'
import basket from '../../Images/basket.png'
import edit from '../../Images/Edit.png'
import right from '../../Images/right.png'
import lines from '../../Images/3lines.png'
import calendar from '../../Images/Calendar.png'
import '../Todo task/Todo.css'
import { Link } from "react-router-dom";
const Todo = () => {

 const [hide,setHide] =useState(true)
 const hidetask=()=>{
    setHide(false)
 }
  const [hide2,setHide2] =useState(true)
 const hidetask2=()=>{
    setHide2(false)
 }
    // const showtask = () => {
    //     setHide(true)
    //     setShow(false)
    // }

    return (
        <>
            <div className="box1">
                <div className="nav1">
                    <h1 className="todo">TODO APP</h1>
                    <img className="cal" src={calendar} alt="" />
                </div>
                <div className="images">
                    <img className="lines" src={lines} alt="" />
                    <Link to='/comp'><img className="right" src={right} alt="" /></Link>
                </div>
                { hide &&
     <div className="box2">
                    <div className="titles">
                        <div className="title2">TODO TITLE</div>
                        <div className="sub">TODO SUB TITLE</div>
                    </div>


                    <div className="images2">
                        <Link to='/edit'><img src={edit} alt="" /></Link>
                        <img onClick={hidetask} src={basket} alt="" />
                        <Link to='/comp'><img src={tick} alt="" /></Link>
                    </div>
                </div>
                }
           
              { hide2 &&
                  <div className="box3">
                    <div className="titles2">
                        <div className="title3">TODO TITLE</div>
                        <div className="sub2">TODO SUB TITLE</div>
                    </div>


                    <div className="images3">
                        <img src={edit} alt="" />
                        <img onClick={hidetask2} src={basket} alt="" />
                        <img src={tick} alt="" />
                    </div>
                </div>
              }
              {/* <div>Testing</div> */}
                <div className="box4">
                    <div className="titles3">
                        <div className="title4">TODO TITLE</div>
                        <div className="sub3">TODO SUB TITLE</div>
                    </div>


                    <div className="images4">
                        <img src={edit} alt="" />
                        <img src={basket} alt="" />
                        <img src={tick} alt="" />
                    </div>
                </div>
                <div className="box5">
                    <div className="titles4">
                        <div className="title5">TODO TITLE</div>
                        <div className="sub4">TODO SUB TITLE</div>
                    </div>


                    <div className="images5">
                        <img src={edit} alt="" />
                        <img src={basket} alt="" />
                        <img src={tick} alt="" />
                    </div>
                </div>
                <div className="box6">
                    <div className="titles5">
                        <div className="title6">TODO TITLE</div>
                        <div className="sub5">TODO SUB TITLE</div>
                    </div>


                    <div className="images6">
                        <img src={edit} alt="" />
                        <img src={basket} alt="" />
                        <img src={tick} alt="" />
                    </div>
                </div>
                <Link to='/add'><button className="plus">+</button></Link>
            </div>


   




        </>
    )
}
export default Todo;