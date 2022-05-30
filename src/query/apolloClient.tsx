import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const GRAPHQL_URL = 'http://localhost:4000/graphql';
export const client = new ApolloClient({
    link: new HttpLink({uri: GRAPHQL_URL}),
    cache: new InMemoryCache()
});
