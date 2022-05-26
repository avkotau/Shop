import React, { Component } from 'react';
import DropdownCurrencyContainer from "./DropdownCurrencyContainer";
// @ts-ignore
import vector from '../../img/vectorUp.png';
import './DropdownCurrencyList.scss';

class DropdownCurrencyList extends Component {
    render() {
        return (
            <>
                <ul className="dropdown-menu" style={{position: 'absolute'}}>
                    <li>{"\uFF04"}usd</li>
                    <li>{"\u20AC"} euro</li>
                    <li>{"\uFFE5"}jpy</li>
                </ul>
            </>
        );
    }
}

export default DropdownCurrencyList;
