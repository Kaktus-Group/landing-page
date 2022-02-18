import React from "react";
import Navbar from "../components/Navbar";
import {  Routes, Route, Link, NavLink } from "react-router-dom";
import About from "../pages/About";
import { navbar } from "../utils/data";
const Root = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <Routes>
        {
         navbar.map(({id,element,path})=>(
           <Route key={id} element={element} path={path}/>
         )) 
        }
      </Routes>
    </div>
  );
};
export default Root;
