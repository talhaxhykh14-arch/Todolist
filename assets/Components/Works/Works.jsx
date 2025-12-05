import React from "react";
import '../Works/Works.css'
const Works = (props)=>{
  let userinst='pnytrainings'
  localStorage.setItem('user institute name',userinst)
    //  let usernames = ["talha" , "yasir"];
    return(
        <>
       {/* <div>Users list</div>
    <ul>
      {
        usernames.map((users,index) => (
          <li key={index}> {usernames} </li>
        ))
      }
    </ul> */}
    users:{props.age}
        </>
  
    )

}
export default Works;