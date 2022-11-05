import React, { Component } from 'react';
// @ts-ignore
import imagesProducts from "../../jsonpictures/ProductPictures/ProductC.png";
// import data from "../../jsonpictures/data.json";
import { connect } from "react-redux";
import { productCard } from "../../redux/actions/actions";
import store from "../../redux/store";


interface Props {
    products: any[]
    productCard: any,
    item: any,
    changeCurrency: any,
    currency: any
    //products: { name: string, id: string, inStock: boolean, gallery: string, category: string, attributes: object, prices: any }[]
}


class AllProductsItem extends Component<Props, any> {
    constructor(props: any) {

        super(props);

        this.state = {
            item: undefined
        }
    }

    render() {

        let styleOpacity = {
            opacity: '50%',
        };

        let styleBackground = {
            background: '#C4C4C4',
            position: 'relative',
            zIndex: 2,
        };

        let allProducts = this.props.products.map((item, i) => {
            debugger
            return (
                <div className="product-card" key={item.id} style={!item.inStock ? styleOpacity : undefined}
                     onClick={() => {
                         this.props.productCard(item)
                     }}>
                    <div className="image-wrap" style={{position: 'relative'}}>
                        {/*@ts-ignore*/}
                        <img src={item.gallery[0]} alt="" style={!item.inStock ? styleBackground : undefined}/>

                        {!item.inStock ? <div className="text-stock">OUT OF STOCK</div> : undefined}
                    </div>
                    <div className="content">
                        <div className="title">{item.name}</div>
                        <div className="price">
                            <div className="currency"> {this.props.currency.label} {this.props.currency.symbol} {/*{item.prices[0].currency.symbol}*/}</div>
                            <div className="amount">
                                {/*{this.props.currency.symbol || "\uFF04"}*/}
                                { this.props.currency.label === "JPY" ? this.props.products[i].prices[3].amount
                                    : this.props.currency.label === "GBP" ? this.props.products[i].prices[1].amount
                                        : this.props.currency.label === "AUD" ? this.props.products[i].prices[2].amount
                                            : this.props.currency.label === "RUB" ? this.props.products[i].prices[4].amount : this.props.products[i].prices[0].amount
                                }</div>

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

const mapStateToProps = (data: any) => {
    debugger
    return {
        products: data.reducer.data.category.products,
        // currency: data
        // @ts-ignore
        currency: data.changeCurrency.currency,
    }
}
const mapDispatchToProps = () => {
    return {
        productCard
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(AllProductsItem);
