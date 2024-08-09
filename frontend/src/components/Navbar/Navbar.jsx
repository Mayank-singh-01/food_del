import React, { useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"

function navbar() {

  const [menu,setMenu] = useState("home")

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => {setMenu("home")}}className={menu === "home" ? "active" : ""}>home</li>
        <li onClick={() => {setMenu("menu");}} className={menu === "menu" ? "active" : ""}> menu </li>
        <li onClick={() => {setMenu("mobile-app")}} className={menu === "mobile-app" ? "active" : ""} >mobile-app </li>
        <li onClick={() => {setMenu("context us")}} className={menu === "context us" ? "active" : ""} >context us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sing in</button>
      </div>
    </div>
  );
}

export default navbar