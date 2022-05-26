import React, { Component } from 'react';
import './Size.scss';


interface Props {
    product: { name: string, id: string, items: any, type: string, value: string }
}

class Size extends Component<Props> {
    state = {value: ''};
    chooseSize = (e: any) => {
        console.log(e.target)
        this.setState({value: e.target.value});
    };

    render() {
        console.log(this.state.value)

        let size = this.props.product.items.map((item: { value: any; }) => {
            return <li onClick={this.chooseSize.bind(this)} key={item.value}>{item.value}</li>
        });
        return (
            <>

                <div className="size-product">
                    <span className="size-product-title">{this.props.product.name}:</span>
                    <ul className="size-product-collection">
                        {size}
                    </ul>
                </div>

            </>
        );
    }
}

export default Size;
