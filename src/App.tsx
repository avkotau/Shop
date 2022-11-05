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
// @ts-ignore
import loader from '../src/img/1488.gif'




interface AppProps {
    data: any,
    product: any,
    // reducer: any,
    // categoryName: any,
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
        //this.setState({data})
        // mapDispatchToProps(data)
    }

    render() {
        debugger
        //const categoryName = this.props.data.reducer.data.category.name
        // this.props.data.reducer.data ? this.props.data.reducer.data.category.name : ""
        return (
            <>
                <div className="app-container">
                    {
                        //удалить одну дату in ADDPRODUCTTOCART
                        this.props.data.reducer.data
                            ? <BrowserRouter>
                                {/*<button > +1</button>*/}
                                {/*<button onClick={incm}> -1</button>*/}
                                {/*@ts-ignore data={this.props.data.reducer.data}*/}
                                {/*<RouteContainer />*/}
                                {/*@ts-ignore*/}
                                <RouteContainer />
                                {/*<RouteContainer data={this.props.data.reducer.data} currency={this.props.data.changeCurrency.currency}/>*/}
                            </BrowserRouter>
                            : <div><img src={loader} alt="gif"/></div>
                    }
                </div>
            </>
        );
    }
}


const mapStateToProps = (reducer: object, data: any, state: any) => {
debugger
    //  //@ts-ignore
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
