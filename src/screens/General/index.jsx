import React, { useState } from "react";
import style from '../../styles/dashboard.module.scss';
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import BreadCrumb from "../../components/Breadcrumb";

const General = () => {
  const [activeState, setActiveState] = useState("introduction");
  return (
    <div>
      <h1>General</h1>
  </div>
  );
};

export default General;
