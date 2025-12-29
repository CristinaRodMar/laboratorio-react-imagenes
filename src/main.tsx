import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routers/App';
import { CartProvider } from './common/Context/card-context';
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);