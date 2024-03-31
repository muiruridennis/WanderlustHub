import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import store from "./store"
import { BrowserRouter } from "react-router-dom";
import { createTheme } from './theme';
import App from './App';
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLE_AUTH_CLIENT_ID;
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
