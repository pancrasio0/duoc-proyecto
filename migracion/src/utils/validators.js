/**
 * Valida un nombre completo (mínimo 2 palabras)
 * @param {string} nombre - Nombre a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarNombre = (nombre) => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const palabras = nombre.trim().split(/\s+/);
    
    if (nombre.trim().length < 2) {
        return { valid: false, error: 'El nombre debe tener al menos 2 caracteres' };
    }
    
    if (palabras.length < 2) {
        return { valid: false, error: 'Debe ingresar nombre y apellido' };
    }
    
    if (!nombreRegex.test(nombre)) {
        return { valid: false, error: 'El nombre solo puede contener letras y espacios' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Ingrese un email válido' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un email con dominios específicos (DuocUC, Gmail)
 * @param {string} email - Email a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarEmailConDominios = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Ingrese un email válido' };
    }
    
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const esValido = dominiosPermitidos.some(dominio => email.endsWith(dominio));
    
    if (!esValido) {
        return { valid: false, error: 'Solo se permiten emails de DuocUC o Gmail' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida una contraseña segura
 * @param {string} contrasena - Contraseña a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarContrasena = (contrasena) => {
    if (contrasena.length < 8) {
        return { valid: false, error: 'La contraseña debe tener al menos 8 caracteres' };
    }
    
    if (!/[A-Z]/.test(contrasena)) {
        return { valid: false, error: 'La contraseña debe contener al menos una letra mayúscula' };
    }
    
    if (!/[a-z]/.test(contrasena)) {
        return { valid: false, error: 'La contraseña debe contener al menos una letra minúscula' };
    }
    
    if (!/\d/.test(contrasena)) {
        return { valid: false, error: 'La contraseña debe contener al menos un número' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida una contraseña simple (para login)
 * @param {string} contrasena - Contraseña a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarContrasenaSimple = (contrasena) => {
    if (!contrasena || contrasena.trim() === '') {
        return { valid: false, error: 'La contraseña es obligatoria' };
    }
    
    if (contrasena.length < 6) {
        return { valid: false, error: 'La contraseña debe tener al menos 6 caracteres' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un teléfono chileno
 * @param {string} telefono - Teléfono a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarTelefono = (telefono) => {
    if (telefono.trim() === '') {
        return { valid: true, error: null }; // Opcional
    }
    
    const telefonoRegex = /^(\+56\s?)?[2-9]\d{8}$/;
    
    if (!telefonoRegex.test(telefono.replace(/\s/g, ''))) {
        return { valid: false, error: 'Ingrese un teléfono válido (formato: +56 9 XXXX XXXX)' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida una fecha de nacimiento (mayor de 18 años)
 * @param {string} valorFecha - Fecha en formato YYYY-MM-DD
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarFechaNacimiento = (valorFecha) => {
    if (!valorFecha) {
        return { valid: false, error: 'La fecha de nacimiento es obligatoria' };
    }

    const fecha = new Date(valorFecha);
    if (isNaN(fecha.getTime())) {
        return { valid: false, error: 'Ingrese una fecha válida' };
    }

    const hoy = new Date();
    fecha.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);

    if (fecha > hoy) {
        return { valid: false, error: 'La fecha no puede ser futura' };
    }

    let edad = hoy.getFullYear() - fecha.getFullYear();
    const m = hoy.getMonth() - fecha.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }

    if (edad < 18) {
        return { valid: false, error: 'Debes ser mayor de 18 años' };
    }

    return { valid: true, error: null };
};

/**
 * Valida un RUN chileno
 * @param {string} run - RUN a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarRUN = (run) => {
    // Limpiar el RUN de puntos y guiones
    const cleaned = run.replace(/[.\-]/g, '');
    
    if (cleaned.length < 7 || cleaned.length > 9) {
        return { valid: false, error: 'El RUN debe tener entre 7 y 9 caracteres' };
    }
    
    // Extraer número y dígito verificador
    const numero = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1).toLowerCase();
    
    // Validar que el número sea numérico
    if (!/^\d+$/.test(numero)) {
        return { valid: false, error: 'El RUN debe contener solo números' };
    }
    
    // Calcular dígito verificador
    let suma = 0;
    let multiplo = 2;
    
    for (let i = numero.length - 1; i >= 0; i--) {
        suma += parseInt(numero[i]) * multiplo;
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }
    
    const dvEsperado = 11 - (suma % 11);
    let dvCalculado;
    
    if (dvEsperado === 11) {
        dvCalculado = '0';
    } else if (dvEsperado === 10) {
        dvCalculado = 'k';
    } else {
        dvCalculado = dvEsperado.toString();
    }
    
    if (dv !== dvCalculado) {
        return { valid: false, error: 'El RUN ingresado no es válido' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un código de producto
 * @param {string} codigo - Código a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarCodigoProducto = (codigo) => {
    if (!codigo || codigo.trim() === '') {
        return { valid: false, error: 'El código es obligatorio' };
    }
    
    if (codigo.length < 3) {
        return { valid: false, error: 'El código debe tener al menos 3 caracteres' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un precio
 * @param {number|string} precio - Precio a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarPrecio = (precio) => {
    const precioNum = parseFloat(precio);
    
    if (isNaN(precioNum)) {
        return { valid: false, error: 'El precio debe ser un número válido' };
    }
    
    if (precioNum < 0) {
        return { valid: false, error: 'El precio no puede ser negativo' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un stock
 * @param {number|string} stock - Stock a validar
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarStock = (stock) => {
    const stockNum = parseFloat(stock);
    
    if (isNaN(stockNum)) {
        return { valid: false, error: 'El stock debe ser un número válido' };
    }
    
    if (!Number.isInteger(stockNum)) {
        return { valid: false, error: 'El stock debe ser un número entero' };
    }
    
    if (stockNum < 0) {
        return { valid: false, error: 'El stock no puede ser negativo' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un archivo de imagen
 * @param {File} archivo - Archivo a validar
 * @param {number} maxSizeMB - Tamaño máximo en MB
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarImagen = (archivo, maxSizeMB = 2) => {
    if (!archivo) {
        return { valid: true, error: null }; // Opcional
    }
    
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    if (!tiposPermitidos.includes(archivo.type)) {
        return { valid: false, error: 'Solo se permiten archivos JPG, PNG, GIF o WebP' };
    }
    
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (archivo.size > maxSizeBytes) {
        return { valid: false, error: `El archivo no puede ser mayor a ${maxSizeMB}MB` };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida que dos contraseñas coincidan
 * @param {string} contrasena - Contraseña original
 * @param {string} confirmarContrasena - Contraseña de confirmación
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarCoincidenciaContrasenas = (contrasena, confirmarContrasena) => {
    if (contrasena !== confirmarContrasena) {
        return { valid: false, error: 'Las contraseñas deben coincidir' };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida un campo requerido
 * @param {string} valor - Valor a validar
 * @param {string} nombreCampo - Nombre del campo para el mensaje de error
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarCampoRequerido = (valor, nombreCampo = 'Este campo') => {
    if (!valor || valor.trim() === '') {
        return { valid: false, error: `${nombreCampo} es obligatorio` };
    }
    
    return { valid: true, error: null };
};

/**
 * Valida la longitud de un texto
 * @param {string} texto - Texto a validar
 * @param {number} minLength - Longitud mínima
 * @param {number} maxLength - Longitud máxima
 * @param {string} nombreCampo - Nombre del campo para el mensaje de error
 * @returns {object} - { valid: boolean, error: string }
 */
