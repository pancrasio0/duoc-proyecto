import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/common/Newsletter';
import { validarFormularioRegistro } from '../utils/validators';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre_completo: '',
        email: '',
        contrasena: '',
        confirmar_contrasena: '',
        telefono: '',
        fecha_nacimiento: '',
        pais: 'chile',
        ciudad: ''
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
        const validation = validarFormularioRegistro(formData);
        setErrors(validation.errors);
        return validation.valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí iría la lógica de registro
            console.log('Datos de registro:', formData);
            // Por ahora solo mostramos un alert
            alert('Registro exitoso! (Funcionalidad en desarrollo)');
        }
    };

    return (
        <>
            <div className="container">
                <div className="registro-container">
                    <div className="registro-title">
                        Registro de usuario
                    </div>
                    
                    <form id="registroForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nombre Completo</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.nombre_completo ? 'is-invalid' : ''}`}
                                name="nombre_completo" 
                                value={formData.nombre_completo}
                                onChange={handleChange}
                                required 
                            />
                            {errors.nombre_completo && <div className="invalid-feedback">{errors.nombre_completo}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email" 
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
                                value={formData.contrasena}
                                onChange={handleChange}
                                required 
                            />
                            {errors.contrasena && <div className="invalid-feedback">{errors.contrasena}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Confirmar Contraseña</label>
                            <input 
                                type="password" 
                                className={`form-control ${errors.confirmar_contrasena ? 'is-invalid' : ''}`}
                                name="confirmar_contrasena" 
                                value={formData.confirmar_contrasena}
                                onChange={handleChange}
                                required 
                            />
                            {errors.confirmar_contrasena && <div className="invalid-feedback">{errors.confirmar_contrasena}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Teléfono (opcional)</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                name="telefono" 
                                placeholder="+56 9 XXXX XXXX"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Fecha de Nacimiento</label>
                            <input 
                                type="date" 
                                className={`form-control ${errors.fecha_nacimiento ? 'is-invalid' : ''}`}
                                name="fecha_nacimiento" 
                                value={formData.fecha_nacimiento}
                                onChange={handleChange}
                                required 
                            />
                            {errors.fecha_nacimiento && <div className="invalid-feedback">{errors.fecha_nacimiento}</div>}
                        </div>
                        
                        <div className="row form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Seleccione su país:</label>
                                    <select 
                                        className={`form-select ${errors.pais ? 'is-invalid' : ''}`}
                                        name="pais" 
                                        value={formData.pais}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccionar país</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="bolivia">Bolivia</option>
                                        <option value="brasil">Brasil</option>
                                        <option value="chile">Chile</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="ecuador">Ecuador</option>
                                        <option value="paraguay">Paraguay</option>
                                        <option value="peru">Perú</option>
                                        <option value="uruguay">Uruguay</option>
                                        <option value="venezuela">Venezuela</option>
                                    </select>
                                    {errors.pais && <div className="invalid-feedback">{errors.pais}</div>}
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Seleccione su ciudad:</label>
                                    <select 
                                        className={`form-select ${errors.ciudad ? 'is-invalid' : ''}`}
                                        name="ciudad" 
                                        value={formData.ciudad}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccionar ciudad</option>
                                        <option value="santiago">Santiago</option>
                                        <option value="valparaiso">Valparaíso</option>
                                        <option value="concepcion">Concepción</option>
                                        <option value="antofagasta">Antofagasta</option>
                                        <option value="temuco">Temuco</option>
                                        <option value="iquique">Iquique</option>
                                        <option value="rancagua">Rancagua</option>
                                        <option value="talca">Talca</option>
                                        <option value="puerto_montt">Puerto Montt</option>
                                        <option value="punta_arenas">Punta Arenas</option>
                                    </select>
                                    {errors.ciudad && <div className="invalid-feedback">{errors.ciudad}</div>}
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-registrar">
                            <i className="fas fa-user-plus me-2"></i>Registrarse
                        </button>
                    </form>
                </div>
            </div>

            <Newsletter />
        </>
    );
};

export default Register;
