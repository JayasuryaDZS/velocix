// import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import style from "./Header.module.scss";


const Header = () => {
    const navItems = [
        { id: 1, menu: "Home", route: ""},
        { id: 2, menu: "Product & services", route: ""},
        { id: 3, menu: "Docs", route: ""},
        { id: 4, menu: "Contact", route: ""}
    ];

    const NavItems = (props) => {
        return(
            <li>
                <Link to="/">{props.menu}</Link>
            </li>
        )
    };

    return(
        <div className={style.container}>

            <div className={style.wrapper}>

                {/** Logo Container */}
                <div className={style.logoWrapper}>
                    <div className={style.imgContainer}>
                        <img src={ logo } alt="brand-logo" />
                    </div>
                    <span className={style.brandLogo}>Velocix</span>
                </div>

                {/** Nav Items */}
                <ul className={style.navItems}>
                    {navItems.map(data => ( <NavItems key={data.id} {...data}/> ))}
                </ul>

            </div>
        </div>
    )
};


export default Header;