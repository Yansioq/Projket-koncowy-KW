import React from "react";
import './header.scss'
import {Logo} from "../Logo/index.jsx";
import {Menu} from "../Menu/index.jsx";

export function Header() {
    return (
        <header className="Header">
            <Logo />
            <Menu />
        </header>
    )
}
