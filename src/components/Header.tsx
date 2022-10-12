import React from "react";
import Head from './Header.module.css';
import logo from "./logo.png";

export const Header = () => {
    return (
        <header className={Head.header}>
            <img src={logo} alt = ''/>
        </header>
    );
};
