import React, { Component } from 'react';
import './Cart.container.scss';
import CartList from "./CartList";

interface Props {
    product: { name: string, id: string, gallery: any, attributes: any, prices: any, brand: string },
    slides: object[]
}

class CartContainer extends Component<Props> {
    render() {

        return (
            <>
                <div className="card-container">
                    <div className="card-title">
                        <span>cart</span>
                    </div>
                    <CartList product={this.props.product} slides={this.props.slides}/>
                </div>
            </>
        );
    }
}

export default CartContainer;
