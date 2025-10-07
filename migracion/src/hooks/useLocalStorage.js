import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar localStorage
 * @param {string} key - Clave en localStorage
 * @param {*} initialValue - Valor inicial
 * @returns {[*, function]} - [valor, función setter]
 */
export const useLocalStorage = (key, initialValue) => {
    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Obtener del localStorage
            const item = window.localStorage.getItem(key);
            // Parsear el JSON o retornar el valor inicial
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error al leer localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Función para actualizar el valor
    const setValue = (value) => {
        try {
            // Permitir que value sea una función como en useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            
            // Guardar en estado
            setStoredValue(valueToStore);
            
            // Guardar en localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error al guardar en localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
