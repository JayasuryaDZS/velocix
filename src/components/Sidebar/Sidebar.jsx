import React, { useState } from "react";
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  Signpost2Fill,
  X,
  XLg,
} from "react-bootstrap-icons";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
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
            <li className="nav-item section-title active">
              <a className="nav-link scrollto active" href="#section-1">
                <span className="theme-icon-holder me-2">
                  <Signpost2Fill />
                </span>
                Introduction
              </a>
              <span onClick={() => setToggle(false)} className="close-sidebar">
                <XLg />
              </span>
            </li>

            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-1">
                Section Item 1.1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-2">
                Section Item 1.2
              </a>
            </li>
            <li className="nav-item">
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
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
