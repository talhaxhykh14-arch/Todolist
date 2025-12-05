import React, { useEffect, useState } from 'react'
import oldman from './assets/Images/Oldman.png'
import './App.css'
import Home from './assets/Components/Home/Home'
import About from './assets/Components/About/About'
import Works from './assets/Components/Works/Works'
import Services from './assets/Components/Services/Services'
import Testimonial from './assets/Components/Testimonial/testimonial'
import Blog from './assets/Components/Blog/Blog'
import Contact from './assets/Components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/Components/Navbar/Navbar'
import Collegeform from './assets/Components/Collegeform/college'
import Todo from './assets/Components/Todo task/Todo'
import Add from './assets/Components/Add/Add'
import Edit from './assets/Components/Edit/Edit'
import Comp from './assets/Components/Completed/Comp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Calcu1 from './assets/Components/Calcu1/Calcu1'
import Calcu2 from './assets/Components/Calcu2/Calcu2'

function App() {
 
  // useEffect(()=>{
  //   console.log('useeffect is calling');
  //   return ()=>{
  //       console.log('component 2 is calling');
  //   }
    
  // },)

  
//         let users=["talha","yasir","zakriya"]
//         let us=localStorage.getItem('studentdata')
//         console.log('aa', JSON.parse(us));
//         let studentdata={
// name:'talha',
// age:19,
//  }

//         localStorage.setItem('studentdata', JSON.stringify(studentdata)) 
      

  return(
  <>
  {/* <Calcu1/>
 <Calcu2/> */}
  {/* <Calcu2/> */}
  {/* <Calcu1/> */}
  {/* <h1>Hello react<FontAwesomeIcon icon={faHouse} /></h1> */}
    {/* <Todo/> */}
  <Routes>
       <Route path='/' element={ <Todo/> } />

       <Route path='/add' element={ <Add/> } />
    <Route path='/edit' element={ <Edit/> } />
    <Route path='/comp' element={ <Comp/> } />

  
 

  </Routes>
   {/* <Comp/> 
   <Edit/> */}
 
    {/* <Routes>
      <Route path='/light' element={<Calcu1/>} />

      <Route path='/dark' element={ <Calcu2/>} />


    </Routes> */}
   

  
     

{/* <Collegeform/> */}
{/* <Works 
name="talha"
age={19}
 /> */}
    </>
  )
}

export default App
