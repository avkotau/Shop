import React, { Component } from 'react';
import CartItem from './CartItem';
interface Props {
    product: { name: string, id: string, gallery: any, attributes: any, prices: any, brand: string },
    slides: object[]
}


class CartList extends Component<Props> {
    render() {
let productAmount = Object.keys(this.props.product).length;
        // @ts-ignore
        return (
            <>
                <CartItem product={this.props.product} slides={this.props.slides}/>
                <div className="">
                    <div className="tax">
                        <span className="title">Tax 21%:</span>
                        <span className="sum">42.00</span>
                    </div>
                    <div className="quantity">
                        <span className="title">Quantity:</span>
                        <span className="amount">{productAmount}</span>
                    </div>
                    <div className="total">
                        <span className="title">Total</span>
                        <span className="sum">2000</span>
                    </div>
                </div>
            </>
        );
    }
}

export default CartList;
