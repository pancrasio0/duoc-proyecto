import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/common/Newsletter';
import NotificationContainer from '../components/common/NotificationContainer';
import { formatearPrecio } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { productos } from '../data/productos';
import { useNotifications } from '../hooks/useNotifications';

const Cart = () => {
    const { 
        carrito, 
        eliminarDelCarrito, 
        actualizarCantidad, 
        vaciarCarrito,
        aplicarCodigoDescuento,
        removerCodigoDescuento,
        calcularSubtotal: calcularSubtotalContext,
        calcularEnvio: calcularEnvioContext,
        calcularDescuento: calcularDescuentoContext,
        calcularTotal: calcularTotalContext
    } = useCart();
    
    const { notifications, addNotification, removeNotification } = useNotifications();
    const [codigoDescuento, setCodigoDescuento] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(null);
    const [mensajeDescuento, setMensajeDescuento] = useState('');

    // Códigos de descuento válidos
    const codigosDescuento = {
        'WELCOME10': { descuento: 0.10, descripcion: '10% de descuento' },
        'GAMER20': { descuento: 0.20, descripcion: '20% de descuento' },
        'LEVELUP15': { descuento: 0.15, descripcion: '15% de descuento' }
    };


    useEffect(() => {
        // Cargar descuento aplicado
        const descuentoGuardado = localStorage.getItem('codigoDescuentoAplicado');
        if (descuentoGuardado && codigosDescuento[descuentoGuardado]) {
            setDescuentoAplicado(codigosDescuento[descuentoGuardado]);
            setMensajeDescuento(`✓ ${codigosDescuento[descuentoGuardado].descripcion} aplicado`);
        }
    }, []);

    const cambiarCantidad = (index, cambio) => {
        const item = carrito[index];
        
        if (item) {
            const producto = productos[item.id];
            if (!producto || !producto.disponible) {
                eliminarDelCarrito(index);
                addNotification('Producto no disponible, eliminado del carrito', 'warning');
                return;
            }

            const nuevaCantidad = item.cantidad + cambio;
            
            if (nuevaCantidad <= 0) {
                // Eliminar producto si la cantidad es 0 o menor
                eliminarDelCarrito(index);
                addNotification('Producto eliminado del carrito', 'success');
            } else if (nuevaCantidad > producto.stock) {
                // No permitir exceder el stock disponible
                addNotification(`No hay suficiente stock. Disponible: ${producto.stock}`, 'warning');
            } else if (nuevaCantidad > 10) {
                // Límite máximo de 10 por producto
                addNotification('Máximo 10 unidades por producto', 'warning');
            } else {
                // Actualizar cantidad usando el contexto
                actualizarCantidad(index, nuevaCantidad);
            }
        }
    };

    const eliminarProducto = (index) => {
        eliminarDelCarrito(index);
        addNotification('Producto eliminado del carrito', 'success');
    };

    const calcularSubtotal = () => {
        return calcularSubtotalContext();
    };

    const calcularEnvio = () => {
        return calcularEnvioContext();
    };

    const calcularDescuento = () => {
        return calcularDescuentoContext();
    };

    const calcularTotal = () => {
        return calcularTotalContext();
    };

    const aplicarDescuento = () => {
        const codigo = codigoDescuento.trim().toUpperCase();
        
        if (!codigo) {
            setMensajeDescuento('Ingresa un código de descuento');
            return;
        }
        
        if (codigosDescuento[codigo]) {
            setDescuentoAplicado(codigosDescuento[codigo]);
            setMensajeDescuento(`✓ ${codigosDescuento[codigo].descripcion} aplicado`);
            aplicarCodigoDescuento(codigo);
            setCodigoDescuento('');
        } else {
            setMensajeDescuento('Código de descuento no válido');
        }
    };

    const limpiarCarrito = () => {
        if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            vaciarCarrito();
            setDescuentoAplicado(null);
            setMensajeDescuento('');
            removerCodigoDescuento();
            addNotification('Carrito vaciado', 'info');
        }
    };

    const procederCheckout = () => {
        if (carrito.length === 0) {
            addNotification('Tu carrito está vacío', 'warning');
            return;
        }
        
        addNotification('Redirigiendo al checkout...', 'info');
        
        setTimeout(() => {
            alert('Checkout sin hacer');
        }, 2000);
    };


    return (
        <>
            <NotificationContainer 
                notifications={notifications} 
                onRemove={removeNotification} 
            />
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold mb-4">Carrito de Compras</h1>
                            <p className="lead mb-4">
                                Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="/img/logo.png" width="200" height="200" alt="Level-up Gamer" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    {carrito.length === 0 ? (
                        <div id="carritoVacio" className="text-center py-5">
                            <div className="empty-cart-container">
                                <i className="fas fa-shopping-cart fa-4x text mb-4"></i>
                                <h3 className="text-light mb-3">Tu carrito está vacío</h3>
                                <p className="text mb-4">¡Agrega algunos productos increíbles a tu carrito!</p>
                                <Link to="/productos" className="btn btn-primary btn-lg">
                                    <i className="fas fa-shopping-bag me-2"></i>Ver Productos
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div id="carritoConProductos">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="cart-items-container">
                                        <h3 className="text-light mb-4">
                                            <i className="fas fa-shopping-cart me-2"></i>Productos en tu carrito
                                        </h3>
                                        <div id="listaProductos">
                                            {carrito.map((item, index) => {
                                                const producto = productos[item.id];
                                                
                                                // Si el producto no existe o no está disponible, no lo renderizamos
                                                if (!producto || !producto.disponible) {
                                                    return null;
                                                }
                                                
                                                return (
                                                    <div key={`${item.id}-${index}`} className="cart-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-2">
                                                                <img 
                                                                    src={`/img/${producto.imagen}`} 
                                                                    alt={producto.nombre} 
                                                                    className="cart-item-image"
                                                                    onError={(e) => {
                                                                        e.target.src = '/img/logo.png';
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <h6 className="cart-item-name">{producto.nombre}</h6>
                                                                <p className="cart-item-category text">{producto.categoria}</p>
                                                                <small className="text-muted">
                                                                    Stock disponible: {producto.stock}
                                                                </small>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="quantity-controls">
                                                                    <button 
                                                                        className="btn btn-sm btn-outline-secondary" 
                                                                        onClick={() => cambiarCantidad(index, -1)}
                                                                        disabled={item.cantidad <= 1}
                                                                    >
                                                                        <i className="fas fa-minus"></i>
                                                                    </button>
                                                                    <span className="quantity-display">{item.cantidad}</span>
                                                                    <button 
                                                                        className="btn btn-sm btn-outline-secondary" 
                                                                        onClick={() => cambiarCantidad(index, 1)}
                                                                        disabled={item.cantidad >= producto.stock || item.cantidad >= 10}
                                                                    >
                                                                        <i className="fas fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <span className="cart-item-price">{formatearPrecio(producto.precio)}</span>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <span className="cart-item-total">{formatearPrecio(producto.precio * item.cantidad)}</span>
                                                            </div>
                                                            <div className="col-md-1">
                                                                <button 
                                                                    className="btn btn-sm btn-outline-danger" 
                                                                    onClick={() => eliminarProducto(index)} 
                                                                    title="Eliminar producto"
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="order-summary-container">
                                        <h4 className="text-light mb-4">
                                            <i className="fas fa-receipt me-2"></i>Resumen del Pedido
                                        </h4>
                                        
                                        <div className="summary-details">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text">Subtotal:</span>
                                                <span className="text-light">{formatearPrecio(calcularSubtotal())}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text">Envío:</span>
                                                <span className="text-light">
                                                    {calcularEnvio() === 0 ? 'Gratis' : formatearPrecio(calcularEnvio())}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text">Descuento:</span>
                                                <span className="text-success">
                                                    {calcularDescuento() > 0 ? '-' + formatearPrecio(calcularDescuento()) : '$0'}
                                                </span>
                                            </div>
                                            <hr className="my-3" />
                                            <div className="d-flex justify-content-between mb-4">
                                                <span className="fw-bold text-light">Total:</span>
                                                <span className="fw-bold text-success fs-4">{formatearPrecio(calcularTotal())}</span>
                                            </div>
                                        </div>

                                        <div className="discount-section mb-4">
                                            <label htmlFor="codigoDescuento" className="form-label text-light">Código de descuento:</label>
                                            <div className="input-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="codigoDescuento" 
                                                    placeholder="Ingresa tu código"
                                                    value={codigoDescuento}
                                                    onChange={(e) => setCodigoDescuento(e.target.value)}
                                                />
                                                <button 
                                                    className="btn btn-outline-primary" 
                                                    type="button" 
                                                    onClick={aplicarDescuento}
                                                >
                                                    <i className="fas fa-tag"></i>
                                                </button>
                                            </div>
                                            {mensajeDescuento && (
                                                <div className={`mt-2 ${mensajeDescuento.includes('✓') ? 'text-success' : 'text-danger'}`}>
                                                    <small>{mensajeDescuento}</small>
                                                </div>
                                            )}
                                        </div>

                                        <div className="cart-actions">
                                            <button 
                                                className="btn btn-primary btn-lg w-100 mb-3" 
                                                onClick={procederCheckout}
                                            >
                                                <i className="fas fa-credit-card me-2"></i>Proceder al Pago
                                            </button>
                                            <button 
                                                className="btn btn-outline-secondary w-100 mb-2" 
                                                onClick={limpiarCarrito}
                                            >
                                                <i className="fas fa-trash me-2"></i>Vaciar Carrito
                                            </button>
                                            <Link to="/productos" className="btn btn-outline-primary w-100">
                                                <i className="fas fa-arrow-left me-2"></i>Seguir Comprando
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Cart;