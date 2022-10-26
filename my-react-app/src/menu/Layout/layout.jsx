import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {Header} from "../Header/index.jsx";
import './Layout.scss';

export function Layout() {
    return (
        <div className="Layout">
            <Header />
            <main className="Layout__main">
                <Outlet />
            </main>
        </div>
    );
}

