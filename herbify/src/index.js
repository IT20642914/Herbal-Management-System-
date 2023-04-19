import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { MUItheme } from './styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ThemeProvider theme={MUItheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();

