import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const CdnScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-contents"></div>
      </div>
    </div>
  );
};

export default CdnScreen;
