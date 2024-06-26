import React from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './app/store';
import 'beercss';
import 'material-dynamic-colors';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //  <React.StrictMode>

  //  <GoogleOAuthProvider clientId="формат_для_https">
  <Provider store={store}>
    <App />
  </Provider>,
  //  </GoogleOAuthProvider>

  // </React.StrictMode>
);
