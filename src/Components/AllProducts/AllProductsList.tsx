import React, { Component } from 'react';
// @ts-ignore
import imagesProducts from "../../jsonpictures/ProductPictures/ProductC.png";
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
