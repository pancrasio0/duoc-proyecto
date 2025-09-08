// Datos de productos simulados
const productosSimulados = [
    {
        id: 1,
        codigo: "GAM001",
        nombre: "Mouse Gaming Logitech G502",
        categoria: "Periféricos",
        descripcion: "Mouse gaming de alta precisión con sensor óptico avanzado y 11 botones programables.",
        precio: 45000,
        stock: 25,
        stockCritico: 5,
        activo: true,
        imagen: "img/g502.png"
    },
    {
        id: 2,
        codigo: "AUD002",
        nombre: "Audífonos HyperX Cloud II",
        categoria: "Audio y Sonido",
        descripcion: "Audífonos gaming con sonido surround virtual 7.1 y micrófono desmontable.",
        precio: 65000,
        stock: 15,
        stockCritico: 3,
        activo: true,
        imagen: "img/hyperxcloud2.png"
    },
    {
        id: 3,
        codigo: "CON003",
        nombre: "Consola PlayStation 5",
        categoria: "Consolas",
        descripcion: "Consola de nueva generación con SSD ultra rápido y ray tracing.",
        precio: 450000,
        stock: 8,
        stockCritico: 2,
        activo: true,
        imagen: "img/ps5.png"
    },
    {
        id: 4,
        codigo: "JUE004",
        nombre: "Catan - Juego de Mesa",
        categoria: "Juegos de Mesa",
        descripcion: "Clásico juego de estrategia donde colonizas la isla de Catan.",
        precio: 25000,
        stock: 12,
        stockCritico: 4,
        activo: true,
        imagen: "img/catan.png"
    },
    {
        id: 5,
        codigo: "JUE005",
        nombre: "Carcassonne - Juego de Mesa",
        categoria: "Juegos de Mesa",
        descripcion: "Juego de colocación de losetas ambientado en la Francia medieval.",
        precio: 22000,
        stock: 18,
        stockCritico: 5,
        activo: true,
        imagen: "img/carcassonne.png"
    },
    {
        id: 6,
        codigo: "ACC006",
        nombre: "Mousepad Gaming RGB",
        categoria: "Accesorios Gaming",
        descripcion: "Mousepad con iluminación RGB y superficie optimizada para gaming.",
        precio: 15000,
        stock: 30,
        stockCritico: 8,
        activo: true,
        imagen: "img/mousepad.png"
    },
    {
        id: 7,
        codigo: "CON007",
        nombre: "Joystick Xbox Series X",
        categoria: "Periféricos",
        descripcion: "Control inalámbrico oficial para Xbox Series X con retroalimentación háptica.",
        precio: 55000,
        stock: 20,
        stockCritico: 5,
        activo: true,
        imagen: "img/joystick.png"
    },
    {
        id: 8,
        codigo: "COM008",
        nombre: "Notebook Gaming ASUS ROG",
        categoria: "Computación",
        descripcion: "Laptop gaming con RTX 4060, 16GB RAM y pantalla 144Hz.",
        precio: 1200000,
        stock: 5,
        stockCritico: 1,
        activo: true,
        imagen: "img/notebook.png"
    },
    {
        id: 9,
        codigo: "MER009",
        nombre: "Polera Gaming Level-Up",
        categoria: "Ropa Gaming",
        descripcion: "Polera de algodón con diseño gaming exclusivo de Level-Up.",
        precio: 12000,
        stock: 50,
        stockCritico: 10,
        activo: true,
        imagen: "img/polera.jpg"
    },
    {
        id: 10,
        codigo: "ACC010",
        nombre: "Silla Gaming Ergonómica",
        categoria: "Accesorios Gaming",
        descripcion: "Silla gaming con soporte lumbar y reposabrazos ajustables.",
        precio: 85000,
        stock: 12,
        stockCritico: 3,
        activo: true,
        imagen: "img/silla.png"
    },
    {
        id: 11,
        codigo: "ELE011",
        nombre: "Teclado Mecánico RGB",
        categoria: "Periféricos",
        descripcion: "Teclado mecánico con switches Cherry MX y retroiluminación RGB.",
        precio: 75000,
        stock: 22,
        stockCritico: 6,
        activo: false,
        imagen: ""
    },
    {
        id: 12,
        codigo: "AUD012",
        nombre: "Micrófono USB Condensador",
        categoria: "Audio y Sonido",
        descripcion: "Micrófono profesional para streaming y grabación de alta calidad.",
        precio: 45000,
        stock: 8,
        stockCritico: 2,
        activo: true,
        imagen: ""
    },
    {
        id: 13,
        codigo: "JUE013",
        nombre: "Monster Hunter World",
        categoria: "Videojuegos",
        descripcion: "Juego de acción y aventura para PlayStation 4 y PC.",
        precio: 35000,
        stock: 15,
        stockCritico: 4,
        activo: true,
        imagen: ""
    },
    {
        id: 14,
        codigo: "DEC014",
        nombre: "Lámpara LED Gaming",
        categoria: "Decoración",
        descripcion: "Lámpara LED con efectos de iluminación para setup gaming.",
        precio: 18000,
        stock: 25,
        stockCritico: 7,
        activo: true,
        imagen: ""
    },
    {
        id: 15,
        codigo: "FIG015",
        nombre: "Figura Funko Pop - Pikachu",
        categoria: "Figuras y Coleccionables",
        descripcion: "Figura coleccionable de Pikachu de la serie Funko Pop.",
        precio: 8000,
        stock: 40,
        stockCritico: 12,
        activo: true,
        imagen: ""
    }
];

