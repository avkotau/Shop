import React, { Component } from 'react';
// @ts-ignore
import imagesProducts from "../../jsonpictures/ProductPictures/ProductC.png";


interface Props {
    products: { name: string, id: string, inStock: boolean, gallery: string, category: string, attributes: object, prices: any }[]
}

class AllProductsItem extends Component<Props> {
    render() {

        let styleOpacity = {
            opacity: '50%',
        };

        let styleBackground = {
            background: '#C4C4C4',
            position: 'relative',
            zIndex: 2,
        };

        let allProducts = this.props.products.map((item) => {

            return (

                    <div className="product-card" key={item.id} style={!item.inStock ? styleOpacity : undefined}>
                        <div className="image-wrap" style={{position: 'relative'}}>
                            {/*@ts-ignore*/}
                            <img src={imagesProducts} alt="" style={!item.inStock ? styleBackground : undefined}/>

                            {!item.inStock ? <div className="text-stock">OUT OF STOCK</div> : undefined}
                        </div>
                        <div className="content">
                            <div className="title">{item.name}</div>
                            <div className="price">
                                <div className="currency">{item.prices[0].currency}</div>
                                <div className="amount">{item.prices[0].amount}</div>
                            </div>
                        </div>
                    </div>

            )
        })

        return (
            <>
                {allProducts}
            </>
        );
    }
}

export default AllProductsItem;
