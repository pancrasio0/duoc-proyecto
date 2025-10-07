/**
 * Formatea un número como precio en pesos chilenos
 * @param {number} precio - El precio a formatear
 * @returns {string} - Precio formateado
 */
export const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(precio);
};

/**
 * Formatea una fecha
 * @param {Date|string} fecha - La fecha a formatear
 * @returns {string} - Fecha formateada
 */
export const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
};

/**
 * Formatea un RUN chileno
 * @param {string} run - RUN sin formato
 * @returns {string} - RUN formateado (XX.XXX.XXX-X)
 */
export const formatearRUN = (run) => {
    const cleaned = run.replace(/[^0-9kK]/g, '');
    if (cleaned.length < 2) return cleaned;
    
    const dv = cleaned.slice(-1);
    const numero = cleaned.slice(0, -1);
    
    return `${numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}-${dv}`;
};

/**
 * Capitaliza la primera letra de cada palabra
 * @param {string} str - String a capitalizar
 * @returns {string} - String capitalizado
 */
export const capitalize = (str) => {
    return str.replace(/\b\w/g, l => l.toUpperCase());
};
