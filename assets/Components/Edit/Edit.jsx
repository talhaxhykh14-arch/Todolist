import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.png";
import "../Edit/Edit.css";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const savedTitle = localStorage.getItem("title") || "";
    const savedDetail = localStorage.getItem("detail") || "";
    setTitle(savedTitle);
    setDetail(savedDetail);
  }, []);

  const handleUpdate = () => {
    localStorage.setItem("title", title);
    localStorage.setItem("detail", detail);
   
  };
  return (
    <>
      <div className="box8">
        <div className="nav3">
          <Link to="/add"><img className="arrow2" src={arrow} alt="" /></Link>
          <h1 className="edit">EDIT TASK</h1>
        </div>

        <div className="row3">
          <div>Title</div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="input3" type="text"/>
        </div>

        <div className="row4">
          <div>Detail</div>
          <input value={detail} onChange={(e) => setDetail(e.target.value)} className="input4" type="text" />
        </div>

        <div className="buttons">
          <Link to="/comp"><button onClick={handleUpdate} className="update">Update</button></Link>
          <Link to="/"><button className="cancel">Cancel</button></Link>
        </div>
      </div>
      {/* <div>Testing2</div> */}
    </>
  );
};
export default Edit;