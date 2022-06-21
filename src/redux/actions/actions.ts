export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'
export const ALLPRODUCTS = 'ALLPRODUCTS'

export const incrementAction = {
    type: INCREMENT
}
export const decrementAction = () => {

    return {
        type: DECREMENT
    }
}

export const addAllProducts = (dispatch: object) => {
    // debugger
    console.log("dispatch" + dispatch)
    return {
        type: ALLPRODUCTS,
        payload: dispatch

    }
}
// default {
//     incrementAction,
//     decrementAction
// }
