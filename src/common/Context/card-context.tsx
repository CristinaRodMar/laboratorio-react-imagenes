import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { Animal } from '../../pod/types';
import { CartContext } from '../../pod/card-context-helper';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Animal[]>([]);

    const toggleCart = (animal: Animal) => {
        setCart((prevCart) => {
        const isExist = prevCart.find((item) => item.id === animal.id);
        if (isExist) {
            return prevCart.filter((item) => item.id !== animal.id);
        }
        return [...prevCart, animal];
        });
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, toggleCart, clearCart }}>
        {children}
        </CartContext.Provider>
    );
};