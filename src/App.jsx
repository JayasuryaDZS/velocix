import { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router-dom";
import axios from 'axios';

import './App.css'
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Sidebar from './components/Sidebar/Sidebar';
import { productAndRelease } from "./api";

function App() {
  const params = useParams();
  const [sidebarList, setSidebarList] = useState([]);

  const [overAllData, setOverAllData] = useState([]);
  // console.log(params, "HCkecing the params 16 -->");
  const getProducts = async () => {
    let fullData = await productAndRelease();

    setOverAllData(fullData);
    let arrList = [];
    if ( fullData.length ) {
      fullData.forEach((data) => {

        let obj = {};
        obj["name"] = data.attributes.product_name;

        let release = (data.attributes.releases.data).map(data => data.attributes.release_title);
        obj["release"] = release;

        arrList.push(obj);
      });
    } else {
      arrList = []
    }
    setSidebarList(arrList)
  }

  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className='root-container'>
      <Header />
      {
       Object.keys(params).length > 0 &&
       <Sidebar list = {sidebarList} />
      }
      <main>
        <div className='main-container'>
          <Outlet />
        </div>
      </main>
      {
       Object.keys(params).length == 0 &&
       <Footer />
      }
    </div>
  )
}

export default App
