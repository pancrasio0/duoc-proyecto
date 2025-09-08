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

// ==================== FUNCIONES DEL MODAL DE PRODUCTOS ====================

/**
 * Inicializa las funcionalidades del modal de productos
 */
function initializeProductModalFunctions() {
    // Guardar producto
    const guardarProductoBtn = document.getElementById('guardarProducto');
    if (guardarProductoBtn) {
        guardarProductoBtn.addEventListener('click', function() {
            saveProduct();
        });
    }

    // Limpiar formulario al cerrar modal
    const nuevoProductoModal = document.getElementById('nuevoProductoModal');
    if (nuevoProductoModal) {
        nuevoProductoModal.addEventListener('hidden.bs.modal', function() {
            resetProductForm();
        });
    }

    // Configurar validaciones en tiempo real para productos
    setupProductRealTimeValidation();
}

/**
 * Carga las categorías de productos en el select
 */
function loadProductCategories() {
    const categoriaSelect = document.getElementById('categoriaProducto');
    
    if (categoriaSelect) {
        categoriasProductos.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria;
            option.textContent = categoria;
            categoriaSelect.appendChild(option);
        });
    }
}

/**
 * Valida el formulario de producto completo
 * @returns {boolean} - True si el formulario es válido
 */
function validateProductForm() {
    const form = document.getElementById('nuevoProductoForm');
    let isValid = true;
    
    // Validar campos requeridos
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });
    
    // Validación específica del código (mínimo 3 caracteres)
    const codigoField = document.getElementById('codigoProducto');
    if (codigoField && codigoField.value.length < 3) {
        codigoField.classList.add('is-invalid');
        codigoField.classList.remove('is-valid');
        isValid = false;
    } else if (codigoField && codigoField.value.length >= 3) {
        codigoField.classList.remove('is-invalid');
        codigoField.classList.add('is-valid');
    }
    
    // Validación del precio (debe ser >= 0)
    const precioField = document.getElementById('precioProducto');
    if (precioField && (precioField.value < 0 || precioField.value === '')) {
        precioField.classList.add('is-invalid');
        precioField.classList.remove('is-valid');
        isValid = false;
    } else if (precioField && precioField.value >= 0) {
        precioField.classList.remove('is-invalid');
        precioField.classList.add('is-valid');
    }
    
    // Validación del stock (debe ser >= 0 y entero)
    const stockField = document.getElementById('stockProducto');
    if (stockField && (stockField.value < 0 || stockField.value === '' || !Number.isInteger(parseFloat(stockField.value)))) {
        stockField.classList.add('is-invalid');
        stockField.classList.remove('is-valid');
        isValid = false;
    } else if (stockField && stockField.value >= 0 && Number.isInteger(parseFloat(stockField.value))) {
        stockField.classList.remove('is-invalid');
        stockField.classList.add('is-valid');
    }
    
    // Validación del stock crítico (debe ser entero si se proporciona)
    const stockCriticoField = document.getElementById('stockCriticoProducto');
    if (stockCriticoField && stockCriticoField.value !== '' && (!Number.isInteger(parseFloat(stockCriticoField.value)) || stockCriticoField.value < 0)) {
        stockCriticoField.classList.add('is-invalid');
        stockCriticoField.classList.remove('is-valid');
        isValid = false;
    } else if (stockCriticoField) {
        stockCriticoField.classList.remove('is-invalid');
        stockCriticoField.classList.add('is-valid');
    }
    
    // Validación de la imagen (formato correcto si se proporciona)
    const imagenField = document.getElementById('imagenProducto');
    if (imagenField && imagenField.files.length > 0) {
        const file = imagenField.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            imagenField.classList.add('is-invalid');
            imagenField.classList.remove('is-valid');
            isValid = false;
        } else {
            imagenField.classList.remove('is-invalid');
            imagenField.classList.add('is-valid');
        }
    }
    
    return isValid;
}

/**
 * Configura validación en tiempo real para el formulario de productos
 */
function setupProductRealTimeValidation() {
    const form = document.getElementById('nuevoProductoForm');
    if (form) {
        // Validación del código de producto
        const codigoField = document.getElementById('codigoProducto');
        if (codigoField) {
            codigoField.addEventListener('input', function() {
                if (this.value.length >= 3) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else if (this.value.length > 0) {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
        
        // Validación del nombre
        const nombreField = document.getElementById('nombreProducto');
        if (nombreField) {
            nombreField.addEventListener('input', function() {
                const maxLength = this.getAttribute('maxlength');
                if (maxLength && this.value.length > maxLength) {
                    this.value = this.value.substring(0, maxLength);
                }
            });
            
            nombreField.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        }
        
        // Validación de la descripción
        const descripcionField = document.getElementById('descripcionProducto');
        if (descripcionField) {
            descripcionField.addEventListener('input', function() {
                const maxLength = this.getAttribute('maxlength');
                if (maxLength && this.value.length > maxLength) {
                    this.value = this.value.substring(0, maxLength);
                }
            });
        }
        
        // Validación del precio
        const precioField = document.getElementById('precioProducto');
        if (precioField) {
            precioField.addEventListener('input', function() {
                if (this.value >= 0) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        }
        
        // Validación del stock
        const stockField = document.getElementById('stockProducto');
        if (stockField) {
            stockField.addEventListener('input', function() {
                const value = parseFloat(this.value);
                if (this.value >= 0 && Number.isInteger(value)) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else if (this.value !== '') {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
        
        // Validación del stock crítico
        const stockCriticoField = document.getElementById('stockCriticoProducto');
        if (stockCriticoField) {
            stockCriticoField.addEventListener('input', function() {
                if (this.value === '' || (this.value >= 0 && Number.isInteger(parseFloat(this.value)))) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        }
        
        // Validación de la imagen
        const imagenField = document.getElementById('imagenProducto');
        if (imagenField) {
            imagenField.addEventListener('change', function() {
                if (this.files.length > 0) {
                    const file = this.files[0];
                    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                    if (allowedTypes.includes(file.type)) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                    }
                } else {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
        
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
 * Guarda el nuevo producto
 */
function saveProduct() {
    const form = document.getElementById('nuevoProductoForm');
    
    if (validateProductForm()) {
        // Recopilar datos del formulario
        const formData = new FormData(form);
        const productData = Object.fromEntries(formData);
        
        // Agregar información adicional
        productData.activo = document.getElementById('productoActivo').checked;
        
        console.log('Datos del producto:', productData);
        
        // Mostrar mensaje de éxito
        showSuccessMessage('Producto creado exitosamente');
        
        // Cerrar modal y limpiar formulario
        const modal = bootstrap.Modal.getInstance(document.getElementById('nuevoProductoModal'));
        modal.hide();
        resetProductForm();
    } else {
        // Mostrar mensaje de error
        showErrorMessage('Por favor, corrija los errores en el formulario');
    }
}

/**
 * Resetea el formulario del modal de productos
 */
function resetProductForm() {
    const form = document.getElementById('nuevoProductoForm');
    if (form) {
        form.reset();
        
        // Limpiar clases de validación
        const allFields = form.querySelectorAll('input, select, textarea');
        allFields.forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
        
        // Resetear checkbox de producto activo
        const productoActivoCheckbox = document.getElementById('productoActivo');
        if (productoActivoCheckbox) {
            productoActivoCheckbox.checked = true;
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeProductModalFunctions();
    loadProductCategories();
});
