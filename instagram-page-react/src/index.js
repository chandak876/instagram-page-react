import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

// reducers
import reducer from './reducers'

// components
import App from './core/App';

const middlewares = [thunk];

ReactDOM.render(
    <Provider store={createStore(reducer, applyMiddleware(...middlewares))}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
