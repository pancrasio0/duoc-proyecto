// Datos de categorías de productos
const categoriasProductos = [
    "Electrónicos",
    "Videojuegos",
    "Accesorios Gaming",
    "Computación",
    "Audio y Sonido",
    "Periféricos",
    "Móviles y Tablets",
    "Consolas",
    "Juegos de Mesa",
    "Merchandising",
    "Ropa Gaming",
    "Decoración",
    "Libros y Manga",
    "Figuras y Coleccionables",
    "Otros"
];

// Datos de regiones y comunas de Chile
const regionesYComunas = {
    "Metropolitana": ["Santiago", "Las Condes", "Providencia", "Ñuñoa", "Maipú", "La Florida", "Puente Alto", "San Bernardo", "Pudahuel", "Quilicura", "Lo Barnechea", "Vitacura", "La Reina", "Macul", "San Joaquín", "La Granja", "El Bosque", "Pedro Aguirre Cerda", "San Miguel", "San Ramón", "La Pintana", "El Monte", "Isla de Maipo", "Paine", "Tiltil", "Lampa", "Colina", "San José de Maipo", "Pirque", "San Pedro", "Alhué", "Calera de Tango", "Curacaví", "María Pinto", "Melipilla", "Padre Hurtado", "Peñaflor", "Talagante"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "San Antonio", "Cartagena", "El Tabo", "El Quisco", "Algarrobo", "Santo Domingo", "San Felipe", "Putaendo", "Santa María", "Catemu", "Panquehue", "Llay-Llay", "Calle Larga", "Los Andes", "San Esteban", "Rinconada", "Quillota", "La Cruz", "La Calera", "Nogales", "Hijuelas", "Petorca", "La Ligua", "Cabildo", "Papudo", "Zapallar", "Puchuncaví", "Quintero", "Casablanca", "Limache", "Olmué", "Juan Fernández", "Isla de Pascua"],
    "Biobío": ["Concepción", "Talcahuano", "Hualpén", "Chiguayante", "San Pedro de la Paz", "Coronel", "Lota", "Arauco", "Curanilahue", "Lebu", "Los Álamos", "Cañete", "Contulmo", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Araucanía": ["Temuco", "Padre Las Casas", "Villarrica", "Pucón", "Angol", "Renaico", "Collipulli", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Traiguén", "Victoria", "Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica"],
    "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Chaitén", "Futaleufú", "Hualaihué", "Palena", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Valdivia", "Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Huasco", "Alto del Carmen", "Freirina", "Vallenar"],
    "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
    "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Ñuble": ["Chillán", "Bulnes", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Aysén": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Chile Chico", "Río Ibáñez", "Cochrane", "O'Higgins", "Tortel", "Villa O'Higgins"],
    "Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
};

document.addEventListener('DOMContentLoaded', function() {
    initializeModalFunctions();
    loadRegionsAndComunas();
});

function initializeModalFunctions() {
    // Toggle para mostrar/ocultar contraseña
    const togglePasswordBtn = document.getElementById('togglePassword');
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function() {
            togglePasswordVisibility('contrasena', this);
        });
    }

    // Toggle para mostrar/ocultar confirmar contraseña
    const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPassword');
    if (toggleConfirmPasswordBtn) {
        toggleConfirmPasswordBtn.addEventListener('click', function() {
            togglePasswordVisibility('confirmarContrasena', this);
        });
    }

    // Validación de contraseñas
    const confirmarContrasenaField = document.getElementById('confirmarContrasena');
    if (confirmarContrasenaField) {
        confirmarContrasenaField.addEventListener('input', function() {
            validatePasswordMatch();
        });
    }

    // Guardar usuario
    const guardarUsuarioBtn = document.getElementById('guardarUsuario');
    if (guardarUsuarioBtn) {
        guardarUsuarioBtn.addEventListener('click', function() {
            saveUser();
        });
    }

    // Limpiar formulario al cerrar modal
    const nuevoUsuarioModal = document.getElementById('nuevoUsuarioModal');
    if (nuevoUsuarioModal) {
        nuevoUsuarioModal.addEventListener('hidden.bs.modal', function() {
            resetForm();
        });
    }
}


