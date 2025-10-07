import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatearPrecio } from '../../utils/formatters';

const ProductCard = ({ producto }) => {
    const { agregarAlCarrito } = useCart();

    const handleAgregarCarrito = (e) => {
        e.stopPropagation();
        agregarAlCarrito(producto.id);
    };

    return (
        <div className="home-product-card">
            <Link to={`/producto/${producto.id}`} className="home-product-image-container">
                <img 
                    src={`/img/${producto.imagen}`} 
                    alt={producto.nombre}
                    className="home-product-image"
                />
            </Link>
            <div className="home-product-info">
                <Link to={`/producto/${producto.id}`} className="text-decoration-none">
                    <h6 className="home-product-name">{producto.nombre}</h6>
                </Link>
                <p className="home-product-price">{formatearPrecio(producto.precio)}</p>
                <button 
                    className="btn btn-sm btn-outline-primary mt-2 w-100" 
                    onClick={handleAgregarCarrito}
                >
                    <i className="fas fa-cart-plus me-1"></i>Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
