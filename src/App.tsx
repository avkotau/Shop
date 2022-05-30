import React, { Component } from 'react';
import './App.scss';
import '../src/scss/typography.scss';
import { BrowserRouter } from 'react-router-dom';
import RouteContainer from './route/RouteContainer';
import {loadJobs} from "./query/productQuery";


class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            categories: null,
        }
    }

    async componentDidMount() {
        const categories = await loadJobs();
        this.setState({categories})
    }

    render() {
        console.log(this.state.categories)
        return (
            <div className="app-container">
                <BrowserRouter>
                    <RouteContainer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
