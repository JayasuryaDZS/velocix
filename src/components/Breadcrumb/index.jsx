import React from "react";

const BreadCrumb = ({ pathname }) => {

  const url = new URLSearchParams(window.location.search)
  const menu = url.get("menu")
  const submenu = url.get("submenu")

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {menu}
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {submenu}
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
