import React, { Component } from 'react';
import './MainContainer.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllPageContainer from '../AllPages/AllPage.container';
import TechPageContainer from '../TechPages/TechPage.container';
import ClothesPageContainer from '../ClothesPages/ClothesPage.container';
import data from '../../jsonpictures/data.json';

class MainContainer extends Component {

    render() {

        return (
            <div className="main-container-routes">
                <Routes>
                    {/*@ts-ignore*/}
                    <Route path='/all' element={<AllPageContainer products={data.category.products}/>}/>
                    {/*@ts-ignore*/}
                    <Route path='/tech' element={<TechPageContainer  products={data.categories[1].products}/>}/>
                    {/*@ts-ignore*/}
                    <Route path='/clothes' element={<ClothesPageContainer products={data.categories[0].products}
                                                                          />}/>  {/*id={ data.categories[0].products[0].id}
                                                                          productName={ data.categories[0].products[0].name}*/}
                    <Route path='/' element={<Navigate replace to='/all'/>}/>
                </Routes>
            </div>
        );
    }
}

export default MainContainer;
