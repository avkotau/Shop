import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import './DropDownList.scss';
import DropDownItem from "./DropDownItem";
import CartList from "../Cart/CartList";
import data from "../../jsonpictures/data.json";
import DropdownDescriptionProductsContainer from "../DropdownDescriptionProducts/DropdownDescriptionProductsContainer";
import AllProductsList from "../AllProducts/AllProductsList";
import CartContainer from "../Cart/Cart.container";


interface Props {
    products: object,
    func: any

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

        // @ts-ignore
        return (
            <>
                <div className="grey-background" onClick={e => this.props.func(e.currentTarget === e.target)}>
                    {/*@ts-ignore*/}
                    <div className="dropdown-list-container">
                        <div className="dropdown-list-collection-container">
                            <div className="bag-title">my bag,</div>
                            <span>{3} items</span>
                            {/*@ts-ignore*/}
                            <DropdownDescriptionProductsContainer product={this.props.products[2]}/>
                            <div className="total-amount-container">
                                <div className="total-amount-products-title">Total</div>
                                <div className="total-amount-products">$200.00</div>
                            </div>
                            <div className="button-container">
                                {/*@ts-ignore*/}
                                <button className="button-item">
                                    {/*@ts-ignore*/}
                                    <Link to="all/cart" className="btn btn-primary">View bag</Link></button>
                                {/*@ts-ignore*/}
                                <button className="button-item">CHECK OUT</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default DropDownList;
