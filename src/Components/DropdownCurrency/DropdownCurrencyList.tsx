import React, { Component } from 'react';
import './DropdownCurrencyList.scss';
import { connect } from "react-redux";
import { changeCurrency } from "../../redux/actions/actions";

interface AppProps {
    currency: any,
    currencies: any,
    changeCurrency: any
}

class DropdownCurrencyList extends Component<AppProps> {

    render() {
        let items = this.props.currencies.map((item: any) => (
                <li onClick={(e) => {
                    e.preventDefault();
                    this.props.changeCurrency(item)
                }}> {item.symbol} {item.label} </li>

        ))
        return (
            <>
                <ul className="dropdown-menu" style={{position: 'absolute'}}>
                    {items}
                </ul>
            </>
        );
    }
}
const mapStateToProps = (data: any) => {
    debugger
    return {
        // currency: data.changeCurrency.currency,
        currencies: data.reducer.data.currencies
    }
}
const mapDispatchToProps = () => {

    return {
        // incrementCount,
        // decrementCount,
        changeCurrency
    }

}
export default connect(mapStateToProps,mapDispatchToProps())(DropdownCurrencyList);
