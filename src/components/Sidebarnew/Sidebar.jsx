import React from 'react';
import style from "./sidebar.module.scss";


const Sidebar = ({ sidebarToggle }) => {
    return (
        <div className={style.sidebar+" "+(sidebarToggle ? style.sidebarShow : "")}>
            <div>Sidebar content 33 --</div>
        </div>
    )
}

export default Sidebar;