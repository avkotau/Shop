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
        //let currencySign = this.props.currency.currencySign;
        let items = this.props.currencies.map((item: any) => (
            // <ul onClick={(e) => {
            //     e.preventDefault();
            //     this.props.changeCurrency(item)
            // }} >
                <li onClick={(e) => {
                    e.preventDefault();
                    this.props.changeCurrency(item)
                }}> {item.symbol} {item.label} </li>
            // </ul>

        ))
        return (
            <>
                <ul className="dropdown-menu" style={{position: 'absolute'}}>
                    {/*{currencySign}*/}
                    {items}
                    {/*<li>{"\uFF04"}usd</li>*/}
                    {/*<li>{"\u20AC"} euro</li>*/}
                    {/*<li>{"\uFFE5"}jpy</li>*/}
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
