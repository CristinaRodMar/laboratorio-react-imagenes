import { Link } from "react-router-dom";
import { useCart } from "../../pod/use-card";

export const Navbar: React.FC = () => {
    const { cart } = useCart();

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Inicio</Link>
                <Link to="/cats">Ver Gatos</Link>
                <Link to="/dogs">Ver Perros</Link>
            </div>
            <div className="nav-links">
                <Link to="/checkout" className="cart-link">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                </Link>
            </div>
        </nav>
    );
};