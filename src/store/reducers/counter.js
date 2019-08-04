import {
  INC_COUNTER,
  ADD_COUNTER,
  DEC_COUNTER,
  SUB_COUNTER
} from "../actionTypes";
const initialState = {
  counter: 0
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
    default:
      return state;
  }
};

export default reducer;
