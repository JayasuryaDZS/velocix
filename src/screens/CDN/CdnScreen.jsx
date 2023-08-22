import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
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

export default Dashboard;
