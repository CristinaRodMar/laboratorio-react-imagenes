import { useContext } from 'react';
import { CartContext } from './card-context-helper';
import type { CartContextType } from "./types/card.types";

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};