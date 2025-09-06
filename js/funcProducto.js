
let productosFiltrados = [];
let productosOriginales = [];


function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(precio);
}

function crearTarjetaProducto(producto) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';

    col.innerHTML = `
        <div class="home-product-card">
            <div class="home-product-image-container" onclick="verProducto('${producto.id}')" style="cursor: pointer;">
                <img src="img/${producto.imagen}" alt="${producto.nombre}" class="home-product-image">
            </div>
            <div class="home-product-info">
                <h6 class="home-product-name" onclick="verProducto('${producto.id}')" style="cursor: pointer;">${producto.nombre}</h6>
                <p class="home-product-price">${formatearPrecio(producto.precio)}</p>
                <small class="text-muted d-block">${producto.categoria}</small>
                <button class="btn btn-sm btn-outline-primary mt-2 w-100" onclick="event.stopPropagation(); agregarAlCarrito('${producto.id}')">
                    <i class="fas fa-cart-plus me-1"></i>Agregar al Carrito
                </button>
            </div>
        </div>
    `;

    return col;
}

function cargarProductos() {
    productosOriginales = Object.values(productos);
    productosFiltrados = [...productosOriginales];
    
    // Cargar categorías en el filtro
    cargarCategorias();
    
    // Mostrar productos
    mostrarProductos();
}

// Función para cargar categorías
function cargarCategorias() {
    const categorias = [...new Set(productosOriginales.map(p => p.categoria))].sort();
    const select = document.getElementById('categoriaFilter');
    
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        select.appendChild(option);
    });
}

function mostrarProductos() {
    const grid = document.getElementById('productosGrid');
    const contador = document.getElementById('productosCount');
    const noProductos = document.getElementById('noProductos');
    
    grid.innerHTML = '';
    
    if (productosFiltrados.length === 0) {
        noProductos.style.display = 'block';
        contador.textContent = '0';
    } else {
        noProductos.style.display = 'none';
        contador.textContent = productosFiltrados.length;
        
        productosFiltrados.forEach(producto => {
            grid.appendChild(crearTarjetaProducto(producto));
        });
    }
}

function filtrarProductos() {
    const categoria = document.getElementById('categoriaFilter').value;
    const orden = document.getElementById('ordenFilter').value;
    
    productosFiltrados = productosOriginales.filter(producto => {
        if (categoria && producto.categoria !== categoria) {
            return false;
        }
        return true;
    });
    
    // Ordenar productos
    productosFiltrados.sort((a, b) => {
        switch (orden) {
            case 'nombre':
                return a.nombre.localeCompare(b.nombre);
            case 'precio-asc':
                return a.precio - b.precio;
            case 'precio-desc':
                return b.precio - a.precio;
            default:
                return 0;
        }
    });
    
    mostrarProductos();
}

function limpiarFiltros() {
    document.getElementById('categoriaFilter').value = '';
    document.getElementById('ordenFilter').value = 'nombre';
    filtrarProductos();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('carritoCount').textContent = totalItems;
}

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    actualizarContadorCarrito();
    
    // Event listeners para filtros
    document.getElementById('categoriaFilter').addEventListener('change', filtrarProductos);
    document.getElementById('ordenFilter').addEventListener('change', filtrarProductos);
});