import { INCREMENT, DECREMENT, ALLPRODUCTS } from '../actions/actions';


export default function counterReducer(state = {value: 0}, action: { type: string; data: object }) {
    console.log(state)
    switch (action.type) {
        case INCREMENT:

            return {value: state.value + 1}
        case DECREMENT:
            return {value: state.value - 1}

        case ALLPRODUCTS:
debugger

            return {
                ...state,
                data: action.data,

            }
        default:
            return state
    }
}
