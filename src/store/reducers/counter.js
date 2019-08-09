import {
    INC_COUNTER,
    ADD_COUNTER,
    DEC_COUNTER,
    SUB_COUNTER
} from "../actions/actionTypes";
import { updateObject } from "../utility"

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return updateObject(state, { counter: state.counter + 1 });
        case ADD_COUNTER:
            return updateObject(state, { counter: state.counter + action.value });
        case DEC_COUNTER:
            return updateObject(state, { counter: state.counter - 1 });
        case SUB_COUNTER:
            return updateObject(state, { counter: state.counter - action.value });
        default:
            return state;
    }
}

export default counter;