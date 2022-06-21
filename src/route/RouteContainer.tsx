import React, { Component } from 'react';
import './RouteContainer.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllPageContainer from '../Components/AllProducts/AllProducts.container';
import TechPageContainer from '../Components/TechPages/TechPage.container';
import ClothesPageContainer from '../Components/ClothesPages/ClothesPage.container';
import data from '../jsonpictures/data.json';
import LayoutContainer from '../Components/Layout/Layout.container';
import ProductCardContainer from "../Components/ProductCard/ProductCard.container";
import CartContainer from '../Components/Cart/Cart.container';
import { connect } from "react-redux";

interface AppProps {
     data: any
}

class RouteContainer extends Component<AppProps> {
    constructor(props: any) {

        super(props);

        this.state = {

        }
    }

    render() {
        debugger
//         const data = this.props
 console.log(this.props.data.reducer.data.category.name)
        return (
            <div>
                {this.props.data.reducer.data.category.name}
                <Routes>
                    <Route path='/' element={<LayoutContainer products={data.category.products}/>}>
                        <Route index element={<Navigate replace to='/all'/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all'
                               element={<AllPageContainer products={data.category.products}
                                                          category={data.category.name}/>}/>
                        {/*<Route path='all'*/}
                        {/*       element={<AllPageContainer products={data.category.products}*/}
                        {/*                                  category={data.category.name}/>}/>*/}
                        {/*@ts-ignore*/}
                        <Route path='tech' element={<TechPageContainer products={data.categories[1].products}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='clothes' element={<ClothesPageContainer products={data.categories[0].products}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all/item' element={<ProductCardContainer product={data.category.products[0]}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all/cart' element={<CartContainer product={data.category.products[0]} slides={data.category.products[0].gallery}/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }
}


const mapStateToProps = (reducer: object) => {
console.log(reducer)
    return {
        data: reducer
    }
}

export default connect(mapStateToProps)(RouteContainer);
