import type { Animal } from '../types';

export interface CartContextType {
    cart: Animal[];
    toggleCart: (animal: Animal) => void;
    clearCart: () => void;
}