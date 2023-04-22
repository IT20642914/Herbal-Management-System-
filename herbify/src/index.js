import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { MUItheme } from './styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';

import { store,persistore } from './redux/stores';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <PersistGate persistor={persistore}>
        <ThemeProvider theme={MUItheme}>
    <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

