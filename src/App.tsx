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


    console.log('Store change', store.getState())
})

class App extends Component<object, any> {
    constructor(props: any) {
        debugger
        super(props);
        debugger
        this.state = {
            // data: [],
            show: false

        }
    }

    async componentDidMount ()  {
        debugger
        const data = await loadJobs();
        this.setState({data})
        mapDispatchToProps(data)
    }

    render() {
        debugger
        return (
            <>
                {/*<Provider store={store}>*/}
                    {
                        (this.state.data)
                            ? <div className="app-container">
                                <BrowserRouter>
                                    <button onClick={inc}> +1</button>
                                    <button onClick={incm}> -1</button>
                                    <RouteContainer name={this.state.data.category.name}/>
                                </BrowserRouter>
                            </div>
                            : ""
                    }
                {/*</Provider>*/}
            </>
        );
    }
}


const mapStateToProps = (data: any, state: any) => {
    debugger
    return {
        data
    }
}


const mapDispatchToProps = (data: any) => {
    debugger
return {
    addAllProducts
}


}

// @ts-ignore
export default connect( mapStateToProps, mapDispatchToProps())(App);
// export default App;
