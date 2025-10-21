import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/common/Newsletter';
import { validarFormularioLogin } from '../utils/validators';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        contrasena: ''
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
        const validation = validarFormularioLogin(formData);
        setErrors(validation.errors);
        return validation.valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí iría la lógica de autenticación
            console.log('Datos de login:', formData);
            // Por ahora solo mostramos un alert
            alert('Login exitoso! (Funcionalidad en desarrollo)');
        }
    };

    return (
        <>
            <div className="container">
                <div className="login-container">
                    <div className="logo-section">
                        <img src="/img/logo.png" alt="Level-up Gamer Logo" />
                        <div className="company-name">Level-up Gamer</div>
                    </div>
                    
                    <div className="login-title">
                        Inicio de sesión
                    </div>
                    
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Correo</label>
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email" 
                                placeholder="tu@email.com" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className={`form-control ${errors.contrasena ? 'is-invalid' : ''}`}
                                name="contrasena" 
                                placeholder="Tu contraseña" 
                                value={formData.contrasena}
                                onChange={handleChange}
                                required 
                            />
                            {errors.contrasena && <div className="invalid-feedback">{errors.contrasena}</div>}
                        </div>
                        
                        <button type="submit" className="btn btn-login w-100">
                            <i className="fas fa-sign-in-alt me-2"></i>Iniciar sesión
                        </button>
                    </form>
                    
                    <div className="login-links">
                        <Link to="/registro">¿No tienes cuenta?<br />Regístrate</Link>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </div>

            <Newsletter />
        </>
    );
};

export default Login;
