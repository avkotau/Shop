import React, { Component } from 'react';
import "./ProductCard.container.scss";
// @ts-ignore
import collectionImage1 from "../../jsonpictures/ProductPictures/ProductD.png"

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
        let sizeTitle = this.props.product.attributes[0].name;
        let size = this.props.product.attributes[0].items.map((item: any) => {
            return <li>{item.value}</li>
        });
        let color = this.props.product.attributes[0].items.map((item: any) => {
            return <li>{item.value}</li>

        });

         // let capacity = this.props.product.attributes[1].items.map((item: any) => {
         //     return <li>{item.value}</li>
         // });

         let currency = this.props.product.prices[0].currency
         let amount = this.props.product.prices[0].amount

        let description = this.props.product.description;
        let createDescription = () => {
            return {__html:  this.props.product.description};
        };

        let resultAttributes = this.props.product.attributes[0].name === "Size" ? {size} : {color}
 console.log(this.props.product.attributes[0].name)

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
                        <div className="size-product">
                            <span className="size-product-title">{sizeTitle}:</span>
                            <ul className="size-product-collection">
                                {size}
                            </ul>
                        </div>
                        <div className="color-product">
                            <span className="color-product-title">color:</span>
                            <ul className="color-product-collection">
                                {/*{color}*/}
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <div className="capacity-product">
                            <div className="capacity-product-title">
                                <ul>
                                    {/*{capacity}*/}
                                </ul>
                            </div>
                        </div>

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

                            {/*<p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic*/}
                            {/*    cocktail dresses and party dresses from all your favorite brands.</p>*/}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductCardContainer;