// Variables globales
let productosFiltrados = [...productosSimulados];
let productosPorPagina = 10;
let paginaActual = 1;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeEditProductPage();
});

/**
 * Inicializa la página de editar productos
 */
function initializeEditProductPage() {
    loadProductCategories();
    loadProducts();
    setupEventListeners();
    setupEditModalValidation();
}

/**
 * Carga las categorías en los selects
 */
function loadProductCategories() {
    const categoriaFilter = document.getElementById('categoriaFilter');
    const editCategoriaSelect = document.getElementById('editCategoriaProducto');
    const categoriaSelect = document.getElementById('categoriaProducto');
    
    const selects = [categoriaFilter, editCategoriaSelect, categoriaSelect];
    
    selects.forEach(select => {
        if (select) {
            // Limpiar opciones existentes excepto la primera
            while (select.children.length > 1) {
                select.removeChild(select.lastChild);
            }
            
            categoriasProductos.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                select.appendChild(option);
            });
        }
    });
}

/**
 * Configura los event listeners
 */
function setupEventListeners() {
    // Filtro por categoría
    const categoriaFilter = document.getElementById('categoriaFilter');
    if (categoriaFilter) {
        categoriaFilter.addEventListener('change', filterProducts);
    }
    
    // Búsqueda
    const searchInput = document.getElementById('searchProduct');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }
    
    // Botón actualizar producto
    const actualizarBtn = document.getElementById('actualizarProducto');
    if (actualizarBtn) {
        actualizarBtn.addEventListener('click', updateProduct);
    }
}

/**
 * Carga los productos en la tabla
 */
