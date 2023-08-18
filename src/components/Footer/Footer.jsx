import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    return(
        <div className={style.footerContainer}>
            <div>
                <p>&#169; 2023 <span className="brand-logo">Velocix,</span> All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;