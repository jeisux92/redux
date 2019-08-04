import { STORE_RESULT, DELETE_RESULT } from "../actionTypes";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(action.result)
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
