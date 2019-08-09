import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import counter from "./store/reducers/counter";
import result from "./store/reducers/result";
import { Provider } from "react-redux";
import thunk from "redux-thunk"

const logger = (store) => {
    return next => {
        return action => {
            console.log("Middleware Dispatchig", action);
            console.log("Middleware previous state", store.getState())
            const result = next(action);
            console.log("Middleware next state", store.getState())
            return result;
        }
    }
}

const reducers = combineReducers({ ctr: counter, rslt: result })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
