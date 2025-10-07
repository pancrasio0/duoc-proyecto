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
 * Verifica si un email es de DuocUC
 * @param {string} email - Email a verificar
 * @returns {boolean}
 */
export const esDuocEmail = (email) => {
    return email.includes('@duoc.cl') || email.includes('@profesor.duoc.cl') || email.includes('@duocuc.cl');
};
