import {
    INCREMENT,
    DECREMENT,
    ALLPRODUCTS,
    PRODUCTCARD,
    ADDPRODUCTTOCART,
    CREATECOUNTPRODUCTS,
    CHANGECURRENCY,
    CHOOSEPRODUCTATTRIBUTE
} from '../actions/actions';


export default function counterReducer(state = {
                                           value: 0,
                                           id: 0,
                                           count: 0,
                                           productCart: [],
                                           countIdProductsInCartOverlay: [],
                                           oneProduct: [],

                                       },
                                       action: {
                                           product: any;
                                           type: string; data: object; productToCart: any[], count: any[], id: any, countIdProductsInCartOverlay: string, idProduct: string,
                                           countProduct: any, prices: object, size: number, idColorProduct: string, attributes: object


                                       }) {

    switch (action.type) {
        case CREATECOUNTPRODUCTS:
            let duplicationProduct = state.countIdProductsInCartOverlay.filter(x => (Object.keys(x) + "") === action.idProduct)
            if (!duplicationProduct[0]) {
                return {
                    ...state,
                    countIdProductsInCartOverlay: [...state.countIdProductsInCartOverlay, {[action.idProduct]: state.value + 1}],

                }
                // }
            }
            return state
        case INCREMENT:

            let duplication = state.countIdProductsInCartOverlay.filter(x => +((Object.keys(x) + "") === action.idProduct))

            let countProduct = action.countProduct


            if (duplication) {

                return {
                    ...state,

                    countIdProductsInCartOverlay: [...state.countIdProductsInCartOverlay, {[action.idProduct]: duplication[0][action.idProduct] + 1}]


                }

            }
            return state
        case DECREMENT:
            if (state.value > 0) {
                return {
                    ...state,
                    value: state.value - 1
                }
            }
            return {...state}

        case ALLPRODUCTS:
            return {
                ...state,
                data: action.data,
            }
        case PRODUCTCARD:
            return {
                ...state,
                product: action.product
            }
        case ADDPRODUCTTOCART:
            debugger
            // @ts-ignore
            let existingProduct = state.productCart.find(x => x.productToCart.id === action.productToCart.id)
            // @ts-ignore
            let existingPricesProduct = state.productCart.find(x => x.prices.amount === action.prices.amount)
            // @ts-ignore
            let existingIdColorProduct = state.productCart.find(x => x.idColorProduct === action.idColorProduct)
            // @ts-ignore
            let existingIdColorProduct2 = state.productCart.find(x => x.idColorProduct === action.idColorProduct && x.size === action.size)
            // @ts-ignore
            let existingSizeProduct = state.productCart.find(x => x.size === action.size && x.productToCart.id === action.productToCart.id)
            // @ts-ignore
            let existingSizeProduct2 = action.productToCart.attributes.find(x => x.id === "Color" || x.id === "Other" || x.id === "Capacity")
            if (action.size && action.idColorProduct || !existingSizeProduct2) {


                if (!existingProduct || !existingSizeProduct || !existingIdColorProduct || !existingPricesProduct || !existingIdColorProduct2) {
// let prices = action.prices

                    debugger
                    return {
                        ...state,

                        productCart: [...state.productCart, action],
                        count: state.count + 1
                    }
                }
            }

            return state
        default:

            return state
    }

}

export const changeCurrency = (state = {currency: {label: "USD", symbol: "\uFF04"}}, action: any) => {
    switch (action.type) {

        case CHANGECURRENCY:

            debugger;

            return {
                ...state,
                currency: action.currency,

            }
    }
    return state
}
export const chooseProductAttribute = (state = {sizeProduct: []}, action: any) => {
    switch (action.type) {
        case CHOOSEPRODUCTATTRIBUTE:

            // @ts-ignore
            let existingProductAttribute = state.sizeProduct.filter((x) => x.id === action.productAttributeColor.id)
            debugger
            if (state.sizeProduct.length === 0) {
                return {
                    ...state,
                    sizeProduct: [...state.sizeProduct, action.productAttributeColor]
                }
            } else if (existingProductAttribute) {
                debugger
                // @ts-ignore
                let deleteProductAttribute = state.sizeProduct.filter((x) => x.id !== action.productAttributeColor.id)
                return {

                    sizeProduct: [...deleteProductAttribute]
                }
            }
    }
    return state
}
