import React from "react";
import { navbar } from "../../utils/data";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="w-full px-6 py-4 bg-slate-500 flex">
      <div className="flex items-center">
        <h1 className="text-white text-3xl font-poppins font-bold">ZONE</h1>
        <span className="bg-btnPrimary p-1 mt-4 rounded-full"></span>
      </div>
      <div className="links">
        <ul className="flex gap-2">{
          navbar.map(({id,title,path})=>(
            <li>
              <NavLink to={path} key={id}>{title}</NavLink>
            </li>
          ))}</ul>
      </div>
      <div className="menu-append"></div>
    </div>
  );
}
