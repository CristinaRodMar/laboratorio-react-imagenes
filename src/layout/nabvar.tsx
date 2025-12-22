import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
    <nav className="navbar">
    <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/cats">Ver Gatos</Link>
        <Link to="/dogs">Ver Perros</Link>
    </div>
    <ul className="nav-links">
        <li>
        <span className="material-symbols-outlined">shopping_cart</span>
        </li>
    </ul>
    </nav>
    );
};

export default Navbar;
