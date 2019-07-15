const redux = require('redux');
const createStore = redux.createStore;


// Actions

const INC_COUNTER = "INC_COUNTER";
const ADD_COUNTER = "ADD_COUNTER";

const initialState = {
    counter: 0
}



//Reducer
const rootReducer = (state, action) => {
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
        default:
            return state;
    }

}

// Store
const store = createStore(rootReducer, initialState);
console.log(store.getState())


const incCounter = () => ({ type: INC_COUNTER })

const addCounter = (value) => ({ type: ADD_COUNTER, value: value })


store.subscribe(() => console.log(store.getState()))

store.dispatch(incCounter());
store.dispatch(incCounter());
store.dispatch(addCounter(10));

// Dispatching Action
// Sucription




