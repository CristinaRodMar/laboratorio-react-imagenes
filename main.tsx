import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./src/routers/App";
import { CartProvider } from "./src/components/card-context"; 
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);