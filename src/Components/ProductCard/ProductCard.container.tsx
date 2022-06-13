import React, { Component } from 'react';
import Size from '../Size/Size';
import Color from '../Color/Color';
import Capacity from '../Capacity/Capacity';
import OtherAttributes from '../OtherAttributes/OtherAttributes';
import './ProductCard.container.scss';

interface Props {
    product: { name: string, id: string, inStock: boolean, gallery: any, description: any, attributes: any, prices: any, brand: string }
}

class ProductCardContainer extends Component<Props> {

    render() {

        let collectionImage = this.props.product.gallery.map((item: any) => {
            return <div className="image-small"><img src={item} alt=""/></div>
        });

        let imageMain = this.props.product.gallery[0];
        let brand = this.props.product.brand;
        let nameProduct = this.props.product.name;

        let currency = this.props.product.prices[0].currency
        let amount = this.props.product.prices[0].amount

        let createDescription = () => {
            return {__html: this.props.product.description};
        };

        let sizeShow = this.props.product.attributes.map((item: any) => {
            return (item.name === "Size" ? <Size product={item}/> : null);
        });

        let colorShow = this.props.product.attributes.map((item: any) => {
            return (item.name === "Color" ? <Color product={item}/> : null);
        });

        let capacityShow = this.props.product.attributes.map((item: any) => {
            return (item.name === "Capacity" ? <Capacity product={item}/> : null);
        });

        let otherShow = this.props.product.attributes.map((item: any) => {

            return (item.name !== "Size" && item.name !== "Color" && item.name !== "Capacity"? <OtherAttributes product={item}/> : null);
        });

        return (
            <>
                <div className="product-card-container">
                    <div className="card-images-container">
                        <div className="images-collection">
                            {collectionImage}
                        </div>
                        <div className="image-main">
                            <img src={imageMain} alt=""/>
                        </div>
                    </div>
                    <div className="description-product-container">
                        <div className="brand-product">{brand}</div>
                        <div className="name-product">{nameProduct}</div>
                        {sizeShow}
                        {colorShow}
                        {capacityShow}
                        {otherShow}
                        <div className="prise-product">
                            <div>
                                <span className="prise-product-title">PRICE:</span>
                                <ul className="currency-box">
                                    <li className="currency">{currency}</li>
                                    <li className="amount-currency">{amount}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="button-add-product">
                            <button>add to cart</button>
                        </div>
                        <div className="description-product">
                            <div dangerouslySetInnerHTML={createDescription()}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductCardContainer;
