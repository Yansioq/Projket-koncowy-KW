import React from "react";
import {NavLink} from "react-router-dom";
import './Menu.scss'

export function Menu() {
    return (
        <section className="menu">
            <div className="square">
                <section className="menu1">
                    <p className="Info"><NavLink className='Menu-element' to='/about'>About</NavLink></p>
                    <p className="Posts"><NavLink className='Menu-element' to='/share#explore'>Explore</NavLink></p>
                </section>
            </div>
            <div className="circle">
                <section className="menu2"><NavLink className='Menu-element-logo' to='/'>
                    <p className="logo1">Your</p>
                    <p className="logo2">beauty</p>
                </NavLink>
                </section>
            </div>
            <div className="square2">
                <section className="menu3">
                    <p className="Share"><NavLink className='Menu-element' to='/share'>Share
                    </NavLink></p>
                    <p className="Contact"><NavLink className='Menu-element' to='/contact'>Contact</NavLink></p>
                </section>
            </div>
        </section>
    );
}