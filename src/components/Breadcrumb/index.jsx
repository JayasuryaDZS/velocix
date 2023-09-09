import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {

  const location = useLocation()
  let menu = location.pathname.split('/')

  menu.splice(0,1)

   let url = ""
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
      { menu && menu.map((item)=>{
          url += "/"+item
          return     <li className="breadcrumb-item">
          <Link to={url}>{item}</Link>
        </li>
        })}
      </ol>
    </nav>   
  );
};

export default BreadCrumb;