function loadProducts() {
    const tbody = document.getElementById('productosTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosFiltrados.slice(inicio, fin);
    
    productosPagina.forEach(producto => {
        const row = createProductRow(producto);
        tbody.appendChild(row);
    });
    
    updatePagination();
}

/**
 * Crea una fila de producto para la tabla
 */
function createProductRow(producto) {
    const row = document.createElement('tr');
    
    const estadoClass = producto.activo ? 'badge bg-success' : 'badge bg-secondary';
    const estadoText = producto.activo ? 'Activo' : 'Inactivo';
    
    const stockClass = producto.stock <= producto.stockCritico ? 'text-danger fw-bold' : '';
    const stockText = producto.stock <= producto.stockCritico ? `${producto.stock} ⚠️` : producto.stock;
    
    row.innerHTML = `
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>$${producto.precio.toLocaleString()}</td>
        <td class="${stockClass}">${stockText}</td>
        <td><span class="${estadoClass}">${estadoText}</span></td>
        <td>
            <button class="btn btn-sm btn-outline-primary me-1" onclick="editProduct(${producto.id})" title="Editar">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${producto.id})" title="Eliminar">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    
    return row;
}

/**
 * Actualiza la paginación
 */
function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    pagination.innerHTML = '';
    
    if (totalPaginas <= 1) return;
    
    // Botón anterior
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${paginaActual === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="#" onclick="changePage(${paginaActual - 1})">
            <i class="fas fa-chevron-left"></i>
        </a>
    `;
    pagination.appendChild(prevLi);
    
    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === paginaActual ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }
    
    // Botón siguiente
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="#" onclick="changePage(${paginaActual + 1})">
            <i class="fas fa-chevron-right"></i>
        </a>
    `;
    pagination.appendChild(nextLi);
}

/**
 * Cambia de página
 */
function changePage(nuevaPagina) {
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
        paginaActual = nuevaPagina;
        loadProducts();
    }
}

/**
 * Filtra productos por categoría
 */
function filterProducts() {
    const categoria = document.getElementById('categoriaFilter').value;
    
    if (categoria === '') {
        productosFiltrados = [...productosSimulados];
    } else {
        productosFiltrados = productosSimulados.filter(producto => producto.categoria === categoria);
    }
    
    paginaActual = 1;
    loadProducts();
}

/**
 * Busca productos por nombre o código
 */
function searchProducts() {
    const searchTerm = document.getElementById('searchProduct').value.toLowerCase();
    
    if (searchTerm === '') {
        productosFiltrados = [...productosSimulados];
    } else {
        productosFiltrados = productosSimulados.filter(producto => 
            producto.nombre.toLowerCase().includes(searchTerm) ||
            producto.codigo.toLowerCase().includes(searchTerm)
        );
    }
    
    paginaActual = 1;
    loadProducts();
}

/**
 * Edita un producto
 */
function editProduct(id) {
    const producto = productosSimulados.find(p => p.id === id);
    if (!producto) return;
    
    // Llenar el formulario de edición
    document.getElementById('productoId').value = producto.id;
    document.getElementById('editCodigoProducto').value = producto.codigo;
    document.getElementById('editCategoriaProducto').value = producto.categoria;
    document.getElementById('editNombreProducto').value = producto.nombre;
    document.getElementById('editDescripcionProducto').value = producto.descripcion;
    document.getElementById('editPrecioProducto').value = producto.precio;
    document.getElementById('editStockProducto').value = producto.stock;
    document.getElementById('editStockCriticoProducto').value = producto.stockCritico;
    document.getElementById('editProductoActivo').checked = producto.activo;
    
    // Mostrar imagen actual si existe
    const imagenActual = document.getElementById('imagenActual');
    if (producto.imagen) {
        imagenActual.innerHTML = `
            <small class="text-muted">Imagen actual:</small><br>
            <img src="${producto.imagen}" alt="Imagen actual" class="img-thumbnail" style="max-width: 100px; max-height: 100px;">
        `;
    } else {
        imagenActual.innerHTML = '<small class="text-muted">Sin imagen</small>';
    }
    
    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('editarProductoModal'));
    modal.show();
}

/**
 * Actualiza un producto
 */
function updateProduct() {
    const form = document.getElementById('editarProductoForm');
    
    if (validateEditProductForm()) {
        const id = parseInt(document.getElementById('productoId').value);
        const productoIndex = productosSimulados.findIndex(p => p.id === id);
        
        if (productoIndex !== -1) {
            // Actualizar datos del producto
            productosSimulados[productoIndex] = {
                ...productosSimulados[productoIndex],
                codigo: document.getElementById('editCodigoProducto').value,
                categoria: document.getElementById('editCategoriaProducto').value,
                nombre: document.getElementById('editNombreProducto').value,
                descripcion: document.getElementById('editDescripcionProducto').value,
                precio: parseFloat(document.getElementById('editPrecioProducto').value),
                stock: parseInt(document.getElementById('editStockProducto').value),
                stockCritico: parseInt(document.getElementById('editStockCriticoProducto').value) || 0,
                activo: document.getElementById('editProductoActivo').checked
            };
            
            // Actualizar lista filtrada
            const categoria = document.getElementById('categoriaFilter').value;
            if (categoria === '') {
                productosFiltrados = [...productosSimulados];
            } else {
                productosFiltrados = productosSimulados.filter(p => p.categoria === categoria);
            }
            
            // Recargar tabla
            loadProducts();
            
            // Mostrar mensaje de éxito
            showSuccessMessage('Producto actualizado exitosamente');
            
            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('editarProductoModal'));
            modal.hide();
        }
    } else {
        showErrorMessage('Por favor, corrija los errores en el formulario');
    }
}

/**
 * Elimina un producto
 */
function deleteProduct(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        const index = productosSimulados.findIndex(p => p.id === id);
        if (index !== -1) {
            productosSimulados.splice(index, 1);
            
            // Actualizar lista filtrada
            const categoria = document.getElementById('categoriaFilter').value;
            if (categoria === '') {
                productosFiltrados = [...productosSimulados];
            } else {
                productosFiltrados = productosSimulados.filter(p => p.categoria === categoria);
            }
            
            // Ajustar página actual si es necesario
            const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
            if (paginaActual > totalPaginas && totalPaginas > 0) {
                paginaActual = totalPaginas;
            }
            
            // Recargar tabla
            loadProducts();
            
            // Mostrar mensaje de éxito
            showSuccessMessage('Producto eliminado exitosamente');
        }
    }
}

/**
 * Valida el formulario de edición
 */
function validateEditProductForm() {
    const form = document.getElementById('editarProductoForm');
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
    const codigoField = document.getElementById('editCodigoProducto');
    if (codigoField && codigoField.value.length < 3) {
        codigoField.classList.add('is-invalid');
        codigoField.classList.remove('is-valid');
        isValid = false;
    } else if (codigoField && codigoField.value.length >= 3) {
        codigoField.classList.remove('is-invalid');
        codigoField.classList.add('is-valid');
    }
    
    // Validación del precio (debe ser >= 0)
    const precioField = document.getElementById('editPrecioProducto');
    if (precioField && (precioField.value < 0 || precioField.value === '')) {
        precioField.classList.add('is-invalid');
        precioField.classList.remove('is-valid');
        isValid = false;
    } else if (precioField && precioField.value >= 0) {
        precioField.classList.remove('is-invalid');
        precioField.classList.add('is-valid');
    }
    
    // Validación del stock (debe ser >= 0 y entero)
    const stockField = document.getElementById('editStockProducto');
    if (stockField && (stockField.value < 0 || stockField.value === '' || !Number.isInteger(parseFloat(stockField.value)))) {
        stockField.classList.add('is-invalid');
        stockField.classList.remove('is-valid');
        isValid = false;
    } else if (stockField && stockField.value >= 0 && Number.isInteger(parseFloat(stockField.value))) {
        stockField.classList.remove('is-invalid');
        stockField.classList.add('is-valid');
    }
    
    return isValid;
}

/**
 * Configura validación en tiempo real para el modal de edición
 */
function setupEditModalValidation() {
    const form = document.getElementById('editarProductoForm');
    if (form) {
        // Validación del código de producto
        const codigoField = document.getElementById('editCodigoProducto');
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
        const nombreField = document.getElementById('editNombreProducto');
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
        
        // Validación del precio
        const precioField = document.getElementById('editPrecioProducto');
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
        const stockField = document.getElementById('editStockProducto');
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
    }
}
