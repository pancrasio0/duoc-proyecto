// Códigos de descuento válidos
const codigosDescuento = {
    'WELCOME10': { descuento: 0.10, descripcion: '10% de descuento' },
    'GAMER20': { descuento: 0.20, descripcion: '20% de descuento' },
    'LEVELUP15': { descuento: 0.15, descripcion: '15% de descuento' }
};

// Función para formatear precio
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(precio);
}

// Función para obtener el carrito del localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para actualizar contador del carrito en el navbar
function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const contador = document.getElementById('carritoCount');
    if (contador) {
        contador.textContent = totalItems;
    }
}

// Función para cargar y mostrar el carrito
function cargarCarrito() {
    const carrito = obtenerCarrito();
    const carritoVacio = document.getElementById('carritoVacio');
    const carritoConProductos = document.getElementById('carritoConProductos');
    const listaProductos = document.getElementById('listaProductos');

    if (carrito.length === 0) {
        carritoVacio.style.display = 'block';
        carritoConProductos.style.display = 'none';
    } else {
        carritoVacio.style.display = 'none';
        carritoConProductos.style.display = 'block';
        
        // Limpiar lista de productos
        listaProductos.innerHTML = '';
        
        // Mostrar cada producto del carrito
        carrito.forEach((item, index) => {
            const producto = productos[item.id];
            if (producto) {
                const productoElement = crearElementoProductoCarrito(item, producto, index);
                listaProductos.appendChild(productoElement);
            }
        });
        
        // Actualizar resumen
        actualizarResumenCarrito();
    }
}

function crearElementoProductoCarrito(item, producto, index) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-2">
                <img src="img/${producto.imagen}" alt="${producto.nombre}" class="cart-item-image">
            </div>
            <div class="col-md-4">
                <h6 class="cart-item-name">${producto.nombre}</h6>
                <p class="cart-item-category text-muted">${producto.categoria}</p>
            </div>
            <div class="col-md-2">
                <div class="quantity-controls">
                    <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.cantidad}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-2">
                <span class="cart-item-price">${formatearPrecio(producto.precio)}</span>
            </div>
            <div class="col-md-2">
                <span class="cart-item-total">${formatearPrecio(producto.precio * item.cantidad)}</span>
            </div>
            <div class="col-md-1">
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})" title="Eliminar producto">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return div;
}

function cambiarCantidad(index, cambio) {
    const carrito = obtenerCarrito();
    const item = carrito[index];
    
    if (item) {
        const nuevaCantidad = item.cantidad + cambio;
        
        if (nuevaCantidad <= 0) {
            // Eliminar producto si la cantidad es 0 o menor
            eliminarDelCarrito(index);
        } else if (nuevaCantidad <= 10) {
            // Actualizar cantidad
            item.cantidad = nuevaCantidad;
            guardarCarrito(carrito);
            cargarCarrito();
            actualizarContadorCarrito();
        }
    }
}

function eliminarDelCarrito(index) {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    cargarCarrito();
    actualizarContadorCarrito();
    
    // Mostrar notificación
    mostrarNotificacion('Producto eliminado del carrito', 'success');
}

function actualizarResumenCarrito() {
    const carrito = obtenerCarrito();
    let subtotal = 0;
    
    carrito.forEach(item => {
        const producto = productos[item.id];
        if (producto) {
            subtotal += producto.precio * item.cantidad;
        }
    });
    
    const envio = subtotal >= 100000 ? 0 : 5000;
    
    const descuentoAplicado = obtenerDescuentoAplicado();
    const descuento = subtotal * descuentoAplicado;
    
    const total = subtotal + envio - descuento;
    
    // Actualizar elementos del DOM
    document.getElementById('subtotal').textContent = formatearPrecio(subtotal);
    document.getElementById('envio').textContent = envio === 0 ? 'Gratis' : formatearPrecio(envio);
    document.getElementById('descuento').textContent = descuento > 0 ? '-' + formatearPrecio(descuento) : '$0';
    document.getElementById('total').textContent = formatearPrecio(total);
}

function obtenerDescuentoAplicado() {
    const codigoAplicado = localStorage.getItem('codigoDescuentoAplicado');
    if (codigoAplicado && codigosDescuento[codigoAplicado]) {
        return codigosDescuento[codigoAplicado].descuento;
    }
    return 0;
}
function aplicarDescuento() {
    const codigoInput = document.getElementById('codigoDescuento');
    const mensajeDescuento = document.getElementById('mensajeDescuento');
    const codigo = codigoInput.value.trim().toUpperCase();
    
    if (!codigo) {
        mensajeDescuento.innerHTML = '<small class="text-warning">Ingresa un código de descuento</small>';
        return;
    }
    
    if (codigosDescuento[codigo]) {
        localStorage.setItem('codigoDescuentoAplicado', codigo);
        mensajeDescuento.innerHTML = `<small class="text-success">✓ ${codigosDescuento[codigo].descripcion} aplicado</small>`;
        actualizarResumenCarrito();
        codigoInput.value = '';
    } else {
        mensajeDescuento.innerHTML = '<small class="text-danger">Código de descuento no válido</small>';
    }
}

function limpiarCarrito() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        localStorage.removeItem('carrito');
        localStorage.removeItem('codigoDescuentoAplicado');
        cargarCarrito();
        actualizarContadorCarrito();
        mostrarNotificacion('Carrito vaciado', 'info');
    }
}
function procederCheckout() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío', 'warning');
        return;
    }
    
    mostrarNotificacion('Redirigiendo al checkout...', 'info');
    
    setTimeout(() => {
        alert('Checkout sin hacer');
    }, 2000);
}

function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`;
    notificacion.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notificacion.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.remove();
        }
    }, 3000);
}

function agregarAlCarrito(productoId, cantidad = 1) {
    const producto = productos[productoId];
    if (!producto) return;
    
    const carrito = obtenerCarrito();
    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: productoId,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: cantidad
        });
    }
    
    guardarCarrito(carrito);
    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`, 'success');
}

function estaEnCarrito(productoId) {
    const carrito = obtenerCarrito();
    return carrito.some(item => item.id === productoId);
}
function obtenerCantidadEnCarrito(productoId) {
    const carrito = obtenerCarrito();
    const item = carrito.find(item => item.id === productoId);
    return item ? item.cantidad : 0;
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('carrito.html')) {
        cargarCarrito();
        actualizarContadorCarrito();
        
        const codigoAplicado = localStorage.getItem('codigoDescuentoAplicado');
        if (codigoAplicado) {
            const mensajeDescuento = document.getElementById('mensajeDescuento');
            if (mensajeDescuento && codigosDescuento[codigoAplicado]) {
                mensajeDescuento.innerHTML = `<small class="text-success">✓ ${codigosDescuento[codigoAplicado].descripcion} aplicado</small>`;
            }
        }
    } else {
        actualizarContadorCarrito();
    }
});

function actualizarBotonesCarrito() {
    const botonesAgregar = document.querySelectorAll('[data-producto-id]');
    botonesAgregar.forEach(boton => {
        const productoId = boton.getAttribute('data-producto-id');
        if (estaEnCarrito(productoId)) {
            boton.innerHTML = '<i class="fas fa-check me-2"></i>En el carrito';
            boton.classList.remove('btn-outline-primary');
            boton.classList.add('btn-success');
            boton.disabled = true;
        }
    });
}
