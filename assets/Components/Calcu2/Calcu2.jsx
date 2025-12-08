import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import tick from "../../Images/tick.png";
import sign from "../../Images/sign.png";
import "../Calcu2/Calcu2.css";

const Calcu2 = () => {
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
    <div className="box2">
      
      <div
        className="display2"
        style={{background: "black",color: "white",padding: "100px",margin: "10px",borderRadius: "10px",fontSize: "50px",marginBottom:"30px"}}>
        {input || "0"}
      </div>

    
      <div className="buttons7">
        <Link to="/light"><button className="dark2">Light</button></Link>
        <button className="sign3" onClick={() => handleClick("+/-")}>
          <img className="sign4" src={sign} alt="" />
        </button>
        <button className="sin2" onClick={() => handleClick("Math.sin(")}>
          sin
        </button>
        <button className="tick2" onClick={handleEqual}>
          <img src={tick} alt="" />
        </button>
      </div>

   
      <div className="buttons8">
        <button className="ac2" onClick={handleClear}>
          AC
        </button>
        <button className="delete3" onClick={handleDelete}>
          <FontAwesomeIcon className="delete4" icon={faDeleteLeft} />
        </button>
        <button className="line2" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="star2" onClick={() => handleClick("*")}>
          *
        </button>
      </div>

     
      <div className="buttons9">
        <button onClick={() => handleClick("7")} className="seven2">
          7
        </button>
        <button onClick={() => handleClick("8")} className="eight2">
          8
        </button>
        <button onClick={() => handleClick("9")} className="nine2">
          9
        </button>
        <button onClick={() => handleClick("-")} className="minus2">
          -
        </button>
      </div>

      <div className="buttons10">
        <button onClick={() => handleClick("4")} className="four2">
          4
        </button>
        <button onClick={() => handleClick("5")} className="five2">
          5
        </button>
        <button onClick={() => handleClick("6")} className="six2">
          6
        </button>
        <button onClick={() => handleClick("+")} className="plus2">
          +
        </button>
      </div>

      <div className="buttons11">
        <button onClick={() => handleClick("1")} className="one2">
          1
        </button>
        <button onClick={() => handleClick("2")} className="two2">
          2
        </button>
        <button onClick={() => handleClick("3")} className="three2">
          3
        </button>
      </div>

 
      <div className="buttons12">
        <button onClick={() => handleClick("0")} className="zero2">
          0
        </button>
        <button onClick={() => handleClick(".")} className="dot2">
          .
        </button>
        <button onClick={handleEqual} className="equal2">
          =
        </button>
      </div>
    </div>
  );
};

export default Calcu2;