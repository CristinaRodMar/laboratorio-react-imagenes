import { useCart } from '../../pod/use-card';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    const { cart, toggleCart, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Tu carrito está vacío 🐾</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="mb-4">Resumen de Adopción</h2>
            <div className="checkout-list">
                {cart.map((animal) => (
                    <div key={animal.id} className="animal-card">
                        <img src={animal.picUrl} alt={animal.title} />
                        <div className="animal-info">
                            <h3>{animal.title}</h3>
                            <button className="add-button remove" onClick={() => toggleCart(animal)}> Eliminar </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-summary">
                <button className="add-button confirm-button" onClick={() => { alert('¡Gracias por adoptar!');  clearCart();  }}
                >
                    Confirmar Adopción ({cart.length})
                </button>
            </div>
        </div>
    );
};