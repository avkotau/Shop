import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DropDownList.scss';
import DropdownDescriptionProductsContainer from "../DropdownDescriptionProducts/DropdownDescriptionProductsContainer";
import { connect } from "react-redux";



interface Props {
    products: object,
    func: any,
    productCart: any

}

class DropDownList extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
    }

    // handleclick = () => {
    //     //basic javascript
    //     return window.location.href = 'all/cart'
    // }

    render() {
debugger
        // @ts-ignore
        return (
            <>
                <div className="grey-background1" onClick={e => this.props.func(e.currentTarget === e.target)}>
                </div>
                {/*@ts-ignore*/}
                <div className="dropdown-list-container">
                    <div className="dropdown-list-collection-container">
                        <div className="bag-title">my bag,</div>
                        <span>{3} items</span>
                        {/*@ts-ignore*/}
                        <DropdownDescriptionProductsContainer product={this.props.productCart}  value={this.props.value} />
                        <div className="total-amount-container">
                            <div className="total-amount-products-title">Total</div>
                            <div className="total-amount-products">$200.00</div>
                        </div>
                        <div className="button-container">
                            {/*@ts-ignore*/}
                            <Link to="cart"><button className="button-item">
                                {/*@ts-ignore*/}
                                View bag </button></Link>
                            {/*@ts-ignore*/}
                            <button className="button-item">CHECK OUT</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

// const mapStateToProps = () => {
//     debugger
//     return {
//         //@ts-ignore
//         // productCart: data.reducer.productCart
//     }
// }

export default DropDownList;
