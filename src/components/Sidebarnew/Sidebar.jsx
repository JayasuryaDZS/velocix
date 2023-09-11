import React,{ useState } from 'react';
import style from "./sidebar.module.scss";
import { ChevronDown, ChevronRight,  } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";

const SideBarItems = (props) => {
    const { item } = props;
    const [open, setOpen] = useState(false);

    if(item?.children?.length ) {
        return(
            <div className={style.sidebarItem+" "+ (open ? style.open : "")}>
                <div className={style.sidebarTitle}>
                    <span onClick={()=> setOpen(!open)}>
                        {open
                        ? 
                        <ChevronDown />
                        :
                        <ChevronRight />
                        }
                    </span>
                    <span>{item.title}</span>
                </div>
                <div className={style.sidebarCont}>
                    {item.children.map((data, index) => {
                        return (
                            <SideBarItems key={index} item={data}/>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return(
            <div className={style.sidebarItem}>
                <div className={style.sidebarTitle}>
                    <span>{item.title}</span>
                </div>
            </div>
        )
    }
}

const Sidebar = ({ sidebarToggle }) => {
    const sidebarData = useSelector((data) => data?.products?.mainData);
    return (
        <div className={style.sidebar+" "+(sidebarToggle ? style.sidebarShow : "")}>
            {sidebarData.length > 0 && sidebarData.map((data,index) => {
                return(
                    <SideBarItems key={index} item={data} />
                )
            })}
        </div>
    )
}

export default Sidebar;