import React, { useState } from "react";
import arrow from '../../Images/arrow.png';
import '../Add/Add.css';
import { Link } from "react-router-dom";


function Add() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");


  const handlesubmit = async () => {
    const FormData = {
      title: title,
      detail: detail,
    };


    try {
      const response = await fetch("http://127.0.0.1:3000/form/submit", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData)
      });


      if (response.ok) {
        console.log('Data sent to backend');
      } else {
        console.log('Backend error');
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleAdd = async () => {
    if (!title || !detail) {
      alert("Please fill all fields");
      return;
    }


    localStorage.setItem("title", title);
    localStorage.setItem("detail", detail);


    await handlesubmit();


    setTitle("");
    setDetail("");
  };


  return (
    <>
      <div className="box7">
        <div className="nav2">
          <Link to="/"><img className="arrow" src={arrow} alt="back" /></Link>
          <h1 className="add">ADD TASK</h1>
        </div>


        <div className="row">
          <div>Title</div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="input" type="text" />
        </div>


        <div className="row2">
          <div>Detail</div>
          <input value={detail} onChange={(e) => setDetail(e.target.value)} className="input2" type="text" />
        </div>


        <Link to="/edit"><button onClick={handleAdd} className="add2">ADD</button></Link>
      </div>
      {/* <div>Testing3</div> */}
    </>
  );
}


export default Add;