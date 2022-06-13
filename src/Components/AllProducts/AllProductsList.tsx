import React, { Component } from 'react';
import AllProductsItem from "./AllProductsItem";


interface Props {
    products: object
}

class AllProductsList extends Component<Props> {
    render() {
        return (
            <>
                {/*@ts-ignore*/}
                <AllProductsItem products={this.props.products}/>
            </>
        );
    }
}

export default AllProductsList;
