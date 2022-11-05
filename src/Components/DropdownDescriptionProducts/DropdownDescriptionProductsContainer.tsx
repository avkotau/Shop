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
     product: { name: string, id: string, gallery: any, attributes: any, prices: any, brand: string
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
let showDescriptionProducts = this.props.product.map((item: any) => {
debugger
        let brand = item.brand;
        let nameProduct = item.name;

        let label = item.prices[0].currency.label;
        let symbol = item.prices[0].currency.symbol;

        let amount = item.prices[0].amount;

        // let sizeShow = item.attributes.map((item: any) => {
        //     return (item.name === "Size" ? <Size product={item} key={item.id}/> : null);
        // });

        let sizeShow = item.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Size" ? <Size /> : null);
        });

        let colorShow = item.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Color" ? <Color product={item} key={item.id}/> : null);
        });

        let capacityShow = item.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Capacity" ? <Capacity product={item} key={item.id}/> : null);
        });

        let otherShow = item.attributes.map((item: any) => {
            return (item.name !== "Size" && item.name !== "Color" && item.name !== "Capacity" ?
                <OtherAttributes product={item} key={item.id}/> : null);
        });

        let mainImage = item.gallery[0]

        return (
            <div className="dropdown-description-product-container">
                <div className="description-product">
                    <div className="brand-product">{brand}</div>
                    <div className="name-product">{nameProduct}</div>
                    <div className="prise-product">
                        <div>
                            <ul className="currency-box">
                                <li className="currency">{label}{symbol}</li>
                                <li className="amount-currency">{amount}</li>
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
