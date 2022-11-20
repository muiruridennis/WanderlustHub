import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../src/Reducers"
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
