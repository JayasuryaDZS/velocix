import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  Signpost2Fill,
  X,
  XLg,
} from "react-bootstrap-icons";

import { Loader } from "../Spinner";
// import { productAndRelease } from "../../api";

const Sidebar = (props) => {
  const [toggle, setToggle] = useState(false);
  // const [sidebarList, setSidebarList] = useState([]);
  const params = useParams();
 

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
        <span onClick={() => setToggle(false)} className="close-sidebar">
          <XLg />
        </span>
        <nav id="docs-nav" className="docs-nav navbar">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            <li className="nav-item section-title active">
              <a className="nav-link scrollto active" href="#section-1">
                <span className="theme-icon-holder me-2">
                  <Signpost2Fill />
                </span>
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-1">
                Section Item 1.1
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
