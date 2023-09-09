import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/current.module.scss";
import { GET_ALL_DATA } from "../../store/actionTypes";

//Components:
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebarnew";

const CurrentScreen = () => {
    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);

    useEffect(()=>{
        dispatch({ type: GET_ALL_DATA});
    },[])

    return(
        <div className={style.container}>
            <div className={style.wrapper+ " "+ (sidebarToggle ? style.sideBarOpen : "")}>
                {/** Header Component */}
                    <Header setSidebarToggle={ setSidebarToggle } sidebarToggle={ sidebarToggle } />
                
                {/** Sidebar */}
                <Sidebar sidebarToggle={ sidebarToggle }/>

                {/** Main Content */}

                <div className={style.main}>

                    <div className={style.mainContent}>
                        <div>This the content Area</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CurrentScreen;