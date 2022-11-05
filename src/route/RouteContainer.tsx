import React, { Component } from 'react';
import './RouteContainer.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllPageContainer from '../Components/AllProducts/AllProducts.container';
import TechPageContainer from '../Components/TechPages/TechPage.container';
import ClothesPageContainer from '../Components/ClothesPages/ClothesPage.container';
// import data from '../jsonpictures/data.json';
import LayoutContainer from '../Components/Layout/Layout.container';
import ProductCardContainer from "../Components/ProductCard/ProductCard.container";
import CartContainer from '../Components/Cart/Cart.container';
import { connect } from "react-redux";

interface AppProps {
    data: any,


}

class RouteContainer extends Component<AppProps, any> {
    constructor(props: any) {

        super(props);

        this.state = {

        }
    }

    render() {

//         const data = this.props
//  console.log(this.props.data.reducer.data.category.name)
//   console.log(this.props.data.reducer.product)

        //let product = this.props.data.reducer.product
        // let categoryName = this.props.data.reducer.data.category.name
        return (
            <div>
                {/*{categoryName}*/}
                <Routes>
                    <Route path='/' element={<LayoutContainer products={this.props.data.category.products}/>}>
                        <Route index element={<Navigate replace to='/all'/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all' element={<AllPageContainer products={this.props.data.category.products}
                               />}/>
                        {/*<Route path='all' element={<AllPageContainer />}/>*/}

                        {/*@ts-ignore*/}
                        <Route path='tech' element={<TechPageContainer products={this.props.data.categories[1].products}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='clothes' element={<ClothesPageContainer products={this.props.data.categories[0].products}/>}/>
                        {/*@ts-ignore*/}
                    {/*@ts-ignore*/}
                            <Route path="all/:id" element={<ProductCardContainer />}/>

                        {/*@ts-ignore*/}

                        {/*{`${this.props.product.id}`}*/}
                        {/*@ts-ignore*/}
                        <Route path='cart' element={<CartContainer product={this.props.data.category.products[0]} slides={this.props.data.category.products[0].gallery}/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }
}


const mapStateToProps = ( data: any) => {
debugger
    return {
        data: data.reducer.data,
        // currency: this.props.data.changeCurrency.currency
        currency: data.changeCurrency.currency
    }
}

export default connect(mapStateToProps)(RouteContainer);
