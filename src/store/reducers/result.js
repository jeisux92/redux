import {
    STORE_RESULT,
    DELETE_RESULT
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = [...state.results.slice(0, action.index), ...state.results.slice(action.index + 1)]
    return updateObject(state, { results: updatedArray });
}

const result = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.counter }) })
        case DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default result;