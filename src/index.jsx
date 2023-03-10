import React from "react";
import ReactDOM from "react-dom";

//redux redux-thunk
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import reducersUser from "./store/userReducers.js";
import reducersCar from "./store/carplateReducers.js";

//thunk middleware
import logger from "./store/middleware";

import App from "./App.jsx";

// const reducers = combineReducers({ user: reducersUser, car: reducersCar });
const store = createStore(reducersCar, applyMiddleware(thunk, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    , document.getElementById("root"));