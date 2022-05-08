import React, {Component} from 'react';

// @ts-ignore
import imagesProducts from "../../jsonpictures/ProductPictures/ProductC.png";

interface Props {
    products: { name: string, id: string, inStock: boolean, gallery: string, category: string, attributes: object, prices: any }[]
}

class AllPageContainer extends Component<Props> {
    render() {

        let styleOpacity = {
            opacity: '50%',
        };

        let styleBackground = {
            background: '#C4C4C4',
            p: 'OUT OF STOCK'///?????????
        }

        let allProducts = this.props.products.map((item) => {
            return (
                <>
                    {/*<div className="title">{item.category}</div>*/}
                    <div className="product-card" style={!item.inStock ? styleOpacity : undefined}>
                        <div className="image">
                            <img src={imagesProducts} alt="" style={!item.inStock ? styleBackground : undefined}/>
                        </div>
                        <div className="content">
                            <div className="title">{item.name}</div>
                            <div className="price">
                                <div className="currency">{item.prices[0].currency}</div>
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
                        {allProducts}
                    </div>
                </div>
            </>
        );
    }
}

export default AllPageContainer;
