import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import rootReducer from "./Reducers"
import { BrowserRouter } from "react-router-dom";
import { createTheme } from './theme';
import App from './App';
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
const theme = createTheme();
root.render(
  // <React.StrictMode>

  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <App />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
