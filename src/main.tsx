import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/main.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';

import theme from './theme';
import { Provider } from 'react-redux';
import store from './store/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </LocalizationProvider>
    </React.StrictMode>,
);
