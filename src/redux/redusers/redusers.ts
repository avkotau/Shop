import { INCREMENT, DECREMENT, ALLPRODUCTS } from '../actions/actions';


export default function counterReducer(state = {value: 0}, action: { type: string; payload: object }) {
    debugger
    switch (action.type) {
        case INCREMENT:
            return {value: state.value + 1}
        case DECREMENT:
            return {value: state.value - 1}

        case ALLPRODUCTS:
            debugger
            return {

                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}
