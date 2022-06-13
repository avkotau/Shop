import React, { Component } from 'react';
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
