import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {countReducer, modReducer} from "./features/counter/reduceer";

let rootReducer = combineReducers({
    counter: countReducer,
    modifire: modReducer
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store