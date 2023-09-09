import React, { useState } from "react";
import style from '../styles/dashboard.module.scss';
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import BreadCrumb from "../components/Breadcrumb";
import {  Outlet, Route, Routes } from "react-router-dom";
import General from "./General";
import GetStarted from "./GetStarted";
import CdnScreen from "./CDN/CdnScreen";

const CdnLayout
 = () => {
  const [activeState, setActiveState] = useState("introduction");
  return (
    <div className={style.wrapper}>
    <Header />
    <div className="container">
      <div className={style.rowContainer}>
          <Sidebar activeState={activeState}/>
          <div className={style.main__wrapper}>
            <div className={style.contentSection}>

           
            <BreadCrumb />
            
               {/* <Routes>
               <Route path="/"  element={<CdnScreen />}/>
                <Route path="/cdn/getStarted/general"  element={<General />}/>
                </Routes> */}
           
   
            <Outlet/>


            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default CdnLayout
;