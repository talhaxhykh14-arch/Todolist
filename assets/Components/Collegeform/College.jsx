import React, { useState } from "react";
import '../Collegeform/College.css'
import { Form } from "react-router-dom";
const Collegeform = () => {
//     const [name, setName] = useState("")
//     const username = (event) => {
//         setName(event.target.value)
//         console.log('Username:', name);
//     }
//     const handlesubmit = async (e) =>{
//             e.preventDefault();

//     const FormData = {
//       name: name,
//     };
//     try{
//         const response = await fetch("http://127.0.0.1:3000/form/submit",{
// method:'Post',
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify(FormData)
//         })
//         if(response.ok){
//             console.log('received data',response);
            
//         } else{
//             console.log('something is wrong');
            
//         }
//     } catch (error){
// console.log(error);

//     }
//     }




    return (
        <>
            {
                <div className="formcolor">
                    <h1 className="h1">College Admissions Form</h1>
                    <h3 className="h3">Enter your admission information below</h3>
                    <p className="row">____________________________________________________________________________________________________</p>
                    <div className="name">Name</div>
                    <div className="input1">
                        <input onChange={username} className="text1" type="text" />
                        <input className="text2" type="text" />
                        <input className="text3" type="text" />


                    </div>
                    <div className="first">
                        <div>First Name</div>
                        <div>Middle Initial</div>
                        <div>Last Name</div>
                    </div>
                    <div className="birth">Birth Date</div>
                    <div className="options">
                        <select className="select1">
                            <option>Please select a month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>April</option>
                        </select>
                        <select className="select2">
                            <option>Please select a day</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                        </select>
                        <select className="select3">
                            <option>Please select a year</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>

                        </select>
                    </div>
                    <div className="month">
                        <div>Month</div>
                        <div>Day</div>
                        <div>Year</div>

                    </div>
                    <div className="citizen">
                        <div>Gender</div>
                        <div>Of which country are you a citizen?</div>
                    </div>
                    <div className="gender">
                        <input className="checkbox1" type="checkbox" />
                        <div className="male">Male</div>
                        <input className="checkbox2" type="checkbox" />
                        <div className="female">Female</div>
                        <select className="please">
                            <option>Please select</option>
                            <option>Pakistan</option>
                            <option>Africa</option>
                            <option>Afganistan</option>


                        </select>
                    </div>
                    <div className="phone">
                        <div>Phone</div>
                        <div>E-mail Address</div>
                    </div>
                    <div className="number">
                        <input className="number2" type="number" placeholder="(000) 000-0000" />
                        <input className="mail" type="email" placeholder="ex:myname@example.com" />
                    </div>
                    <div className="example">example@example.com</div>
                    <div className="mailing">Mailing Address</div>
                    <input className="email" type="password" />
                    <div className="street">Street Address</div>
                    <input className="password" type="password" />
                    <div className="city">City</div>
                    <input className="lahore" type="text" />
                    <div className="postal">Postal / Zip Code</div>
                    <div className="do">Do you speak any languages other than English?</div>
                    <div className="checkboxes">
                        <input type="checkbox" />
                        <div className="yes">Yes</div>
                        <input className="checkboxes2" type="checkbox" />
                        <div className="no">No</div>
                    </div>

                    <div className="list">Please list them </div>
                    <input className="empty" type="text" />



                    <div className="row2">____________________________________________________________________________________________________</div>
                    <div className="button"><button onClick={handlesubmit} className="button2">Next</button></div>

                </div>
            }

            {

                <div className="formcolor2">
                    <h2 className="edu">Education</h2>
                    <div>____________________________________________________________________________________________________</div>
                    <div className="high">
                        <div> High School or Equivalent Name</div>
                        <div>Graduation Date</div>
                    </div>
                    <div className="datetime">
                        <input className="school" type="text" />
                        <input className="datetime2" type="datetime-local" />
                    </div>
                    <div className="date">Date</div>
                    <div className="address">School Address</div>
                    <div className="address2">
                        <input className="address3" type="password" />
                        <input className="address4" type="password" />
                    </div>
                    <div className="province">State / Province</div>
                    <div className="line">____________________________________________________________________________________________________</div>
                    <div className="button3"><button className="button4">Back</button></div>
                    <div className="button5"><button className="button6">Next</button></div>
                </div>
            }


        </>
    )
}
export default Collegeform; 