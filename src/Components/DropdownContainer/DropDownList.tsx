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


}

class DropDownList extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
    }
    handleclick = () => {
        //basic javascript
        return window.location.href='all/cart'
    }


    render() {



        //
        // @ts-ignore
        // @ts-ignore
        return (
            <>
                {/*@ts-ignore*/}
                <div className="grey-background" >

                </div>
                {/*onClick={e => (e.currentTarget === e.target)}*/}
                {/*@ts-ignore*/}

                <div className="dropdown-list-container" onClick={e => this.props.func(e.currentTarget !== e.target)} >
                    <div className="dropdown-list-collection-container">
                        <div className="bag-title">my bag,</div>
                        <span>{3} items</span>
                        {/*@ts-ignore*/}
                        {/*<DropDownItem products={this.props.products} category={this.props.category}/>*/}
                        {/*@ts-ignore*/}
                        {/*<CartList product={this.props.products[4]} slides={}/>*/}
                        {/*@ts-ignore*/}
                        <DropdownDescriptionProductsContainer product={this.props.products[2]}/>
                        <div className="total-amount-container">
                            <div className="total-amount-products-title">Total</div>
                            <div className="total-amount-products">$200.00</div>
                        </div>
                        <div className="button-container">
                            {/*@ts-ignore*/}

                            {/*<button className="button-item">View bag </button>*/}
                            {/*<NavLink to="all/cart" >View bag</NavLink>*/}
                            {/*@ts-ignore*/}
                            <button className="button-item">
                                {/*@ts-ignore*/}
                            <Link to="all/cart" className="btn btn-primary">View bag</Link></button>
                            {/*@ts-ignore*/}
                            {/*<CartContainer product={data.category.products[0]} slides={data.category.products[0].gallery}/>*/}

                            {/*@ts-ignore*/}
                            <button className="button-item" onClick={this.handleclick}>CHECK OUT</button>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default DropDownList;
