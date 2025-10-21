import React, { useState } from 'react';
import Newsletter from '../components/common/Newsletter';
import { validarNombre, validarEmail, validarCampoRequerido } from '../utils/validators';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre_completo: '',
        email: '',
        mensaje: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Limpiar error cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validar nombre
        const nombreValidation = validarNombre(formData.nombre_completo);
        if (!nombreValidation.valid) {
            newErrors.nombre_completo = nombreValidation.error;
        }

        // Validar email
        const emailValidation = validarEmail(formData.email);
        if (!emailValidation.valid) {
            newErrors.email = emailValidation.error;
        }

        // Validar mensaje
        const mensajeValidation = validarCampoRequerido(formData.mensaje, 'El mensaje');
        if (!mensajeValidation.valid) {
            newErrors.mensaje = mensajeValidation.error;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí iría la lógica para enviar el mensaje
            console.log('Datos de contacto:', formData);
            alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
            setFormData({
                nombre_completo: '',
                email: '',
                mensaje: ''
            });
        }
    };

    return (
        <>
            {/* Logo de la tienda */}
            <section className="logo-section py-5">
                <div className="container text-center">
                    <img src="/img/logo.png" alt="Level-up Gamer" className="mb-4" style={{width: '200px', height: '200px'}} />
                    <h1 className="company-name">Level-up Gamer</h1>
                    <p className="lead text-muted">¡Contáctanos y resuelve todas tus dudas!</p>
                </div>
            </section>

            {/* Formulario de contacto */}
            <div className="container">
                <div className="contacto-container">
                    <div className="contacto-title">
                        <i className="fas fa-envelope me-2"></i>Formulario de Contacto
                    </div>
                    
                    <form id="contactoForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nombre Completo</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.nombre_completo ? 'is-invalid' : ''}`}
                                name="nombre_completo" 
                                value={formData.nombre_completo}
                                onChange={handleChange}
                                required 
                                placeholder="Ingresa tu nombre completo"
                            />
                            {errors.nombre_completo && <div className="invalid-feedback">{errors.nombre_completo}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Correo Electrónico</label>
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                placeholder="ejemplo@correo.com"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Mensaje</label>
                            <textarea 
                                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                                name="mensaje" 
                                rows="6" 
                                value={formData.mensaje}
                                onChange={handleChange}
                                required 
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                        </div>
                        
                        <button type="submit" className="btn btn-enviar">
                            <i className="fas fa-paper-plane me-2"></i>Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>

            <Newsletter />
        </>
    );
};

export default Contact;