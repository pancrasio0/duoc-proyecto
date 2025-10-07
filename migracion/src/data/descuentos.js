// Códigos de descuento válidos
export const codigosDescuento = {
    'WELCOME10': { descuento: 0.10, descripcion: '10% de descuento' },
    'GAMER20': { descuento: 0.20, descripcion: '20% de descuento' },
    'LEVELUP15': { descuento: 0.15, descripcion: '15% de descuento' }
};

export const validarCodigoDescuento = (codigo) => {
    const codigoUpper = codigo.trim().toUpperCase();
    return codigosDescuento[codigoUpper] || null;
};

export const aplicarDescuento = (subtotal, codigo) => {
    const descuento = validarCodigoDescuento(codigo);
    if (descuento) {
        return subtotal * descuento.descuento;
    }
    return 0;
};
