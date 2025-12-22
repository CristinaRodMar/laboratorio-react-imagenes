import { createContext } from 'react';
import type { CartContextType } from './types/card.types';

export const CartContext = createContext<CartContextType | undefined>(undefined);