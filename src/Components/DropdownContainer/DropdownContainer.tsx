import React, { Component } from 'react';
// @ts-ignore
import DropDownList from './DropDownList';
// @ts-ignore
import basket from '../../img/Empty Cart.svg';
import './DropDownContainer.scss';
import DropdownCurrencyContainer from "../DropdownCurrency/DropdownCurrencyContainer";
import { connect } from "react-redux";

interface Props {
    products: object,
    count: number,
    value: number,
    currency: {symbol: string},

}

// interface HandleNameChangeInterface {
//     currentTarget: any;
//     target: HTMLInputElement;
// }

class DropdownComponent extends Component<Props> {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        }
        this.output = this.output.bind(this)
    }

    output(e: any) {

        this.setState({modal: !e});
    }

    render() {
let showCountProductInCart = this.props.count ? <div className="count-product"><span>{this.props.count}</span></div> : null
        // @ts-ignore
        const {modal} = this.state;

        return (
            //@ts-ignore
            <div className="dropdown-container" value={this.state.value}>
                <div className="basket-vector">
                    <div>{this.props.currency.symbol}</div>
                    <div className="vector">
                        <DropdownCurrencyContainer/>
                    </div>

                    {/*<div>{this.props.product === undefined ? 0 : this.props.product.length}</div>*/}
                    <div className="basket" onClick={() => this.setState({modal: !modal})}>
                        {/*<div onClick={this.showModal}>*/}
                        <img src={basket} alt="Basket"/>
                        {/*</div>*/}
                        {showCountProductInCart}
                    </div>
                </div>

                {
                    (modal)
                        //@ts-ignore
                        ? <DropDownList productCart={this.props.productCart} value={this.props.value} func={this.output}/>
                        : ''
                }
            </div>
        );
    }
}

const mapStateToProps = (data: any) => {
debugger
    return {
        count: data.reducer.count,
        productCart: data.reducer.productCart,
        value: data.reducer.value,
        currency: data.changeCurrency.currency,
    }
}

export default connect(mapStateToProps)(DropdownComponent);
