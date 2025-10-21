import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { productos } from '../data/productos';
import { aplicarDescuento } from '../data/descuentos';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useLocalStorage('carrito', []);
    const [codigoDescuento, setCodigoDescuento] = useLocalStorage('codigoDescuentoAplicado', '');

    // Agregar producto al carrito
    const agregarAlCarrito = (productoId, cantidad = 1) => {
        const producto = productos[productoId];
        if (!producto) {
            console.warn(`Producto con ID ${productoId} no encontrado`);
            return;
        }

        if (!producto.disponible || producto.stock <= 0) {
            console.warn(`Producto ${producto.nombre} no disponible`);
            return;
        }

        setCarrito(prevCarrito => {
            const itemExistente = prevCarrito.find(item => item.id === productoId);
            
            if (itemExistente) {
                const nuevaCantidad = itemExistente.cantidad + cantidad;
                if (nuevaCantidad > producto.stock) {
                    console.warn(`No hay suficiente stock para ${producto.nombre}. Stock disponible: ${producto.stock}`);
                    return prevCarrito;
                }
                return prevCarrito.map(item =>
                    item.id === productoId
                        ? { ...item, cantidad: nuevaCantidad }
                        : item
                );
            } else {
                if (cantidad > producto.stock) {
                    console.warn(`No hay suficiente stock para ${producto.nombre}. Stock disponible: ${producto.stock}`);
                    return prevCarrito;
                }
                return [...prevCarrito, {
                    id: productoId,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    imagen: producto.imagen,
                    categoria: producto.categoria,
                    cantidad: cantidad
                }];
            }
        });
    };

    // Eliminar producto del carrito
    const eliminarDelCarrito = (index) => {
        setCarrito(prevCarrito => prevCarrito.filter((_, i) => i !== index));
    };

    // Actualizar cantidad de un producto
    const actualizarCantidad = (index, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
            eliminarDelCarrito(index);
            return;
        }

        if (nuevaCantidad > 10) {
            nuevaCantidad = 10;
        }

        setCarrito(prevCarrito =>
            prevCarrito.map((item, i) =>
                i === index ? { ...item, cantidad: nuevaCantidad } : item
            )
        );
    };

    // Vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setCodigoDescuento('');
    };

    // Aplicar código de descuento
    const aplicarCodigoDescuento = (codigo) => {
        setCodigoDescuento(codigo);
    };

    // Remover código de descuento
    const removerCodigoDescuento = () => {
        setCodigoDescuento('');
    };

    // Calcular subtotal
    const calcularSubtotal = () => {
        return carrito.reduce((total, item) => {
            const producto = productos[item.id];
            return total + (producto ? producto.precio * item.cantidad : 0);
        }, 0);
    };

    // Calcular costo de envío
    const calcularEnvio = (subtotal) => {
        return subtotal >= 100000 ? 0 : 5000;
    };

    // Calcular descuento
    const calcularDescuento = (subtotal) => {
        if (codigoDescuento) {
            return aplicarDescuento(subtotal, codigoDescuento);
        }
        return 0;
    };

    // Calcular total
    const calcularTotal = () => {
        const subtotal = calcularSubtotal();
        const envio = calcularEnvio(subtotal);
        const descuento = calcularDescuento(subtotal);
        return subtotal + envio - descuento;
    };

    // Obtener cantidad total de items
    const obtenerCantidadTotal = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    };

    // Verificar si un producto está en el carrito
    const estaEnCarrito = (productoId) => {
        return carrito.some(item => item.id === productoId);
    };

    // Limpiar productos inválidos del carrito
    const limpiarProductosInvalidos = () => {
        setCarrito(prevCarrito => {
            return prevCarrito.filter(item => {
                const producto = productos[item.id];
                return producto && producto.disponible && producto.stock > 0;
            });
        });
    };

    // Efecto para limpiar productos inválidos al cargar el contexto
    useEffect(() => {
        limpiarProductosInvalidos();
    }, []);

    const value = {
        carrito,
        codigoDescuento,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        aplicarCodigoDescuento,
        removerCodigoDescuento,
        calcularSubtotal,
        calcularEnvio,
        calcularDescuento,
        calcularTotal,
        obtenerCantidadTotal,
        estaEnCarrito,
        limpiarProductosInvalidos
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
