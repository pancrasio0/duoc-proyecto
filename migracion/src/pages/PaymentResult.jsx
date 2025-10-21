import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/formatters';
import { productos } from '../data/productos';

const PaymentResult = () => {
    const location = useLocation();
    const { success, formData, carrito, total } = location.state || {};

    if (!formData || !carrito) {
        return (
            <div className="container my-5 text-center">
                <h3>Error: No se encontraron datos del pago</h3>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header text-center">
                            {success ? (
                                <div className="text-success">
                                    <i className="fas fa-check-circle fa-3x mb-3"></i>
                                    <h2>¡Pago Aprobado!</h2>
                                    <p>Tu pedido ha sido procesado exitosamente</p>
                                </div>
                            ) : (
                                <div className="text-danger">
                                    <i className="fas fa-times-circle fa-3x mb-3"></i>
                                    <h2>Pago Rechazado</h2>
                                    <p>No se pudo procesar tu pago</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="card-body">
                            <h4>Datos del Cliente</h4>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <p><strong>Nombre:</strong> {formData.nombre} {formData.apellido}</p>
                                    <p><strong>Correo:</strong> {formData.correo}</p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Dirección:</strong> {formData.calle}</p>
                                    {formData.departamento && <p><strong>Departamento:</strong> {formData.departamento}</p>}
                                    <p><strong>Comuna:</strong> {formData.comuna}, {formData.region}</p>
                                    {formData.indicaciones && <p><strong>Indicaciones:</strong> {formData.indicaciones}</p>}
                                </div>
                            </div>

                            <h4>Productos Comprados</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio Unit.</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carrito.map((item, index) => {
                                            const producto = productos[item.id];
                                            if (!producto) return null;
                                            
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={`/img/${producto.imagen}`}
                                                                alt={producto.nombre}
                                                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                                                className="me-2"
                                                            />
                                                            {producto.nombre}
                                                        </div>
                                                    </td>
                                                    <td>{item.cantidad}</td>
                                                    <td>{formatearPrecio(producto.precio)}</td>
                                                    <td>{formatearPrecio(producto.precio * item.cantidad)}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="3">Total:</th>
                                            <th>{formatearPrecio(total)}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="text-center mt-4">
                                <Link to="/" className="btn btn-primary me-2">Volver al inicio</Link>
                                <Link to="/productos" className="btn btn-outline-primary">Seguir comprando</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentResult;