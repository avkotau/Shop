import { gql } from "@apollo/client";
// @ts-ignore
import { client } from "./apolloClient";

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

    const {data: {category}} = await client.query({query});
    // console.log(category.products)
    return category.products
}
