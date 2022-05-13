import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import logo from "./img/a-logo.svg"
import RouteContainer from "./route/RouteContainer";


function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <RouteContainer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
