import React, { useState } from 'react';
import { validarEmail } from '../../utils/validators';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { valid, error } = validarEmail(email);
        
        if (valid) {
            setMensaje('¡Gracias por suscribirte a nuestro newsletter!');
            setEmail('');
            setTimeout(() => setMensaje(''), 3000);
        } else {
            setMensaje(error);
        }
    };

    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <span className="me-3">Level-up Gamer</span>
                            <a href="#" className="text-decoration-none me-3">Juegos de Mesa</a>
                            <span className="me-2">|</span>
                            <a href="#" className="text-decoration-none me-3">Accesorios</a>
                            <span className="me-2">|</span>
                            <a href="#" className="text-decoration-none">Consolas</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-md-end">
                            <span className="me-3">Suscríbete para recibir ofertas:</span>
                            <form onSubmit={handleSubmit} className="input-group" style={{ maxWidth: '300px' }}>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="ejemplo@correo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="btn btn-dark" type="submit">Suscribir</button>
                            </form>
                        </div>
                        {mensaje && (
                            <div className="text-end mt-2">
                                <small className={mensaje.includes('Gracias') ? 'text-success' : 'text-danger'}>
                                    {mensaje}
                                </small>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
