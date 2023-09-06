import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  ArrowDown,
  ChevronRight,
  Signpost2Fill,
  Box2,
  Tools,
  X,
  XLg,
} from "react-bootstrap-icons";
const Sidebar = (props) => {
  const [sideBarMenu, setSideBarMenu] = useState("")
  const [subSideBarMenu, setSubSideBarMenu] = useState("")
  const { activeState } = props;
  console.log(activeState, "CHecking the active state 14 -->");
  const [toggle, setToggle] = useState(true);

  const sideBarDropDown = (menu)=>{
    if(sideBarMenu === ""){
      setSideBarMenu(menu)
    }else if(sideBarMenu === menu){
       setSideBarMenu("")
    }else{
      setSideBarMenu(menu)
    }
  }

  const subSideBarDropDown = (subMenu)=>{
    if(subSideBarMenu === ""){
      setSubSideBarMenu(subMenu)
    }else if(subSideBarMenu === subMenu){
      setSubSideBarMenu("")
    }else{
      setSubSideBarMenu(subMenu)
    }
  }

  return (
    <div>
      
      <div
        id="docs-sidebar"
        className={`docs-sidebar sidebar-visible ${toggle ? "show" : ""}`}
      >
        <nav id="docs-nav" className="docs-nav ">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            <li className={ `nav-item section-title ${ activeState === "" ? "active" : "" }` }>
              <Link className="nav-link scrollto active" to="#">
              Overview
              </Link>
              <span onClick={() => setToggle(!toggle)} className="close-sidebar">
              <List />
              </span>
             
            </li>
              <li>
                <Link className="nav-link" to="/cdn/getStarted" onClick={()=>{sideBarDropDown('Get started')}} >
                <ChevronRight className="arrow-icon" />  Get started
                </Link>
               { sideBarMenu === "Get started" &&  <ul className="sub-menu">
                  <li>   <Link className="nav-link" to="/cdn/getStarted/general">
                  General
                </Link></li>
                <li>   <Link className="nav-link" to="#">
                Account checklist
                </Link></li>
                <li>   <Link className="nav-link" to="#">
                Add funds to your balance
                </Link></li>
                </ul>}
              </li>
              <li>
                <Link className="nav-link" to="#" onClick={()=>{sideBarDropDown("About Stripe payments")}}>
                <ChevronRight className="arrow-icon" /> About Stripe payments
                </Link>
                { sideBarMenu === "About Stripe payments" && <ul className="sub-menu">
                  <li>   <Link className="nav-link" to="#">
                  Online payments
                </Link></li>
                <li>   <Link className="nav-link" to="#">
                Recurring payments
                </Link>
                
                </li>
                <li>   <Link className="nav-link" to="#" onClick={()=>{subSideBarDropDown("Currency conversions")}}>
                <ChevronRight  className="arrow-icon"/> Currencies
                </Link>
             { subSideBarMenu === "Currency conversions" &&   <ul className="sub-menu inner-sub-menu">
                  <li>   <Link className="nav-link" to="#">
                  Currency conversions
                </Link></li>
               
               
                </ul>}
                </li>
                </ul>}
              </li>
             
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
