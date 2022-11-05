import React, { Component } from 'react';
import './ClothesPage.container.scss';
// @ts-ignore
import imagesProducts from '../../jsonpictures/ProductPictures/ProductA.png';

interface Props {
    products: { name: string, id: string, inStock: boolean, gallery: string, category: string, attributes: object, prices: any }[]
}

class ClothesPageContainer extends Component<Props> {

    render() {
        let clothesProducts = this.props.products.map((item) => {
            return (
                <>
                    {/*<div className="title">{item.category}</div>*/}
                    <div className="product-card">
                        <div className="image">
                            <img src={imagesProducts} alt=""/>
                        </div>
                        <div className="content">
                            <div className="title">{item.name}</div>
                            <div className="price">
                                <div className="currency">{item.prices[0].currency.label}{item.prices[0].currency.symbol}</div>
                                <div className="amount">{item.prices[0].amount}</div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
        return (
            <>
                <div className="product-list">
                    <div className="box-product-card">
                        {clothesProducts}
                    </div>
                </div>
            </>
        );
    }
}

export default ClothesPageContainer;
