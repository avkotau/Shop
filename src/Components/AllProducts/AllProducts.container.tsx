import React, { Component } from 'react';
import './AllProducts.container.scss';

// @ts-ignore
import imagesProducts from "../../jsonpictures/ProductPictures/ProductC.png";
import AllProductsList from "./AllProductsList";

interface Props {
    products: object,
    category: string
}

class AllPageContainer extends Component<Props> {

    render() {
        return (
            <>
                <div className="product-list">
                    <div className="title">{this.props.category}</div>
                    <div className="box-product-card">
                        {/*@ts-ignore*/}
                        <AllProductsList products={this.props.products}/>
                    </div>
                </div>
            </>
        );
    }
}

export default AllPageContainer;
