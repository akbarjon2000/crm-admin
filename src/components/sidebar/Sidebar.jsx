import React, { useState } from "react"
import "./sidebar.scss";
import { sidebar_obj } from "../../utils/sidebar_obj.js"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import SubNav from "./SubNav";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);



  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">U</span>
        </Link>
      </div>
      <hr />


      <div className="center">
        {sidebar_obj.map((item, index) => {
          return <div key={item.id}>
            <SubNav item={item} index={index} ></SubNav>

          </div>
        })}

      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
