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
import { log } from "util";


export default function counterReducer(state = {
                                           value: 0,
                                           id: 0,
                                           count: 0,
                                           productCart: [],
                                           countIdProductsInCartOverlay: [],
                                           oneProduct: [],
                                           // sizeProduct:[],

                                           // currency: {symbol: "\uFF04"}
                                       },
                                       action: {
                                           product: any;
                                           type: string; data: object; productToCart: any[], count: any[], id: any, countIdProductsInCartOverlay: string, idProduct: string,
                                           countProduct: any, prices: object, size: number, idColorProduct: string,


                                       }) {
    // console.log(state)
    let findProductIndex;
    let idProduct;

    // @ts-ignore
    // @ts-ignore
    switch (action.type) {
        case CREATECOUNTPRODUCTS:
            let duplicationProduct = state.countIdProductsInCartOverlay.filter(x => (Object.keys(x) + "") === action.idProduct)
            if (!duplicationProduct[0]) {
                return {
                    ...state,
                    countIdProductsInCartOverlay: [...state.countIdProductsInCartOverlay, {[action.idProduct]: state.value + 1}],
                    // countIdProductsInCartOverlay: [...state.countIdProductsInCartOverlay, {[action.idProduct]: state.value + 1, count: state.id} ],
                    // countIdProductsInCartOverlay: [state.oneProduct]

                    // countIdProductsInCartOverlay: [... state.countIdProductsInCartOverlay]

                    // value: state.value + 1
                }
                // }
            }
            return state
        case INCREMENT:

            // let valueProduct = state.value.find(x => {
            //     return x.id === action.productToCart.id;
            // })
            // if (valueProduct) {


            //             const findProductIndex = (cart, productID) => {
            //     return cart.product.findIndex((p) => p.id === productID);
            // };
            // let indexChosenProduct = findProductIndex(cart, productID)


            let duplication = state.countIdProductsInCartOverlay.filter(x => +((Object.keys(x) + "") === action.idProduct))

//             findProductIndex = state.countIdProductsInCartOverlay;
//                 idProduct = action.idProduct
// // @ts-ignore
//             let duplication = (findProductIndex, idProduct) => {
//                     debugger
//
//                 findProductIndex.findIndex((item: any) => {return console.log('item')})
//                 debugger
//                 //Object.keys(item) + '' === idProduct
//         }
            let countProduct = action.countProduct


            if (duplication) {
                //let oneObj = Object.assign( state.countIdProductsInCartOverlay,{[action.idProduct]: duplication[0][action.idProduct]+1}) // {a : 2, b :

                // let oneObj = duplication +Object.keys(duplication) +1
                // let oneObj2 = duplication +Object.values(duplication) +1
// console.log(oneObj)
// console.log(oneObj2)
                return {
                    ...state,
                    // countIdProductsInCartOverlay: [ ...state.countIdProductsInCartOverlay, {[action.idProduct]:  +Object.values(action.countProduct)+ 1}]
                    // countIdProductsInCartOverlay: [ ...state.countIdProductsInCartOverlay, [{[Object.keys(duplication[0])[0]]:  +Object.values(action.countProduct)+ 1}]]
                    // countIdProductsInCartOverlay: [ ...state.countIdProductsInCartOverlay,  ...[oneObj]]


                    // countIdProductsInCartOverlay:  {oneObj}
                    //  countIdProductsInCartOverlay: [ {...[state.countIdProductsInCartOverlay[0]]},  ...[{[action.idProduct]: duplication[0][action.idProduct]+1}]]

                    countIdProductsInCartOverlay: [...state.countIdProductsInCartOverlay, {[action.idProduct]: duplication[0][action.idProduct] + 1}]


                    ///countIdProductsInCartOverlay: [ state.countIdProductsInCartOverlay[0],  {[action.idProduct]: +1}]

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
            if (action.size && action.idColorProduct) {


            if (!existingProduct || !existingSizeProduct || !existingIdColorProduct || !existingPricesProduct || !existingIdColorProduct2) {
// let prices = action.prices

                debugger
                return {
                    ...state,

                    // productCart: [...state.productCart, action.productToCart],
                    productCart: [...state.productCart, action],
                    // productCart: {producttocart, prices: prices},
                    // @ts-ignore
                    // productCart: [...state.productCart, [...action.productToCart.prices], action.prices],
                    // productCart: [...state.productCart, [{attributes: action.productToCart.attributes}], {brand: action.productToCart.brand}, action.productToCart.gallery[0], action.productToCart.id, action.productToCart.inStock,
                    //     // @ts-ignore
                    //     {name: action.productToCart.name}, action.prices],
                    // productCart: [...state.productCart, [...action.productToCart.prices], action.prices],

                    //     // @ts-ignore
                    //     { action.productToCart.name}, action.prices

                    // state.count = action.count+1,
                    //  [{...state.productCart[0].id}, action.productToCart]


                    // prices: [action.prices],
                    // size: action.size,
                    count: state.count + 1
                }
                // if (){
                //
                // }
                // return state
            }
            }

            // break;
            return state
        default:

            return state
    }

}

export const changeCurrency = (state = {currency: {label: "USD", symbol: "\uFF04"}}, action: any) => {
    switch (action.type) {

        case CHANGECURRENCY:

            // const currency = action.currency
            //
            // newCurrency = state = currency;
            // return newCurrency
            debugger;
            // let choseCurrency = action.currency === "USD" ? "\uFF04"
            //     : action.currency === "GBP" ? "\u00A3"
            //         : action.currency === "AUD" ? "\uFF04"
            //             : action.currency === "RUB" ? "\u20BD" : "\uFFE5"

            // let amountProduct = action.currency.label === "JPY" ? this.props.products[i].prices[3].amount
            //     : action.currency.label === "GBP" ? this.props.products[i].prices[1].amount
            //         : action.currency.label === "AUD" ? this.props.products[i].prices[2].amount
            //             : action.currency.label === "RUB" ? this.props.products[i].prices[4].amount : this.props.products[i].prices[0].amount
            // let amount = action.currency.label === "JPY" ? this.props.product.prices[3].amount
            //     : action.currency.label === "GBP" ? this.props.product.prices[1].amount
            //         : action.currency.label === "AUD" ? this.props.product.prices[2].amount
            //             : action.currency.label === "RUB" ? this.props.product.prices[4].amount : this.props.product.prices[0].amount
            return {
                ...state,
                currency: action.currency,
                // currencySign: choseCurrency
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
            if(state.sizeProduct.length === 0) {
                return {
                    ...state,
                    sizeProduct: [...state.sizeProduct, action.productAttributeColor]
                }
            } else if (existingProductAttribute ) {
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
