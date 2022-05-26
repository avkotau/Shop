import React, { Component } from 'react';

interface Props {
    product: { name: string, id: string, items: any, type: string, value: string }
}

class Capacity extends Component<Props> {

    render() {
        let capacity = this.props.product.items.map((item: any) => {
            return <li>{item.value}</li>
        });

        return (
            <>
                <div className="capacity-product">
                    <span className="capacity-product-title">{this.props.product.name}:</span>
                    <ul className="capacity-product-collection">
                        {capacity}
                    </ul>
                </div>
            </>
        );
    }
}

export default Capacity;
