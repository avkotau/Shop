import React, { Component } from 'react';
import DropDownComponent from "./DropDownComponent";
// @ts-ignore
import basket from "../../img/Empty Cart.png";
// @ts-ignore
import vector from "../../img/vectorUp.png";
import "./DropDownContainer.scss";

class DropdownContainer extends Component {
    state = {
        show: false
    }

    render() {
        const {show} = this.state;

        return (
            <div className="dropdown-container">
                <div className="basket-vector">
                    <div className="vector" onClick={() => this.setState({show: !show})}>
                        $
                        <img src={vector} alt="Vector"/>
                    </div>
                    <div className="basket">
                        <img src={basket} alt="Basket"/>
                    </div>
                </div>

                {/*<input type="text">input</input>*/}
                {
                    (show)
                        ? <DropDownComponent/>
                        : "It's !show"
                }
            </div>
        );
    }
}

export default DropdownContainer;
