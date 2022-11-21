import React from "react";
import Navi from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={Navi.nav}>
            <div className={Navi.item}>
                <NavLink to='/profile' className={Navi.aNav} activeClassName={Navi.activeLink}> Profile</NavLink>
            </div>
            <div className={`${Navi.item} ${Navi.active}`}>
                <NavLink to='/dialogs' className={Navi.aNav} activeClassName={Navi.activeLink}> Message</NavLink>
            </div>
            <div className={Navi.item}>
                <NavLink to='/news' className={Navi.aNav} activeClassName={Navi.activeLink}> News</NavLink>
            </div>
            <div className={Navi.item}>
                <NavLink to='/music' className={Navi.aNav} activeClassName={Navi.activeLink}> Music</NavLink>
            </div>
            <div className={Navi.item}>
                <NavLink to='/settings' className={Navi.aNav}  activeClassName={Navi.activeLink}> Settings</NavLink>
            </div>
        </nav>
    );
};