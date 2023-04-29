import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';

import theme from './theme/mui-theme';
import store from './state/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* <React.StrictMode> */}
            <App />
            {/* </React.StrictMode> */}
        </ThemeProvider>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
