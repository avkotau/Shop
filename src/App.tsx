import React, { Component, PureComponent } from 'react';
import './App.scss';
import '../src/scss/typography.scss';
import { BrowserRouter } from 'react-router-dom';
import RouteContainer from './route/RouteContainer';
import { loadJobs } from "./query/productQuery";
import store from "./redux/store";
import { connect } from "react-redux";
import { addAllProducts } from "./redux/actions/actions";
import { ApolloProvider } from "@apollo/client"
import { Provider } from "react-redux";
import redusers from "./redux/redusers";

const inc = () => {


    store.dispatch({
        type: 'INCREMENT'

    })
}
const incm = () => {


    store.dispatch({
        type: 'DECREMENT'
    })
}

store.subscribe(() => {


    // console.log('Store change', store.getState())
})

interface AppProps {
    data: any,
    reducer: any,
    categoryName: any
}

class App extends Component<AppProps, any> {
    constructor(props: any) {

        super(props);

        this.state = {

            show: false

        }

    }

    componentDidMount() {
        loadJobs().then((res => {
            return store.dispatch({
                type: "ALLPRODUCTS",
                data: res
            })
        }));
        console.log("hello")
        //this.setState({data})
        // mapDispatchToProps(data)
    }

    render() {
        debugger
        const categoryName = this.props.data.reducer.data ? this.props.data.reducer.data.category.name : ""
        // console.log(data)
        return (
            <>
                {
                    this.props.data && categoryName &&
                    <div className="app-container">
                        <BrowserRouter>
                            <button onClick={inc}> +1</button>
                            <button onClick={incm}> -1</button>
                            {/*{categoryName}*/}
                            <RouteContainer/>
                        </BrowserRouter>
                    </div>

                }
            </>
        );
    }
}


const mapStateToProps = (reducer: object, data: any, state: any) => {
    debugger
    return {
        data: reducer
    }
}
//
//
// const mapDispatchToProps = (data: any) => {
//     // debugger
//     return {
//         addAllProducts
//     }
// }

// @ts-ignore
export default connect(mapStateToProps)(App);
