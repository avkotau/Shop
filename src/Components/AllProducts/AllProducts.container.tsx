import React, { Component } from 'react';
import './AllProducts.container.scss';
import { Link } from "react-router-dom";
// @ts-ignore
import imagesProducts from '../../jsonpictures/ProductPictures/ProductC.png';
import AllProductsList from './AllProductsList';

interface Props {
    products: object,
    category: string
}

class AllPageContainer extends Component<Props> {

    render() {
        return (
            <>
                <div className="product-list">
                    <div className="title-category">{this.props.category}</div>
                    {/*@ts-ignore*/}
                    <Link to="/all/item" className="box-product-card"><AllProductsList products={this.props.products}/></Link>
                </div>
            </>
        );
    }
}

export default AllPageContainer;
