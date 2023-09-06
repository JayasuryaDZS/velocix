import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BreadCrumb = ({ pathname }) => {

  const location = useLocation()
  const navigate = useNavigate()

  const url = new URLSearchParams(window.location.search)
  const menu = url.get("menu")
  const submenu = url.get("submenu")

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
    { menu &&    <li onClick={()=> navigate(`/cdn/getStarted?menu=${menu}`)} className="breadcrumb-item active" aria-current="page" >
          {menu}
        </li>}
       {submenu && <li className="breadcrumb-item active" aria-current="page">
          {submenu}
        </li>}
      </ol>
    </nav>   
  );
};

export default BreadCrumb;
