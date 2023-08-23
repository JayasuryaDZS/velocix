import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useResolvedPath } from "react-router-dom";
import {
  Search,
  Dash,
  ArrowDown,
} from "react-bootstrap-icons";

import style from "../../styles/dashboard.module.scss";
import { getAllRelease } from "../../api";

const Dashboard = () => {
  const { id } = useParams();
  const [allData, setAllData] = useState([]);
  // const 
  
  const fetchData = async () => {
    const data = await getAllRelease();
    setAllData(data);
  }

  useEffect(() => {
    fetchData();
  },[]);

  const titlePropsCheck = {
    "cdn" : "CDN",
    "vxoa": "VXOA",
    "vpp" : "VPP",
    "vrm" : "VRM"
  }
console.log(allData[0]?.attributes.content[0].userTechnicalDocuments , "HCekcing the ll data 39 -->");
  return (
    <div className={style.container}>
      {allData.length > 0 && allData.map((data, index) => {
        const {attributes: { content }} = data;
        return (
          <div className={style.heroWrapper} key={data.id}>
            <div className={style.content}>
              <h1>{data.attributes.release_title}</h1>
              <p>Everything you need to get your software documentation online.</p>
              <div className={style.inputWrapper}>
                <input />
                <Search />
              </div>
            </div>
            <div>
              <button>Download</button>
            </div>
            <div className={style.cardWrapper}>
            {content.length > 0 && content.map((data, index) => {
              return (
                <div key={index} className={style.togHead}>
                  <div>
                    {Object.keys(data)[0]}
                  </div>
                  <div>
                    <span></span>
                    {(data.userTechnicalDocuments) ? <ArrowDown /> : <Dash />}
                    
                  </div>
                </div>
              )
            })}
            </div>
          </div>

        )
      })}
    </div>
  );
};

export default Dashboard;
