export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'
export const ALLPRODUCTS = 'ALLPRODUCTS'
export const PRODUCTCARD = 'PRODUCTCARD'
export const ADDPRODUCTTOCART = 'ADDPRODUCTTOCART'
export const CREATECOUNTPRODUCTS = 'CREATECOUNTPRODUCTS'
export const CHANGECURRENCY = 'CHANGECURRENCY'
export const CHOOSEPRODUCTATTRIBUTE = 'CHOOSEPRODUCTATTRIBUTE'

export const createCountProductsAction = (idProduct: string) => {
  return {
      idProduct: idProduct,
      type: CREATECOUNTPRODUCTS
  }
}
export const incrementAction = (idProduct: any, count:any) => {

    return {
        idProduct: idProduct,
        countProduct: count,
        type: INCREMENT
    }
}
export const decrementAction = {
    type: DECREMENT
}

export const addAllProducts = (dispatch: object) => {
    //debugger
    console.log("dispatch" + dispatch)
    return {
        type: ALLPRODUCTS,
        payload: dispatch

    }
}
export const productCard = (product: any) => {

    return {
        type: PRODUCTCARD,
        product
    }
}

export const addProductToCart = (product: any, amount: number, currency: object, size: number, idColorProduct: string) => {
debugger
    return {
        type: ADDPRODUCTTOCART,
        productToCart: product,
        prices: {amount: amount, currency: currency},
        size: size,
        idColorProduct: idColorProduct
    }
}
export const changeCurrency = (currency: any) => {
  return {
      type: CHANGECURRENCY,
      currency,
  }
}

export const chooseProductAttribute = (productAttributeColor: object) => {
debugger
  return {
      type: CHOOSEPRODUCTATTRIBUTE,
      productAttributeColor,

  }
}
