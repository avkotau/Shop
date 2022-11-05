import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./query/apolloClient";
import redusers from "./redux/redusers";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
{/*ts-ignore*/
}

root.render(
    <React.StrictMode>

        <ApolloProvider client={client}>
            <Provider store={store}>


                <App/>

            </Provider>
        </ApolloProvider>

    </React.StrictMode>
);
