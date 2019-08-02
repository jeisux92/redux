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
};

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
      };
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(state.counter)
      };
    case DELETE_RESULT:
      let newArray = [
        ...state.results.slice(0, action.index),
        ...state.results.slice(action.index + 1)
      ];
      return {
        ...state,
        results: newArray
      };
    default:
      return state;
  }
};

export default reducer;
