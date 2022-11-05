import React, { Component } from 'react';
import './AllProducts.container.scss';
import { Link } from "react-router-dom";
// @ts-ignore
import imagesProducts from '../../jsonpictures/ProductPictures/ProductC.png';
import AllProductsList from './AllProductsList';
// import data from "../../jsonpictures/data.json";
import { connect } from "react-redux";

interface AppProps {
    products: object,
    categoryName: string
}

class AllPageContainer extends Component<AppProps> {

    render() {

        return (
            <>
                <div className="product-list">
                    <div className="title-category">{this.props.categoryName}</div>
                    {/*@ts-ignore*/}
                    <Link to={"/all/item"} className="box-product-card"><AllProductsList/></Link>
                    {/*<Link to="/all/item" className="box-product-card"><AllProductsList products={this.props.products}/></Link>*/}
                </div>
            </>
        );
    }
}
const mapStateToProps = (data: any) => {

    return {
        categoryName: data.reducer.data.category.name,
        // product: data.reducer.product
    }
}
export default connect(mapStateToProps)(AllPageContainer);
