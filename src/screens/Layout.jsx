import React, { useState } from "react";
import style from "../styles/dashboard.module.scss";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import BreadCrumb from "../components/Breadcrumb";

const Layout = (props) => {
  const [activeState, setActiveState] = useState("introduction");
  const [showToggle, setShowToggle] = useState(true);

  return (
    <div className={style.wrapper}>
      <Header />
      <div className="container">
        <div className={style.rowContainer}>
          <Sidebar
            activeState={activeState}
            setShowToggle={setShowToggle}
            showToggle={showToggle}
          />
          <div
            className={`${style.main__wrapper} ${
              showToggle ? style.show : ""
            } ${style.main}`}
          >
            <div className={style.contentSection}>
              <BreadCrumb />
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
