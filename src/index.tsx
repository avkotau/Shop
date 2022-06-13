import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./query/apolloClient";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
{/*ts-ignore*/
}

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>

                <App/>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>
);
