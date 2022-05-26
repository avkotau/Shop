import React, { Component } from 'react';
import './Color.scss';

interface Props {
    product: { name: string, id: string, items: any, type: string, value: string }
}

class Color extends Component<Props> {
    render() {
        let color = this.props.product.items.map((item: { value: any; } ) => {
            return <li style={{background: item.value}}/>
        });

        return (
            <>
                <div className="color-product">
                    <span className="color-product-title">{this.props.product.name}:</span>
                    <ul className="color-product-collection">
                        {/*@ts-ignore*/}
                        {color}
                    </ul>
                </div>
            </>
        );
    }
}

export default Color;