function togglePasswordVisibility(fieldId, button) {
    const passwordField = document.getElementById(fieldId);
    const icon = button.querySelector('i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}


function validatePasswordMatch() {
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    
    if (contrasena !== confirmarContrasena) {
        document.getElementById('confirmarContrasena').setCustomValidity('Las contraseñas no coinciden');
    } else {
        document.getElementById('confirmarContrasena').setCustomValidity('');
    }
}


function saveUser() {
    const form = document.getElementById('nuevoUsuarioForm');
    
    if (form.checkValidity()) {
        // Validar contraseñas antes de enviar
        validatePasswordMatch();
        
        if (form.checkValidity()) {
            // Aquí iría la lógica para guardar el usuario
            // Por ejemplo, enviar datos al servidor
            const formData = new FormData(form);
            const userData = Object.fromEntries(formData);
            
            console.log('Datos del usuario:', userData);
            
            // Mostrar mensaje de éxito
            showSuccessMessage('Usuario creado exitosamente');
            
            // Cerrar modal y limpiar formulario
            const modal = bootstrap.Modal.getInstance(document.getElementById('nuevoUsuarioModal'));
            modal.hide();
            resetForm();
        } else {
            form.reportValidity();
        }
    } else {
        form.reportValidity();
    }
}


function showSuccessMessage(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Remover automáticamente después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}


function resetForm() {
    const form = document.getElementById('nuevoUsuarioForm');
    if (form) {
        form.reset();
        
        // Resetear iconos de contraseña
        const passwordIcons = document.querySelectorAll('#togglePassword i, #toggleConfirmPassword i');
        passwordIcons.forEach(icon => {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        });
        
        // Resetear campos de contraseña a tipo password
        const passwordFields = document.querySelectorAll('#contrasena, #confirmarContrasena');
        passwordFields.forEach(field => {
            field.type = 'password';
        });
        
        // Limpiar validaciones personalizadas
        const confirmarField = document.getElementById('confirmarContrasena');
        if (confirmarField) {
            confirmarField.setCustomValidity('');
        }
        
        // Resetear selects de región y comuna
        const regionSelect = document.getElementById('region');
        const comunaSelect = document.getElementById('comuna');
        if (regionSelect) regionSelect.value = '';
        if (comunaSelect) {
            comunaSelect.value = '';
            comunaSelect.disabled = true;
            comunaSelect.innerHTML = '<option value="">Primero seleccione una región</option>';
        }
        
        // Limpiar clases de validación
        const allFields = form.querySelectorAll('input, select, textarea');
        allFields.forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
    }
}


function validateChileanPhone(phone) {
    const phoneRegex = /^\+56\s9\s\d{4}\s\d{4}$/;
    return phoneRegex.test(phone);
}


function formatPhoneInput() {
    const phoneField = document.getElementById('telefono');
    if (phoneField) {
        phoneField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Solo números
            
            if (value.length > 0) {
                if (value.startsWith('56')) {
                    value = '+' + value;
                } else if (value.startsWith('9')) {
                    value = '+56 ' + value;
                } else if (!value.startsWith('+56')) {
                    value = '+56 9 ' + value;
                }
                
                // Formatear con espacios
                if (value.length > 4) {
                    value = value.replace(/(\+56\s9)(\d{4})(\d{4})/, '$1 $2 $3');
                }
            }
            
            e.target.value = value;
        });
    }
}

// Inicializar formateo de teléfono cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    formatPhoneInput();
});

