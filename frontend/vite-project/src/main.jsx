import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from "./controllers/redux/authSlice";
import errorReducer from "./controllers/redux/errorSlice";
import userReducer from "./controllers/redux/userSlice";

const reducer = combineReducers({
    auth:authReducer,
    bug:bugReducer,
    user: userReducer
});

const store = configureStore({reducer});


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider>
    <App />
    </Provider>
)
