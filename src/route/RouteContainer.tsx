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
// @ts-ignore
import Carousel from '../Components/Carousel/Carousel';
import CarouselContainer from "../Components/Carousel/CarouselContainer";

//Carousel start
// Data for carousel
// const carouselSlidesData = [
//     {
//         content:
//             "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
//         author: "Bane",
//         source: "facebook"
//     }, {
//         content:
//             "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
//         author: "Ra's Al Ghul",
//         source: "Snapchat"
//     }, {
//         content:
//             "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
//         author: "Joker",
//         source: "facebook"
//     }, {
//         content:
//             "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
//         author: "Bruce Wayne",
//         source: "facebook"
//     }, {
//         content:
//             "But it's not who you are underneath... it's what you do that defines you.",
//         author: "Rachel Dawes",
//         source: "twitter"
//     }, {
//         content:
//             "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
//         author: "John Blake",
//         source: "Google+"
//     }, {
//         content:
//             "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
//         author: "Alfred Pennyworth",
//         source: "twitter"
//     }
// ];

// const carouselContainer = document.querySelector(".carousel-container");


//Carousel end


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
                                                          category={data.category.name}/>}/>
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

export default RouteContainer;
