import {
    INC_COUNTER,
    ADD_COUNTER,
    DEC_COUNTER,
    SUB_COUNTER,
    STORE_RESULT,
    DELETE_RESULT
} from "./actionTypes";
const initialState = {
    counter: 0,
    results: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        case SUB_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case DELETE_RESULT:
            return {
                ...state,
                results: state.results.slice(action.value, 1)
            }
        default:
            return state;
    }
}

export default reducer;