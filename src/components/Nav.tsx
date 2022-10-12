import React from "react";
import Navi from'./Nav.module.css'

export const Nav = () => {
    return (
        <nav className={Navi.nav}>
            <div className={Navi.item}>
                <a> Profile</a>
            </div>
            <div className={`${Navi.item} ${Navi.active}`}>
                <a> Message</a>
            </div>
            <div className={Navi.item}>
                <a> News</a>
            </div>
            <div className={Navi.item}>
                <a> Music</a>
            </div>
            <div className={Navi.item}>
                <a> Settings</a>
            </div>
        </nav>
    );
};