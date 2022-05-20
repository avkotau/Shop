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

class RouteContainer extends Component {

    render() {

        return (
            <div>
                <Routes>
                    <Route path='/' element={<LayoutContainer products={data.category.products}/>}>
                        <Route index element={<Navigate replace to='/all'/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all'
                               element={<AllPageContainer products={data.category.products}
                                                          category={data.categories[0].name}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='tech' element={<TechPageContainer products={data.categories[1].products}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='clothes' element={<ClothesPageContainer products={data.categories[0].products}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all/item' element={<ProductCardContainer product={data.category.products[3]}/>}/>
                        {/*@ts-ignore*/}
                        <Route path='all/cart' element={<CartContainer product={data.category.products[4]}/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default RouteContainer;
