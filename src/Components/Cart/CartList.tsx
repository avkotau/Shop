import React, { Component } from 'react';
import CartItem from './CartItem';
interface Props {
    product: { name: string, id: string, gallery: any, attributes: any, prices: any, brand: string },
    slides: object[]
}


class CartList extends Component<Props> {
    render() {

        return (
            <>
                <CartItem product={this.props.product} slides={this.props.slides}/>
            </>
        );
    }
}

export default CartList;
