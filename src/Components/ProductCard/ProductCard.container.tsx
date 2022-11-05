import React, { Component } from 'react';
import Size from '../Size/Size';
import Color from '../Color/Color';
import Capacity from '../Capacity/Capacity';
import OtherAttributes from '../OtherAttributes/OtherAttributes';
import './ProductCard.container.scss';
import { connect } from "react-redux";
import { addProductToCart, createCountProductsAction, incrementAction } from "../../redux/actions/actions"
import { bindActionCreators } from '@reduxjs/toolkit';
import store from "../../redux/store";

interface Props {
    product: { name: string, id: string, inStock: boolean, gallery: any, description: any, attributes: any, prices: any, brand: string },
    addProductToCart: any, createCountProductsAction: any, currency: {label: string, symbol: string}
    sizeProduct: any,
}
interface State {
    size: any
}
// store.subscribe(() => {
//
//
//     console.log('Store change', store.getState())
// })
let arr: any[] = []

class ProductCardContainer extends Component<Props, State> {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            size: ''

        }

    }


    getSelectSizeCallback = (e: any) =>  {
        debugger
        // let index = arr.filter(a => {
        //     return e.target.className === "backgroundBlack" && a.className === "backgroundBlack"
        // })
        //if (index.length > 0 && arr.length <= 3 ) { //|| arr.length === 1
            // e.target.className = "backgroundWhite"
            // arr.splice(0, 1 )
            // index.splice(0, 1)
        //     return
        // }
        if (arr.length <= 1) {

            arr.filter(a => {
                if (a.className === "backgroundBlack") {
                    a.className = "backgroundWhite"
                }
            })
            arr.splice(0, 1 )
            arr.push(e.target)
            e.target.className = "backgroundBlack"
        }

        this.setState({
            size: e.target.textContent
        })
        // console.log(e)

        let size =  e.target.textContent
        //if(size.length === 0) e.target.className = "backgroundWhite"

        // var arr = ["Привет", "тебе", "Миша"];
        // arr.splice(1, "Привет"); // начиная с позиции 1, удалить 1 элемент
        // alert( arr ); //  осталось ["Привет", "Миша"]

        debugger

        // if (this.state.size === e.target.textContent) {
        //
        //     if (e.target.textContent) {
        //         if (e.target.className === "backgroundBlack") {
        //             e.target.className = "backgroundWhite"
        //         } else {
        //
        //             e.target.className = "backgroundBlack"
        //         }
        //     } else {
        //         return
        //     }
        // }

}
    render() {

debugger
        let collectionImage = this.props.product.gallery.map((item: any) => {
            return <div className="image-small"><img src={item} alt=""/></div>
        });

        let imageMain = this.props.product.gallery[0];
        let brand = this.props.product.brand;
        let nameProduct = this.props.product.name;

        let label = this.props.currency.label
        let symbol = this.props.currency.symbol

        let amount = this.props.currency.label === "JPY" ? this.props.product.prices[3].amount
                    : this.props.currency.label === "GBP" ? this.props.product.prices[1].amount
                        : this.props.currency.label === "AUD" ? this.props.product.prices[2].amount
                            : this.props.currency.label === "RUB" ? this.props.product.prices[4].amount : this.props.product.prices[0].amount

        let createDescription = () => {
            return {__html: this.props.product.description};
        };

        // let sizeShow = this.props.product.attributes.map((item: any) => {
        //     return (item.name === "Size" ? <Size product={item}/> : null);
        // }

        let sizeShow = this.props.product.attributes.map((item: any) => {
            //sizes={item} selectSizeCallback
            // @ts-ignore
            return (item.name === "Size" ? <Size selectSizeCallback={(e) =>this.getSelectSizeCallback(e)} size={this.state.size}/> : null);
        });

        // let colorShow = this.props.product.attributes.map((item: any) => {
        //     return (item.name === "Color" ? <Color product={item}/> : null);
        // });
        let colorShow = this.props.product.attributes.map((item: any) => {
            return (item.name === "Color" ? <Color selectSizeCallback={(e: any) => this.getSelectSizeCallback(e)}
                                                   size={this.state.size} textContent={undefined}/> : null);
        });

        // let capacityShow = this.props.product.attributes.map((item: any) => {
        //     return (item.name === "Capacity" ? <Capacity product={item}/> : null);
        // });
        let capacityShow = this.props.product.attributes.map((item: any) => {
            return (item.name === "Capacity" ? <Capacity selectSizeCallback={(e: any) => this.getSelectSizeCallback(e)}
                                                         size={this.state.size} textContent={undefined}/> : null);
        });

        let otherShow = this.props.product.attributes.map((item: any) => {

            return (item.name !== "Size" && item.name !== "Color" && item.name !== "Capacity"? <OtherAttributes product={item}/> : null);
        });

        return (
            <>
                <div className="product-card-container">
                    <div className="card-images-container">
                        <div className="images-collection">
                            {collectionImage}
                        </div>
                        <div className="image-main">
                            <img src={imageMain} alt=""/>
                        </div>
                    </div>
                    <div className="description-product-container">
                        <div className="brand-product">{brand}</div>
                        <div className="name-product">{nameProduct}</div>
                        {sizeShow}
                        {colorShow}
                        {capacityShow}
                        {otherShow}
                        <div className="prise-product">
                            <div>
                                <span className="prise-product-title">PRICE:</span>
                                <ul className="currency-box">
                                    <li className="currency">{label}{symbol}</li>
                                    <li className="amount-currency">{amount}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="button-add-product">
                            <button onClick={(e) => {
debugger
                                // e.preventDefault();
                                //this.props.addProductToCard(product, {[product.id]: count})
                                this.props.addProductToCart(this.props.product, amount, this.props.currency, this.state.size)
                                // this.props.createCountProductsAction(this.props.product.id)
                                // @ts-ignore
                                this.props.createCountProductsAction(this.state.size)

                                }}>add to cart {this.state.size}</button>
                        </div>
                        <div className="description-product">
                            <div dangerouslySetInnerHTML={createDescription()}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (data: any) => {
debugger
  return {
      product: data.reducer.product,
      currency: data.changeCurrency.currency,
      sizeProduct: data.chooseProductAttribute.sizeProduct
  }
}

const mapDispatchToProps = (dispatch: any) => {
  // @ts-ignore
    return {
      // addProductToCart
        // @ts-ignore
      // addProductToCart: () => dispatch(addProductToCart(idProduct))
        dispatch,
        ...bindActionCreators({ addProductToCart, createCountProductsAction }, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCardContainer);
