import React from 'react';
import "@material-tailwind/react/tailwind.css";
import Navbar from '../components/Navbar';
import {Route, Routes, Link, NavLink} from "react-router-dom";
import About from '../pages/About';
import { navbar } from '../utils/data';
const Root =()=> {
  return (
    <div className="container mx-auto">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Root/>}/>
        {
          navbar.map(({id,element,path})=>(
            <Route key={id} element={element} path={path}/>
          ))
        }
      </Routes>
    </div>
  )
}
export default Root;
