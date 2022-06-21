import { gql } from "@apollo/client";
// @ts-ignore
import { client } from "./apolloClient";
import store from "../redux/store";

export async function loadJobs() {

    const query = gql`{
                    categories {
                        name
                        products {
                          id
                          name
                          inStock
                          gallery
                          description
                          category
                        attributes {
                            id
                            name
                            type
                            items {
                                  displayValue
                                  value
                                  id
                                }
                        }
                          prices {
                            currency
                            amount
                          }
                          brand
                        }
                      }
                      
                    category {
                      name
                      products {
                        id
                        name
                        inStock
                        gallery
                        description
                        category
                        attributes {
                          id
                          name
                          type
                          items {
                            displayValue
                            value
                            id
                          }
                        }
                        prices {
                          currency
                          amount
                        }
                        brand
                      }
                    }
                    currencies
             
        }`;

    const {data} = await client.query({query});
    // console.log(data)
    debugger
    // return store.dispatch({
    //     type: "ALLPRODUCTS",
    //     data: data
    // })

    return data
}
// loadJobs()
