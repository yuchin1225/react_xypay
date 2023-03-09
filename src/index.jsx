import React from "react";
import ReactDOM from "react-dom";

//redux redux-thunk
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducersCar from "./store/carplateReducers.js";

//thunk middleware
import logger from "./store/middleware";

import App from "./App.jsx";

const store = createStore(reducersCar, applyMiddleware(thunk, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    , document.getElementById("root"));