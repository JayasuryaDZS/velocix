import React, { useState } from "react";
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  ArrowDown,
  Signpost2Fill,
  Box2,
  Tools,
  X,
  XLg,
} from "react-bootstrap-icons";
const Sidebar = (props) => {
  const { activeState } = props;
  console.log(activeState, "CHecking the active state 14 -->");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="sidebarMenu">
        <span className="menuIcon" onClick={() => setToggle(true)}>
          <List />
        </span>
      </div>
      <div
        id="docs-sidebar"
        className={`docs-sidebar sidebar-visible ${toggle ? "show" : ""}`}
      >
        <nav id="docs-nav" className="docs-nav navbar">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            <li className={ `nav-item section-title ${ activeState === "introduction" ? "active" : "" }` }>
              <a className="nav-link scrollto active" href="#introduction">
                <span className="theme-icon-holder me-2">
                  <Signpost2Fill />
                </span>
                Introduction
              </a>
              <span onClick={() => setToggle(false)} className="close-sidebar">
                <XLg />
              </span>
            </li>

            <li className={`nav-item ${activeState === "section1.1" ? "active" : ""}`}>
              <a className="nav-link scrollto" href="#section1.1">
                Section Item 1.1
              </a>
            </li>
            <li className={`nav-item ${activeState === "section1.2" ? "active" : ""}`}>
              <a className="nav-link scrollto" href="#item-1-2">
                Section Item 1.2
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-3">
                Section Item 1.3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-4">
                Section Item 1.4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-5">
                Section Item 1.5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-6">
                Section Item 1.6
              </a>
            </li> */}
            <li className={ `nav-item section-title ${activeState === "vxon" ? "active" : ""}`}>
              <a className="nav-link scrollto active" href="#vxon">
                <span className="theme-icon-holder me-2">
                  <ArrowDown />
                </span>
                VXON
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-5">
                Section Item 2.1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-6">
                Section Item 2.2
              </a>
            </li>
            <li className={ `nav-item section-title `}>
              <a className="nav-link scrollto active" href="#introduction">
                <span className="theme-icon-holder me-2">
                  <Box2 />
                </span>
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-5">
                Section Item 2.1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-6">
                Section Item 2.2
              </a>
            </li>
            <li className={ `nav-item section-title `}>
              <a className="nav-link scrollto active" href="#introduction">
                <span className="theme-icon-holder me-2">
                  <Tools />
                </span>
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-5">
                Section Item 2.1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-6">
                Section Item 2.2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;