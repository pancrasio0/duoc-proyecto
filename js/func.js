document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad del newsletter 
    const subscribeBtn = document.querySelector('.newsletter-section .btn-dark');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function () {
            const emailInput = document.querySelector('.newsletter-section input[type="email"]');
            const email = emailInput.value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(email)) {
                alert('¡Gracias por suscribirte a nuestro newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor, ingresa un email válido.');
            }
        });
    }

    const registroForm = document.querySelector('form');
    
    const loginForm = document.getElementById('loginForm');
    
    function mostrarError(campo, mensaje) {
        const errorAnterior = campo.parentNode.querySelector('.error-message');
        if (errorAnterior) {
            errorAnterior.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-danger mt-1';
        errorDiv.textContent = mensaje;
        campo.parentNode.appendChild(errorDiv);
        
        campo.classList.add('is-invalid');
    }

    function limpiarError(campo) {
        const errorAnterior = campo.parentNode.querySelector('.error-message');
        if (errorAnterior) {
            errorAnterior.remove();
        }
        campo.classList.remove('is-invalid');
    }
    
    if (registroForm && !loginForm) {

        function validarNombre(nombre) {
            const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
            const palabras = nombre.trim().split(/\s+/);
            
            if (nombre.trim().length < 2) {
                return 'El nombre debe tener al menos 2 caracteres';
            }
            
            if (palabras.length < 2) {
                return 'Debe ingresar nombre y apellido';
            }
            
            if (!nombreRegex.test(nombre)) {
                return 'El nombre solo puede contener letras y espacios';
            }
            
            return null;
        }

        function validarEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                return 'Ingrese un email válido';
            }
            
            return null;
        }

        function validarContrasena(contrasena) {
            if (contrasena.length < 8) {
                return 'La contraseña debe tener al menos 8 caracteres';
            }
            
            if (!/[A-Z]/.test(contrasena)) {
                return 'La contraseña debe contener al menos una letra mayúscula';
            }
            
            if (!/[a-z]/.test(contrasena)) {
                return 'La contraseña debe contener al menos una letra minúscula';
            }
            
            if (!/\d/.test(contrasena)) {
                return 'La contraseña debe contener al menos un número';
            }
            
            return null;
        }

        function validarTelefono(telefono) {
            if (telefono.trim() === '') {
                return null; // El teléfono es opcional
            }
            
            const telefonoRegex = /^(\+56\s?)?[2-9]\d{8}$/;
            
            if (!telefonoRegex.test(telefono.replace(/\s/g, ''))) {
                return 'Ingrese un teléfono válido (formato: +56 9 XXXX XXXX)';
            }
            
            return null;
        }

        function validarFechaNacimiento(valorFecha) {
            if (!valorFecha) {
                return 'La fecha de nacimiento es obligatoria';
            }

            const fecha = new Date(valorFecha);
            if (isNaN(fecha.getTime())) {
                return 'Ingrese una fecha válida';
            }

            const hoy = new Date();
            fecha.setHours(0,0,0,0);
            hoy.setHours(0,0,0,0);

            if (fecha > hoy) {
                return 'La fecha no puede ser futura';
            }

            let edad = hoy.getFullYear() - fecha.getFullYear();
            const m = hoy.getMonth() - fecha.getMonth();
            if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
                edad--;
            }

            if (edad < 18) {
                return 'Debes ser mayor de 18 años';
            }

            return null;
        }

        const nombreInput = document.querySelector('input[name="nombre_completo"]');
        if (nombreInput) {
            nombreInput.addEventListener('blur', function() {
                const error = validarNombre(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
        }

        const emailInput = document.querySelector('input[name="email"]');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const error = validarEmail(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
        }

        const contrasenaInput = document.querySelector('input[name="contrasena"]');
        if (contrasenaInput) {
            contrasenaInput.addEventListener('blur', function() {
                const error = validarContrasena(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
        }

        const confirmarContrasenaInput = document.querySelector('input[name="confirmar_contrasena"]');
        if (confirmarContrasenaInput) {
            confirmarContrasenaInput.addEventListener('blur', function() {
                if (contrasenaInput && this.value !== contrasenaInput.value) {
                    mostrarError(this, 'Las contraseñas deben coincidir');
                } else {
                    limpiarError(this);
                }
            });
        }

        const telefonoInput = document.querySelector('input[name="telefono"]');
        if (telefonoInput) {
            telefonoInput.addEventListener('blur', function() {
                const error = validarTelefono(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
        }

        const fechaNacimientoInput = document.querySelector('input[name="fecha_nacimiento"]');
        if (fechaNacimientoInput) {
            const hoy = new Date();
            const yyyy = hoy.getFullYear();
            const mm = String(hoy.getMonth() + 1).padStart(2, '0');
            const dd = String(hoy.getDate()).padStart(2, '0');
            fechaNacimientoInput.setAttribute('max', `${yyyy}-${mm}-${dd}`);

            fechaNacimientoInput.addEventListener('blur', function () {
                const error = validarFechaNacimiento(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
            fechaNacimientoInput.addEventListener('change', function () {
                const error = validarFechaNacimiento(this.value);
                if (error) {
                    mostrarError(this, error);
                } else {
                    limpiarError(this);
                }
            });
        }

        const paisSelect = document.querySelector('select[name="pais"]');
        if (paisSelect) {
            paisSelect.addEventListener('change', function() {
                if (this.value === '') {
                    mostrarError(this, 'Debe seleccionar un país');
                } else {
                    limpiarError(this);
                }
            });
        }

        const ciudadSelect = document.querySelector('select[name="ciudad"]');
        if (ciudadSelect) {
            ciudadSelect.addEventListener('change', function() {
                if (this.value === '') {
                    mostrarError(this, 'Debe seleccionar una ciudad');
                } else {
                    limpiarError(this);
                }
            });
        }

        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let esValido = true;
            
            const campos = registroForm.querySelectorAll('input, select');
            campos.forEach(campo => limpiarError(campo));
            
            if (nombreInput) {
                const errorNombre = validarNombre(nombreInput.value);
                if (errorNombre) {
                    mostrarError(nombreInput, errorNombre);
                    esValido = false;
                }
            }
            
            if (emailInput) {
                const errorEmail = validarEmail(emailInput.value);
                if (errorEmail) {
                    mostrarError(emailInput, errorEmail);
                    esValido = false;
                }
            }
            
            if (contrasenaInput) {
                const errorContrasena = validarContrasena(contrasenaInput.value);
                if (errorContrasena) {
                    mostrarError(contrasenaInput, errorContrasena);
                    esValido = false;
                }
            }
            
            if (confirmarContrasenaInput) {
                if (contrasenaInput && confirmarContrasenaInput.value !== contrasenaInput.value) {
                    mostrarError(confirmarContrasenaInput, 'Las contraseñas deben coincidir');
                    esValido = false;
                }
            }
            
            if (telefonoInput && telefonoInput.value.trim() !== '') {
                const errorTelefono = validarTelefono(telefonoInput.value);
                if (errorTelefono) {
                    mostrarError(telefonoInput, errorTelefono);
                    esValido = false;
                }
            }
            
            if (fechaNacimientoInput) {
                const errorFecha = validarFechaNacimiento(fechaNacimientoInput.value);
                if (errorFecha) {
                    mostrarError(fechaNacimientoInput, errorFecha);
                    esValido = false;
                }
            }
            
            if (paisSelect && paisSelect.value === '') {
                mostrarError(paisSelect, 'Debe seleccionar un país');
                esValido = false;
            }
            
            if (ciudadSelect && ciudadSelect.value === '') {
                mostrarError(ciudadSelect, 'Debe seleccionar una ciudad');
                esValido = false;
            }
            
            if (esValido) {
                alert('¡Registro exitoso! Bienvenido a Level-up Gamer.');
                registroForm.reset();
            } else {
                alert('Por favor, corrija los errores en el formulario.');
            }
        });
    }

    if (loginForm) {
        function validarEmailLogin(email) {
            if (!email || email.trim() === '') {
                return 'El email es obligatorio';
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                return 'Ingrese un email válido';
            }
            
            return null;
        }

        function validarContrasenaLogin(contrasena) {
            if (!contrasena || contrasena.trim() === '') {
                return 'La contraseña es obligatoria';
            }
            
            if (contrasena.length < 6) {
                return 'La contraseña debe tener al menos 6 caracteres';
            }
            
            return null;
        }

        const emailLoginInput = loginForm.querySelector('input[name="email"]');
        const contrasenaLoginInput = loginForm.querySelector('input[name="contrasena"]');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let esValido = true;
            
            const campos = loginForm.querySelectorAll('input');
            campos.forEach(campo => limpiarError(campo));
            
            if (emailLoginInput) {
                const errorEmail = validarEmailLogin(emailLoginInput.value);
                if (errorEmail) {
                    mostrarError(emailLoginInput, errorEmail);
                    esValido = false;
                }
            }
            
            if (contrasenaLoginInput) {
                const errorContrasena = validarContrasenaLogin(contrasenaLoginInput.value);
                if (errorContrasena) {
                    mostrarError(contrasenaLoginInput, errorContrasena);
                    esValido = false;
                }
            }
            
            if (esValido) {
                alert('¡Inicio de sesión exitoso! Bienvenido a Level-up Gamer.');

                window.location.href = 'index.html';
            }
        });
    }
});