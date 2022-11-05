import React, { Component } from 'react';
import Size from '../Size/Size';
import Color from '../Color/Color';
import Capacity from '../Capacity/Capacity';
import OtherAttributes from '../OtherAttributes/OtherAttributes';
import './CartItem.scss';
import CarouselContainer from '../Carousel/CarouselContainer';

interface Props {
    product: { name: string, id: string, gallery: any, attributes: any, prices: any, brand: string },
    slides: object[]

}


class CartItem extends Component<Props> {

    render() {

        let brand = this.props.product.brand;
        let nameProduct = this.props.product.name;

        let label = this.props.product.prices[0].currency.label;
        let symbol = this.props.product.prices[0].currency.symbol;
debugger
        let amount = this.props.product.prices[0].amount;

        // let sizeShow = this.props.product.attributes.map((item: any) => {
        //     return (item.name === "Size" ? <Size product={item} key={this.props.product.id}/> : null);
        // });
        let sizeShow = this.props.product.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Size" ? <Size /> : null);
        });

        let colorShow = this.props.product.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Color" ? <Color product={item} key={this.props.product.id}/> : null);
        });

        let capacityShow = this.props.product.attributes.map((item: any) => {
            // @ts-ignore
            return (item.name === "Capacity" ? <Capacity product={item} key={this.props.product.id}/> : null);
        });

        let otherShow = this.props.product.attributes.map((item: any) => {
            return (item.name !== "Size" && item.name !== "Color" && item.name !== "Capacity" ?
                <OtherAttributes product={item} key={this.props.product.id}/> : null);
        });

        let collectionImage = this.props.product.gallery.map((item: any) => {
            return <div className="image-small"><img src={item} alt=""/></div>
        });

        return (
            <>
                <div className="description-product-container">
                    <div className="description-product">
                        <div className="brand-product">{brand}</div>
                        <div className="name-product">{nameProduct}</div>
                        <div className="prise-product">
                            <div>
                                <ul className="currency-box">
                                    <li className="currency">{label}{symbol}</li>
                                    <li className="amount-currency">{amount}</li>
                                </ul>
                            </div>
                        </div>
                        {sizeShow}
                        {colorShow}
                        {capacityShow}
                        {otherShow}
                    </div>
                    <div className="cart-count-container">
                        <button className="cart-button">&#43;</button>
                        <span className="count-result">2</span>
                        <button className="cart-button">&#65498;</button>
                    </div>
                    <div className="card-images-container">
                        <div className="images-collection">
                            <CarouselContainer slides={this.props.slides}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CartItem;
