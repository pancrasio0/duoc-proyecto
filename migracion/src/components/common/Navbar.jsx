import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { obtenerCantidadTotal } = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/img/logo.png" width="100" height="100" alt="Level-up Gamer" />
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/productos">Productos</Link>
                        <Link className="nav-link" to="/nosotros">Nosotros</Link>
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </div>
                    
                    <div className="d-flex align-items-center">
                        <Link to="/login" className="btn btn-outline-dark me-2">
                            Iniciar sesión
                        </Link>
                        <Link to="/registro" className="btn btn-outline-dark me-2">
                            Registrar usuario
                        </Link>
                        <Link to="/carrito" className="btn btn-outline-dark">
                            <i className="fas fa-shopping-cart me-1"></i> 
                            Carrito (<span>{obtenerCantidadTotal()}</span>)
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