function validateCompleteForm() {
    const form = document.getElementById('nuevoUsuarioForm');
    const fields = form.querySelectorAll('input[required], input[type="checkbox"][required]');
    let isValid = true;
    
    fields.forEach(field => {
        if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    // Validación específica del teléfono
    const phoneField = document.getElementById('telefono');
    if (phoneField && !validateChileanPhone(phoneField.value)) {
        phoneField.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}


function setupRealTimeValidation() {
    const form = document.getElementById('nuevoUsuarioForm');
    if (form) {
        const fields = form.querySelectorAll('input[required]');
        
        fields.forEach(field => {
            field.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
    }
}

// Inicializar validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    setupRealTimeValidation();
});

/**
 * Carga las regiones y comunas en los selects
 */
function loadRegionsAndComunas() {
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');
    
    if (regionSelect && comunaSelect) {
        // Cargar regiones
        Object.keys(regionesYComunas).forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });
        
        // Event listener para cambio de región
        regionSelect.addEventListener('change', function() {
            const selectedRegion = this.value;
            comunaSelect.innerHTML = '<option value="">Seleccionar comuna</option>';
            
            if (selectedRegion) {
                comunaSelect.disabled = false;
                regionesYComunas[selectedRegion].forEach(comuna => {
                    const option = document.createElement('option');
                    option.value = comuna;
                    option.textContent = comuna;
                    comunaSelect.appendChild(option);
                });
            } else {
                comunaSelect.disabled = true;
                comunaSelect.innerHTML = '<option value="">Primero seleccione una región</option>';
            }
        });
    }
}

/**
 * Valida el formato del RUN chileno
 * @param {string} run - RUN a validar
 * @returns {boolean} - True si el RUN es válido
 */
function validateChileanRUT(run) {
    // Remover puntos y guiones
    const cleanRun = run.replace(/[.-]/g, '');
    
    // Verificar longitud (7-9 caracteres)
    if (cleanRun.length < 7 || cleanRun.length > 9) {
        return false;
    }
    
    // Verificar que solo contenga números y una K al final
    const rutRegex = /^[0-9]+[0-9kK]$/;
    if (!rutRegex.test(cleanRun)) {
        return false;
    }
    
    // Validar dígito verificador
    const body = cleanRun.slice(0, -1);
    const dv = cleanRun.slice(-1).toUpperCase();
    
    let sum = 0;
    let multiplier = 2;
    
    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    const calculatedDV = remainder < 2 ? remainder : 11 - remainder;
    const expectedDV = calculatedDV === 11 ? '0' : calculatedDV === 10 ? 'K' : calculatedDV.toString();
    
    return dv === expectedDV;
}

/**
 * Valida el formato del correo electrónico
 * @param {string} email - Correo a validar
 * @returns {boolean} - True si el correo es válido
 */
function validateEmailFormat(email) {
    const allowedDomains = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    return allowedDomains.some(domain => email.endsWith(domain));
}

/**
 * Valida el formulario completo con las nuevas reglas
 * @returns {boolean} - True si el formulario es válido
 */
function validateCompleteForm() {
    const form = document.getElementById('nuevoUsuarioForm');
    let isValid = true;
    
    // Validar RUN
    const runField = document.getElementById('run');
    if (runField && !validateChileanRUT(runField.value)) {
        runField.classList.add('is-invalid');
        isValid = false;
    } else if (runField) {
        runField.classList.remove('is-invalid');
        runField.classList.add('is-valid');
    }
    
    // Validar correo
    const emailField = document.getElementById('correo');
    if (emailField && (!emailField.value || !validateEmailFormat(emailField.value))) {
        emailField.classList.add('is-invalid');
        isValid = false;
    } else if (emailField) {
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
    }
    
    // Validar campos requeridos
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });
    
    // Validar contraseñas
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    
    if (contrasena !== confirmarContrasena) {
        document.getElementById('confirmarContrasena').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('confirmarContrasena').classList.remove('is-invalid');
        document.getElementById('confirmarContrasena').classList.add('is-valid');
    }
    
    return isValid;
}

/**
 * Configura validación en tiempo real para los nuevos campos
 */
function setupRealTimeValidation() {
    const form = document.getElementById('nuevoUsuarioForm');
    if (form) {
        // Validación del RUN
        const runField = document.getElementById('run');
        if (runField) {
            runField.addEventListener('blur', function() {
                if (this.value && validateChileanRUT(this.value)) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else if (this.value) {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
        
        // Validación del correo
        const emailField = document.getElementById('correo');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                if (this.value && validateEmailFormat(this.value)) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else if (this.value) {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
        
        // Validación de campos de texto con longitud máxima
        const textFields = form.querySelectorAll('input[type="text"], textarea');
        textFields.forEach(field => {
            field.addEventListener('input', function() {
                const maxLength = this.getAttribute('maxlength');
                if (maxLength && this.value.length > maxLength) {
                    this.value = this.value.substring(0, maxLength);
                }
            });
            
            field.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else if (this.hasAttribute('required')) {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
        
        // Validación de selects
        const selectFields = form.querySelectorAll('select[required]');
        selectFields.forEach(field => {
            field.addEventListener('change', function() {
                if (this.value) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
    }
}

/**
 * Actualiza la función saveUser con las nuevas validaciones
 */
function saveUser() {
    const form = document.getElementById('nuevoUsuarioForm');
    
    if (validateCompleteForm()) {
        // Recopilar datos del formulario
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);
        
        console.log('Datos del usuario:', userData);
        
        // Mostrar mensaje de éxito
        showSuccessMessage('Usuario creado exitosamente');
        
        // Cerrar modal y limpiar formulario
        const modal = bootstrap.Modal.getInstance(document.getElementById('nuevoUsuarioModal'));
        modal.hide();
        resetForm();
    } else {
        // Mostrar mensaje de error
        showErrorMessage('Por favor, corrija los errores en el formulario');
    }
}

/**
 * Muestra un mensaje de error
 * @param {string} message - Mensaje a mostrar
 */
function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Remover automáticamente después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}
