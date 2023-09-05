import React, { useState } from "react";
import style from '../../styles/dashboard.module.scss';
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import BreadCrumb from "../../components/Breadcrumb";
import { Outlet } from "react-router-dom";

const GetStarted = () => {
  const [activeState, setActiveState] = useState("introduction");
  return (

    <div>
      
             <h1>Get started</h1>

             {/* <Outlet/> */}

  </div>
  );
};

export default GetStarted;
