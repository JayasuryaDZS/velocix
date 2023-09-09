import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";

import logo from "../../assets/icons/logo.svg";
import style from "./Header.module.scss";

const Header = ( { setSidebarToggle, sidebarToggle } ) => {
  const navigate = useNavigate();

  return (
    <div className={style.header}>
      <div className={style.toggleIcons} onClick={()=> setSidebarToggle((prev) => !prev)}>
          { sidebarToggle 
            ?
            <span><X size="30"/></span>
            :
            <span><List size="30"/></span>
          }
      </div>
      <div className={style.logoContainer}>
          <img src={logo} alt="logo"/>
          <span className={style.logoName}>Velocix</span>
      </div>
    </div>
  );
};

export default Header;
