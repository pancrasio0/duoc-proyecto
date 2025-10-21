import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatearPrecio } from '../utils/formatters';
import { productos } from '../data/productos';

const Checkout = () => {
    const navigate = useNavigate();
    const { carrito, calcularTotal } = useCart();
    
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        calle: '',
        departamento: '',
        region: '',
        comuna: '',
        indicaciones: ''
    });

    const regiones = [
        'Arica y Parinacota',
        'Tarapacá',
        'Antofagasta',
        'Atacama',
        'Coquimbo',
        'Valparaíso',
        'Metropolitana',
        'O\'Higgins',
        'Maule',
        'Ñuble',
        'Biobío',
        'La Araucanía',
        'Los Ríos',
        'Los Lagos',
        'Aysén',
        'Magallanes'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.nombre || !formData.apellido || !formData.correo || 
            !formData.calle || !formData.region || !formData.comuna) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }

        alert('¡Pago procesado exitosamente! (Simulación)');
        navigate('/');
    };

    if (carrito.length === 0) {
        navigate('/carrito');
        return null;
    }

    const total = calcularTotal();

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5">Checkout</h2>
            
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>Información de Entrega</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Nombre *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Apellido *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Correo Electrónico *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <h5 className="mt-4 mb-3">Dirección de Entrega</h5>
                                
                                <div className="mb-3">
                                    <label className="form-label">Calle *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="calle"
                                        value={formData.calle}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Departamento (Opcional)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="departamento"
                                        value={formData.departamento}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Región *</label>
                                        <select
                                            className="form-select"
                                            name="region"
                                            value={formData.region}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Selecciona una región</option>
                                            {regiones.map((region, index) => (
                                                <option key={index} value={region}>{region}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Comuna *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="comuna"
                                            value={formData.comuna}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Indicaciones para la Entrega (Opcional)</label>
                                    <textarea
                                        className="form-control"
                                        name="indicaciones"
                                        rows="3"
                                        value={formData.indicaciones}
                                        onChange={handleInputChange}
                                        placeholder="Ej: Tocar timbre, casa azul, etc."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg w-100"
                                >
                                    Pagar Ahora {formatearPrecio(total)}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Resumen del Pedido</h4>
                        </div>
                        <div className="card-body">
                            {carrito.map((item, index) => {
                                const producto = productos[item.id];
                                if (!producto) return null;
                                
                                return (
                                    <div key={index} className="d-flex align-items-center mb-3">
                                        <img
                                            src={`/img/${producto.imagen}`}
                                            alt={producto.nombre}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            className="me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">{producto.nombre}</h6>
                                            <small className="text-muted">Cantidad: {item.cantidad}</small>
                                        </div>
                                        <span>{formatearPrecio(producto.precio * item.cantidad)}</span>
                                    </div>
                                );
                            })}
                            
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total: {formatearPrecio(total)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;