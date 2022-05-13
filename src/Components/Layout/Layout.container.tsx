import React, { Component } from 'react';
import { NavLink, Outlet } from "react-router-dom";
// @ts-ignore
import logo from "../../img/a-logo.svg";
import "./Layout.container.scss";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
// @ts-ignore
let changeColorLink = ({isActive}) => (isActive ? "link-green" : '')

class LayoutContainer extends Component {
    render() {
        return (
            <>
                <header className="header-container">

                    <div className="pages-products">
                        <div>
                            <NavLink className={changeColorLink} to="all">
                                <span className="link-name">all</span>
                            </NavLink>
                            <NavLink className={changeColorLink} to="tech">
                                <span className="link-name">tech</span>
                            </NavLink>
                            <NavLink className={changeColorLink} to="clothes">
                                <span className="link-name">clothes</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="Logo"/>
                        </NavLink>
                    </div>
                    <div className="dropdown-container">
                        <DropdownContainer/>
                    </div>
                </header>


                <main className="main-container">
                    <div className="main-container-routes">
                        <Outlet/>
                    </div>
                </main>
            </>
        );
    }
}

export default LayoutContainer;
