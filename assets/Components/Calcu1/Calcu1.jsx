import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import tick from '../../Images/tick.png';
import sign from '../../Images/sign.png';
import '../Calcu1/Calcu1.css';

const Calcu1 = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => setInput("");
  const handleDelete = () => setInput(input.slice(0, -1));
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="box1">
    
      <div className="display" style={{ background: "white", padding: "100px", margin: "10px", borderRadius: "10px", fontSize: "50px",marginBottom:"30px" }}>
        {input || "0"}
      </div>

     
      <div className="buttons1">
        <Link to="/dark"><button className="dark">Dark</button></Link>
        <button className="sign" onClick={() => handleClick("+/-")}><img className="sign2" src={sign} alt="" /></button>
        <button className="sin" onClick={() => handleClick("Math.sin(")}>sin</button>
        <button className="tick" onClick={handleEqual}><img src={tick} alt="" /></button>
      </div>

      
      <div className="buttons2">
        <button className="ac" onClick={handleClear}>AC</button>
        <button className="delete" onClick={handleDelete}><FontAwesomeIcon className="delete2" icon={faDeleteLeft} /></button>
        <button className="line" onClick={() => handleClick("/")}>/</button>
        <button className="star" onClick={() => handleClick("*")}>*</button>
      </div>

      <div className="buttons3">
        <button onClick={() => handleClick("7")} className="seven">7</button>
        <button onClick={() => handleClick("8")} className="eight">8</button>
        <button onClick={() => handleClick("9")} className="nine">9</button>
        <button onClick={() => handleClick("-")} className="minus">-</button>
      </div>

    
      <div className="buttons4">
        <button onClick={() => handleClick("4")} className="four">4</button>
        <button onClick={() => handleClick("5")} className="five">5</button>
        <button onClick={() => handleClick("6")} className="six">6</button>
        <button onClick={() => handleClick("+")} className="plus">+</button>
      </div>

  
      <div className="buttons5">
        <button onClick={() => handleClick("1")} className="one">1</button>
        <button onClick={() => handleClick("2")} className="two">2</button>
        <button onClick={() => handleClick("3")} className="three">3</button>
      </div>

   
      <div className="buttons6">
        <button onClick={() => handleClick("0")} className="zero">0</button>
        <button onClick={() => handleClick(".")} className="dot">.</button>
        <button onClick={handleEqual} className="equal">=</button>
      </div>
    </div>
  );
};

export default Calcu1;