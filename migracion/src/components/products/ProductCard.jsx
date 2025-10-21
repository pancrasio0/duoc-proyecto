import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatearPrecio } from '../../utils/formatters';
import { useNotifications } from '../../hooks/useNotifications';

const ProductCard = ({ producto }) => {
    const { agregarAlCarrito, estaEnCarrito } = useCart();
    const { addNotification } = useNotifications();

    const handleAgregarCarrito = (e) => {
        e.stopPropagation();
        
        if (!producto.disponible || producto.stock <= 0) {
            addNotification('Este producto no está disponible', 'warning');
            return;
        }
        
        agregarAlCarrito(producto.id);
        addNotification(`${producto.nombre} agregado al carrito`, 'success');
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
                    className={`btn btn-sm mt-2 w-100 ${
                        !producto.disponible || producto.stock <= 0 
                            ? 'btn-secondary' 
                            : estaEnCarrito(producto.id) 
                                ? 'btn-success' 
                                : 'btn-outline-primary'
                    }`}
                    onClick={handleAgregarCarrito}
                    disabled={!producto.disponible || producto.stock <= 0}
                >
                    <i className={`fas ${
                        !producto.disponible || producto.stock <= 0 
                            ? 'fa-times-circle' 
                            : estaEnCarrito(producto.id) 
                                ? 'fa-check-circle' 
                                : 'fa-cart-plus'
                    } me-1`}></i>
                    {!producto.disponible || producto.stock <= 0 
                        ? 'No Disponible' 
                        : estaEnCarrito(producto.id) 
                            ? 'En el Carrito' 
                            : 'Agregar al Carrito'
                    }
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