export const validarLongitudTexto = (texto, minLength, maxLength, nombreCampo = 'Este campo') => {
    if (texto.length < minLength) {
        return { valid: false, error: `${nombreCampo} debe tener al menos ${minLength} caracteres` };
    }
    
    if (texto.length > maxLength) {
        return { valid: false, error: `${nombreCampo} no puede tener más de ${maxLength} caracteres` };
    }
    
    return { valid: true, error: null };
};

/**
 * Verifica si un email es de DuocUC
 * @param {string} email - Email a verificar
 * @returns {boolean}
 */
export const esDuocEmail = (email) => {
    return email.includes('@duoc.cl') || email.includes('@profesor.duoc.cl') || email.includes('@duocuc.cl');
};

/**
 * Valida un formulario completo de registro
 * @param {object} formData - Datos del formulario
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validarFormularioRegistro = (formData) => {
    const errors = {};
    let isValid = true;
    
    // Validar nombre
    const nombreValidation = validarNombre(formData.nombre_completo);
    if (!nombreValidation.valid) {
        errors.nombre_completo = nombreValidation.error;
        isValid = false;
    }
    
    // Validar email
    const emailValidation = validarEmail(formData.email);
    if (!emailValidation.valid) {
        errors.email = emailValidation.error;
        isValid = false;
    }
    
    // Validar contraseña
    const contrasenaValidation = validarContrasena(formData.contrasena);
    if (!contrasenaValidation.valid) {
        errors.contrasena = contrasenaValidation.error;
        isValid = false;
    }
    
    // Validar confirmación de contraseña
    const confirmarValidation = validarCoincidenciaContrasenas(formData.contrasena, formData.confirmar_contrasena);
    if (!confirmarValidation.valid) {
        errors.confirmar_contrasena = confirmarValidation.error;
        isValid = false;
    }
    
    // Validar teléfono (opcional)
    if (formData.telefono) {
        const telefonoValidation = validarTelefono(formData.telefono);
        if (!telefonoValidation.valid) {
            errors.telefono = telefonoValidation.error;
            isValid = false;
        }
    }
    
    // Validar fecha de nacimiento
    const fechaValidation = validarFechaNacimiento(formData.fecha_nacimiento);
    if (!fechaValidation.valid) {
        errors.fecha_nacimiento = fechaValidation.error;
        isValid = false;
    }
    
    // Validar país
    const paisValidation = validarCampoRequerido(formData.pais, 'El país');
    if (!paisValidation.valid) {
        errors.pais = paisValidation.error;
        isValid = false;
    }
    
    // Validar ciudad
    const ciudadValidation = validarCampoRequerido(formData.ciudad, 'La ciudad');
    if (!ciudadValidation.valid) {
        errors.ciudad = ciudadValidation.error;
        isValid = false;
    }
    
    return { valid: isValid, errors };
};

/**
 * Valida un formulario de login
 * @param {object} formData - Datos del formulario
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validarFormularioLogin = (formData) => {
    const errors = {};
    let isValid = true;
    
    // Validar email
    const emailValidation = validarEmail(formData.email);
    if (!emailValidation.valid) {
        errors.email = emailValidation.error;
        isValid = false;
    }
    
    // Validar contraseña
    const contrasenaValidation = validarContrasenaSimple(formData.contrasena);
    if (!contrasenaValidation.valid) {
        errors.contrasena = contrasenaValidation.error;
        isValid = false;
    }
    
    return { valid: isValid, errors };
};

/**
 * Valida un formulario de producto
 * @param {object} formData - Datos del formulario
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validarFormularioProducto = (formData) => {
    const errors = {};
    let isValid = true;
    
    // Validar código
    const codigoValidation = validarCodigoProducto(formData.codigo);
    if (!codigoValidation.valid) {
        errors.codigo = codigoValidation.error;
        isValid = false;
    }
    
    // Validar nombre
    const nombreValidation = validarCampoRequerido(formData.nombre, 'El nombre');
    if (!nombreValidation.valid) {
        errors.nombre = nombreValidation.error;
        isValid = false;
    }
    
    // Validar categoría
    const categoriaValidation = validarCampoRequerido(formData.categoria, 'La categoría');
    if (!categoriaValidation.valid) {
        errors.categoria = categoriaValidation.error;
        isValid = false;
    }
    
    // Validar precio
    const precioValidation = validarPrecio(formData.precio);
    if (!precioValidation.valid) {
        errors.precio = precioValidation.error;
        isValid = false;
    }
    
    // Validar stock
    const stockValidation = validarStock(formData.stock);
    if (!stockValidation.valid) {
        errors.stock = stockValidation.error;
        isValid = false;
    }
    
    // Validar stock crítico (opcional)
    if (formData.stock_critico) {
        const stockCriticoValidation = validarStock(formData.stock_critico);
        if (!stockCriticoValidation.valid) {
            errors.stock_critico = stockCriticoValidation.error;
            isValid = false;
        }
    }
    
    return { valid: isValid, errors };
};