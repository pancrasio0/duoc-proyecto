import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getAllProducts } from '../data/productos';
import { useCart } from '../context/CartContext';
import { formatearPrecio } from '../utils/formatters';
import ProductCard from '../components/products/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { agregarAlCarrito } = useCart();
    
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [productosRelacionados, setProductosRelacionados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        const productoEncontrado = getProductById(id);
        
        if (!productoEncontrado) {
            // Si no se encuentra el producto, redirigir a productos
            navigate('/productos');
            return;
        }
        
        setProducto(productoEncontrado);
        cargarProductosRelacionados(productoEncontrado);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, [id, navigate]);

    const cargarProductosRelacionados = (productoActual) => {
        const todosLosProductos = getAllProducts();
        
        // Primero intentar productos de la misma categoría
        let relacionados = todosLosProductos.filter(
            p => p.id !== productoActual.id && p.categoriaSlug === productoActual.categoriaSlug
        );
        
        // Si no hay suficientes, agregar productos aleatorios
        if (relacionados.length < 4) {
            const otros = todosLosProductos
                .filter(p => p.id !== productoActual.id && p.categoriaSlug !== productoActual.categoriaSlug)
                .sort(() => Math.random() - 0.5);
            
            relacionados = [...relacionados, ...otros].slice(0, 4);
        } else {
            relacionados = relacionados.slice(0, 4);
        }
        
        setProductosRelacionados(relacionados);
    };

    const handleIncrementar = () => {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        }
    };

    const handleDecrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleCantidadChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) value = 1;
        if (value > 10) value = 10;
        setCantidad(value);
    };

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(producto.id, cantidad);
        setShowModal(true);
    };

    const handleComprarAhora = () => {
        agregarAlCarrito(producto.id, cantidad);
        navigate('/carrito');
    };

    const handleAgregarFavoritos = () => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        
        if (!favoritos.find(item => item.id === producto.id)) {
            favoritos.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen
            });
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            alert('Producto agregado a favoritos');
        } else {
            alert('El producto ya está en tus favoritos');
        }
    };

    const handleCompartir = () => {
        if (navigator.share) {
            navigator.share({
                title: producto.nombre,
                text: producto.descripcion,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Enlace copiado al portapapeles');
            });
        }
    };

    const handleVerCarrito = () => {
        setShowModal(false);
        navigate('/carrito');
    };

    if (!producto) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Breadcrumb */}
            <div className="container mt-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/productos">{producto.categoria}</Link></li>
                        <li className="breadcrumb-item" aria-current="page">{producto.nombre}</li>
                    </ol>
                </nav>
            </div>

            {/* Contenido del producto */}
            <div className="container my-5">
                <div className="row">
                    {/* Imagen del producto */}
                    <div className="col-lg-6 mb-4">
                        <div className="product-image-container">
                            <img 
                                src={`/img/${producto.imagen}`} 
                                alt={producto.nombre} 
                                className="img-fluid rounded product-main-image"
                            />
                            <div className="product-badge">
                                {producto.disponible && producto.stock > 0 ? (
                                    <span className="badge bg-success">Disponible</span>
                                ) : (
                                    <span className="badge bg-danger">Agotado</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Información del producto */}
                    <div className="col-lg-6">
                        <div className="product-info">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary">{producto.categoria}</span>
                            </div>
                            
                            <h1 className="product-title mb-3">{producto.nombre}</h1>
                            
                            <div className="product-price mb-4">
                                <span className="price-current">{formatearPrecio(producto.precio)}</span>
                                <span className="price-currency"> CLP</span>
                            </div>

                            <div className="product-rating mb-4">
                                <h6>Califica este producto:</h6>
                                <div className="stars-container">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <i
                                            key={star}
                                            className={`fas fa-star ${
                                                star <= (hoverRating || rating) ? 'text-warning' : 'text-muted'
                                            }`}
                                            style={{ cursor: 'pointer', fontSize: '1.5rem', marginRight: '5px' }}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                        ></i>
                                    ))}
                                    {rating > 0 && (
                                        <span className="ms-2 text-muted">({rating}/5 estrellas)</span>
                                    )}
                                </div>
                            </div>

                            <div className="product-description mb-4">
                                <h5>Descripción</h5>
                                <p className="text">{producto.descripcion}</p>
                            </div>

                            <div className="product-features mb-4">
                                <h5>Características</h5>
                                <ul className="list-unstyled">
                                    {producto.caracteristicas.map((caracteristica, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check text-success me-2"></i>
                                            {caracteristica}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {producto.disponible && producto.stock > 0 ? (
                                <div className="product-actions">
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label htmlFor="cantidad" className="form-label">Cantidad</label>
                                            <div className="input-group">
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button"
                                                    onClick={handleDecrementar}
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input 
                                                    type="number" 
                                                    className="form-control text-center" 
                                                    id="cantidad" 
                                                    value={cantidad}
                                                    onChange={handleCantidadChange}
                                                    min="1" 
                                                    max="10"
                                                />
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button"
                                                    onClick={handleIncrementar}
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 d-md-flex">
                                        <button 
                                            className="btn btn-primary btn-lg flex-fill"
                                            onClick={handleAgregarAlCarrito}
                                        >
                                            <i className="fas fa-shopping-cart me-2"></i>
                                            Agregar al Carrito
                                        </button>
                                        <button 
                                            className="btn btn-outline-primary btn-lg"
                                            onClick={handleComprarAhora}
                                        >
                                            <i className="fas fa-bolt me-2"></i>
                                            Comprar Ahora
                                        </button>
                                    </div>

                                    <div className="mt-3">
                                        <button 
                                            className="btn btn-outline-secondary"
                                            onClick={handleAgregarFavoritos}
                                        >
                                            <i className="fas fa-heart me-2"></i>
                                            Agregar a Favoritos
                                        </button>
                                        <button 
                                            className="btn btn-outline-secondary ms-2"
                                            onClick={handleCompartir}
                                        >
                                            <i className="fas fa-share-alt me-2"></i>
                                            Compartir
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="alert alert-warning">
                                    <i className="fas fa-exclamation-triangle me-2"></i>
                                    Producto no disponible en este momento
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Productos relacionados */}
                <div className="row mt-5">
                    <div className="col-12">
                        <h3 className="mb-4">Productos Relacionados</h3>
                        <div className="row">
                            {productosRelacionados.map(prod => (
                                <div key={prod.id} className="col-lg-3 col-md-6 mb-4">
                                    <ProductCard producto={prod} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de confirmación */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Producto Agregado</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center">
                                    <img 
                                        src={`/img/${producto.imagen}`} 
                                        alt={producto.nombre} 
                                        className="me-3" 
                                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h6>{producto.nombre}</h6>
                                        <p className="text mb-0">Cantidad: {cantidad}</p>
                                        <p className="text mb-0">Precio: {formatearPrecio(producto.precio * cantidad)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={() => setShowModal(false)}
                                >
                                    Seguir Comprando
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={handleVerCarrito}
                                >
                                    Ver Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
