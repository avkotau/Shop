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
                            currency {
                               label
                               symbol
                          }
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
                          currency {
                            label
                            symbol
                          }
                          amount
                        }
                        brand
                      }
                    }
                    currencies {
                      label
                      symbol
                    }
             
        }`;

    const {data} = await client.query({query});
    // console.log(data)

    // return store.dispatch({
    //     type: "ALLPRODUCTS",
    //     data: data
    // })

    return data
}
// loadJobs()
