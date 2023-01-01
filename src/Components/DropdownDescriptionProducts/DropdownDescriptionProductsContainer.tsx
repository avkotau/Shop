import React, { Component } from 'react';
import Size from "../Size/Size";
import Color from "../Color/Color";
import Capacity from "../Capacity/Capacity";
import OtherAttributes from "../OtherAttributes/OtherAttributes";
import './DropdownDescriptionProductsContainer.scss';
// import data from "../../jsonpictures/data.json";
import { connect } from "react-redux";
import store from "../../redux/store";
import { addProductToCart, createCountProductsAction, incrementAction } from "../../redux/actions/actions";
import { bindActionCreators } from "@reduxjs/toolkit";

interface Props {
    product: {
        name: string, id: string, gallery: any, attributes: any, prices: any, brand: string
        map(param: (item: any) => void): any;
    },
    // product: any
    productCart: any,
    value: number,
    incrementAction: any
    countProduct: number

}

// const inc = (item: any) => {
//
// debugger
//     store.dispatch({
//         item: item,
//         type: 'INCREMENT'
//
//     })
// }
const incm = () => {


    store.dispatch({
        type: 'DECREMENT'
    })
}

// store.subscribe(() => {
//
//
//     console.log('Store change', store.getState())
// })

class DropdownDescriptionProductsContainer extends Component<Props> {


    render() {
        debugger
        // console.log(this.props)
        // @ts-ignore
        // let amount = this.props.currency.label === "JPY" ? this.props.product[i].prices[3].amount
        //     // @ts-ignore
        //     : this.props.currency.label === "GBP" ? this.props.product[i].prices[1].amount
        //         // @ts-ignore
        //         : this.props.currency.label === "AUD" ? this.props.product[i].prices[2].amount
        //             // @ts-ignore
        //             : this.props.currency.label === "RUB" ? this.props.product[i].prices[4].amount : this.props.product[i].prices[0].amount

        // @ts-ignore
        let showDescriptionProducts = this.props.product.map((item: any, i) => {
                // @ts-ignore
                // let amount = this.props.currency.label === "JPY" ? this.props.product2.prices[3].amount
                //     // @ts-ignore
                //     : this.props.currency.label === "GBP" ? this.props.product2.prices[1].amount
                //         // @ts-ignore
                //         : this.props.currency.label === "AUD" ? this.props.product2.prices[2].amount
                //             // @ts-ignore
                //             : this.props.currency.label === "RUB" ? this.props.product2.prices[4].amount : this.props.product2.prices[0].amount
// @ts-ignore


                // let amount = this.props.currency.label === "JPY" ? this.props.products[i].prices[3].amount
                //     // @ts-ignore
                let amount = this.props.currency.label === "JPY" ? this.props.product[i].productToCart.prices[3].amount
                    // @ts-ignore
                    : this.props.currency.label === "GBP" ? this.props.product[i].productToCart.prices[1].amount
                        // @ts-ignore
                        : this.props.currency.label === "AUD" ? this.props.product[i].productToCart.prices[2].amount
                            // @ts-ignore
                            : this.props.currency.label === "RUB" ? this.props.product[i].productToCart.prices[4].amount : this.props.product[i].productToCart.prices[0].amount

                let brand = item.productToCart.brand;
                let nameProduct = item.productToCart.name;
                // let label = this.props.currency.label
                // let label = item.prices.currency.label;
                //
                // let symbol = item.prices.currency.symbol;

                //let amount = item.prices.amount;


                // let sizeShow = item.attributes.map((item: any) => {
                //     return (item.name === "Size" ? <Size product={item} key={item.id}/> : null);
                // });

                let sizeShow = item.productToCart.attributes.map((item: any) => {
                    // @ts-ignore
                    return (item.name === "Size" ? <Size/> : null);
                });

                let colorShow = item.productToCart.attributes.map((item: any) => {
                    // @ts-ignore
                    return (item.name === "Color" ? <Color product={item} key={item.id}/> : null);
                });

                let capacityShow = item.productToCart.attributes.map((item: any) => {
                    // @ts-ignore
                    return (item.name === "Capacity" ? <Capacity product={item} key={item.id}/> : null);
                });

                let otherShow = item.productToCart.attributes.map((item: any) => {
                    return (item.name !== "Size" && item.name !== "Color" && item.name !== "Capacity" ?
                        <OtherAttributes product={item} key={item.id}/> : null);
                });

                let mainImage = item.productToCart.gallery[0]

                return (
                    <div className="dropdown-description-product-container">
                        <div className="description-product">
                            <div className="brand-product">{brand}</div>
                            <div className="name-product">{nameProduct}</div>
                            <div className="prise-product">
                                <div>
                                    <ul className="currency-box">
                                        {/*<li className="currency">{label}{symbol}</li>*/}
                                        {/*@ts-ignore*/}
                                        <li className="currency">{this.props.currency.label}{this.props.currency.symbol}</li>
                                        <li className="amount-currency">{
                                            // this.props.currency.label === "JPY" ? this.props.products[i].productToCart.prices[3].amount
                                            // // @ts-ignore
                                            // : this.props.currency.label === "GBP" ? this.props.products[i].productToCart.prices[1].amount
                                            // // @ts-ignore
                                            // : this.props.currency.label === "AUD" ? this.props.products[i].productToCart.prices[2].amount
                                            // // @ts-ignore
                                            // : this.props.currency.label === "RUB" ? this.props.products[i].productToCart.prices[4].amount : this.props.products[i].productToCart.prices[0].amount


                                            // this.props.currency.label === "JPY" ? this.props.product[i].productToCart.prices[3].amount
                                            //     // @ts-ignore
                                            //     : this.props.currency.label === "GBP" ? this.props.product[i].productToCart.prices[1].amount
                                            //         // @ts-ignore
                                            //         : this.props.currency.label === "AUD" ? this.props.product[i].productToCart.prices[2].amount
                                            //             // @ts-ignore
                                            //             : this.props.currency.label === "RUB" ? this.props.product[i].productToCart.prices[4].amount : this.props.product[i].productToCart.prices[0].amount
                                            amount
                                        }</li>
                                    </ul>
                                </div>
                            </div>
                            {sizeShow}
                            {colorShow}
                            {capacityShow}
                            {otherShow}
                        </div>
                        <div className="cart-count-container">
                            <button className="cart-button" onClick={() => {


                                // store.dispatch({
                                //     type: 'INCREMENT',
                                //     idProductInCartOverlay: item.id
                                // })


                                this.props.incrementAction(item.id, +Object.values(this.props.countProduct))
                            }}>&#43;</button>
                            <span className="count-result">{+Object.values(this.props.countProduct)}</span>
                            <button className="cart-button" onClick={incm}>&#65498;</button>
                        </div>
                        <div className="drop-image-container">
                            <div className="drop-image-main">
                                <img src={mainImage} alt=""/>
                            </div>
                        </div>
                    </div>
                )

            }

        )

        return (
            <>

                {showDescriptionProducts}
            </>
        );
    }
}

const mapStateToProps = (data: any) => {
    debugger
    return {
        //products: data.reducer.data.category.products,
        //products: data.reducer.productCart,
        products: data.reducer.data.category.products,
        currency: data.changeCurrency.currency,
        idProduct: data.reducer,
        countProduct: data.reducer.countIdProductsInCartOverlay[0],

    }

}
const mapDispatchToProps = () => {

    // @ts-ignore
    return {
        // addProductToCart
        // @ts-ignore
        incrementAction

    }
}


export default connect(mapStateToProps, mapDispatchToProps())(DropdownDescriptionProductsContainer);
