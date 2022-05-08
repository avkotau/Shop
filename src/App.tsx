import React from 'react';
import './App.scss';
import { BrowserRouter, NavLink } from "react-router-dom";
import DropdownContainer from "./Components/DropdownContainer/DropdownContainer";
// @ts-ignore
import logo from "./img/a-logo.svg"
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <header className="header-container">
                    <div className="pages-products">
                        <div>
                            <NavLink className="changed-header" to="all">
                                <span>all</span>
                            </NavLink>
                            <NavLink className="changed-header" to="tech">
                                <span>tech</span>
                            </NavLink>
                            <NavLink className="changed-header" to="clothes">
                                <span>clothes</span>
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
                    <MainContainer/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
