import React, { Component } from 'react';
import { NavLink, Outlet } from "react-router-dom";
// @ts-ignore
import logo from "../../img/a-logo.svg";
import "./Layout.container.scss";
import DropdownComponent from "../DropdownContainer/DropdownContainer";

interface Props {
    products: object,

}

// @ts-ignore
let changeColorLink = ({isActive}) => (isActive ? "link-green" : '')

class LayoutContainer extends Component<Props> {
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
                        <DropdownComponent products={this.props.products}/>
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
