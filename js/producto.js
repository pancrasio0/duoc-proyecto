// Base de datos de productos
const productos = {
    'JM001': {
        id: 'JM001',
        nombre: 'Catan',
        categoria: 'Juegos de Mesa',
        categoriaSlug: 'juegos-mesa',
        precio: 29990,
        imagen: 'catan.png',
        descripcion: 'El clásico juego de estrategia donde colonizas la isla de Catan. Construye asentamientos, ciudades y carreteras mientras comercias recursos con otros jugadores.',
        caracteristicas: [
            'Para 3-4 jugadores',
            'Duración: 60-90 minutos',
            'Edad recomendada: 10+ años',
            'Incluye tablero modular',
            'Recursos: madera, ladrillo, lana, grano, mineral'
        ],
        stock: 15,
        disponible: true
    },
    'JM002': {
        id: 'JM002',
        nombre: 'Carcassonne',
        categoria: 'Juegos de Mesa',
        categoriaSlug: 'juegos-mesa',
        precio: 24990,
        imagen: 'carcassonne.png',
        descripcion: 'Construye el paisaje medieval de Carcassonne colocando losetas y colocando tus seguidores en ciudades, monasterios, carreteras y campos.',
        caracteristicas: [
            'Para 2-5 jugadores',
            'Duración: 30-45 minutos',
            'Edad recomendada: 7+ años',
            'Fácil de aprender',
            'Estrategia y suerte combinadas'
        ],
        stock: 12,
        disponible: true
    },
    'AC001': {
        id: 'AC001',
        nombre: 'Controlador Inalámbrico Xbox Series X',
        categoria: 'Accesorios',
        categoriaSlug: 'accesorios',
        precio: 59990,
        imagen: 'joystick.png',
        descripcion: 'Controlador oficial de Xbox Series X con conectividad inalámbrica, retroalimentación háptica y compatibilidad multiplataforma.',
        caracteristicas: [
            'Conectividad inalámbrica',
            'Retroalimentación háptica',
            'Compatibilidad con PC, Xbox y móviles',
            'Batería recargable',
            'Botones personalizables'
        ],
        stock: 8,
        disponible: true
    },
    'AC002': {
        id: 'AC002',
        nombre: 'Auriculares Gamer HyperX Cloud II',
        categoria: 'Accesorios',
        categoriaSlug: 'accesorios',
        precio: 79990,
        imagen: 'hyperxcloud2.png',
        descripcion: 'Auriculares gaming profesionales con sonido virtual 7.1, micrófono desmontable y construcción duradera para sesiones de juego prolongadas.',
        caracteristicas: [
            'Sonido virtual 7.1',
            'Micrófono desmontable',
            'Cómodos para uso prolongado',
            'Cable USB con control de volumen',
            'Compatible con PC, PS4, Xbox One'
        ],
        stock: 6,
        disponible: true
    },
    'CO001': {
        id: 'CO001',
        nombre: 'PlayStation 5',
        categoria: 'Consolas',
        categoriaSlug: 'consolas',
        precio: 549990,
        imagen: 'ps5.png',
        descripcion: 'La consola de nueva generación de Sony con SSD ultrarrápido, ray tracing y compatibilidad con juegos 4K a 120fps.',
        caracteristicas: [
            'SSD ultrarrápido',
            'Ray tracing en tiempo real',
            'Juegos 4K a 120fps',
            'Controlador DualSense con haptic feedback',
            'Compatibilidad con PS4'
        ],
        stock: 3,
        disponible: true
    },
    'CG001': {
        id: 'CG001',
        nombre: 'PC Gamer ASUS ROG Strix',
        categoria: 'Computadores Gamers',
        categoriaSlug: 'computadores-gamers',
        precio: 1299990,
        imagen: 'notebook.png',
        descripcion: 'Laptop gaming de alto rendimiento con procesador Intel i7, tarjeta gráfica RTX 3070 y pantalla 144Hz para la mejor experiencia gaming.',
        caracteristicas: [
            'Procesador Intel i7-11800H',
            'RTX 3070 8GB GDDR6',
            '16GB RAM DDR4',
            'SSD 1TB NVMe',
            'Pantalla 15.6" 144Hz'
        ],
        stock: 2,
        disponible: true
    },
    'SG001': {
        id: 'SG001',
        nombre: 'Silla Gamer Secretlab Titan',
        categoria: 'Sillas Gamers',
        categoriaSlug: 'sillas-gamers',
        precio: 349990,
        imagen: 'silla.png',
        descripcion: 'Silla gaming ergonómica de alta calidad con soporte lumbar ajustable, reposabrazos 4D y tapizado de cuero sintético premium.',
        caracteristicas: [
            'Soporte lumbar ajustable',
            'Reposabrazos 4D',
            'Tapizado de cuero sintético',
            'Soporte hasta 180kg',
            'Garantía de 5 años'
        ],
        stock: 5,
        disponible: true
    },
    'MS001': {
        id: 'MS001',
        nombre: 'Mouse Gamer Logitech G502 HERO',
        categoria: 'Mouse',
        categoriaSlug: 'mouse',
        precio: 49990,
        imagen: 'g502.png',
        descripcion: 'Mouse gaming de precisión con sensor HERO 25K, 11 botones programables y sistema de pesos ajustables para personalizar el peso.',
        caracteristicas: [
            'Sensor HERO 25K DPI',
            '11 botones programables',
            'Sistema de pesos ajustables',
            'Cable flexible',
            'Software Logitech G HUB'
        ],
        stock: 20,
        disponible: true
    },
    'MP001': {
        id: 'MP001',
        nombre: 'Mousepad Razer Goliathus Extended Chroma',
        categoria: 'Mousepad',
        categoriaSlug: 'mousepad',
        precio: 29990,
        imagen: 'mousepad.png',
        descripcion: 'Mousepad gaming extendido con iluminación RGB Chroma, superficie optimizada para precisión y base antideslizante.',
        caracteristicas: [
            'Iluminación RGB Chroma',
            'Superficie optimizada para gaming',
            'Base antideslizante',
            'Tamaño extendido 355x255mm',
            'Compatible con Razer Synapse'
        ],
        stock: 10,
        disponible: true
    },
    'PP001': {
        id: 'PP001',
        nombre: 'Polera Gamer Personalizada \'Level-Up\'',
        categoria: 'Poleras Personalizadas',
        categoriaSlug: 'poleras-personalizadas',
        precio: 14990,
        imagen: 'polera.jpg',
        descripcion: 'Polera personalizada con diseño gaming exclusivo de Level-up Gamer. Disponible en múltiples tallas y colores.',
        caracteristicas: [
            'Diseño exclusivo Level-up',
            '100% algodón',
            'Tallas S, M, L, XL, XXL',
            'Colores disponibles',
            'Estampado de alta calidad'
        ],
        stock: 25,
        disponible: true
    }
};

// Función para obtener parámetros de URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Función para formatear precio
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(precio);
}

// Función para cargar producto por ID
function cargarProducto(productoId) {
    const producto = productos[productoId];
    
    if (!producto) {
        mostrarError('Producto no encontrado');
        return;
    }

    // Actualizar título de la página
    document.title = `${producto.nombre} - Level-up Gamer`;

    // Actualizar breadcrumb
    document.getElementById('categoriaBreadcrumb').textContent = producto.categoria;
    document.getElementById('productoBreadcrumb').textContent = producto.nombre;

    // Actualizar imagen
    const imagen = document.getElementById('productoImagen');
    imagen.src = `img/${producto.imagen}`;
    imagen.alt = producto.nombre;

    // Actualizar información del producto
    document.getElementById('productoCategoria').textContent = producto.categoria;
    document.getElementById('productoTitulo').textContent = producto.nombre;
    document.getElementById('productoPrecio').textContent = formatearPrecio(producto.precio);
    document.getElementById('productoDescripcion').textContent = producto.descripcion;

    // Actualizar características
    const caracteristicasList = document.getElementById('productoCaracteristicas');
    caracteristicasList.innerHTML = '';
    producto.caracteristicas.forEach(caracteristica => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${caracteristica}`;
        caracteristicasList.appendChild(li);
    });

    // Actualizar disponibilidad
    const badge = document.getElementById('productoBadge');
    if (producto.disponible && producto.stock > 0) {
        badge.innerHTML = '<span class="badge bg-success">Disponible</span>';
    } else {
        badge.innerHTML = '<span class="badge bg-danger">Agotado</span>';
    }

    // Cargar productos relacionados
    cargarProductosRelacionados(productoId, producto.categoriaSlug);
}

// Función para cargar productos relacionados
function cargarProductosRelacionados(productoId, categoriaSlug) {
    const productosRelacionados = Object.values(productos)
        .filter(p => p.id !== productoId && p.categoriaSlug === categoriaSlug)
        .slice(0, 4);

    const container = document.getElementById('productosRelacionados');
    container.innerHTML = '';

    if (productosRelacionados.length === 0) {
        // Si no hay productos de la misma categoría, mostrar productos aleatorios
        const productosAleatorios = Object.values(productos)
            .filter(p => p.id !== productoId)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
        
        productosAleatorios.forEach(producto => {
            container.appendChild(crearTarjetaProducto(producto));
        });
    } else {
        productosRelacionados.forEach(producto => {
            container.appendChild(crearTarjetaProducto(producto));
        });
    }
}

// Función para crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';

    col.innerHTML = `
        <div class="product-card">
            <div class="product-image-container">
                <img src="img/${producto.imagen}" alt="${producto.nombre}" class="product-image">
            </div>
            <div class="product-info">
                <h6 class="product-name">${producto.nombre}</h6>
                <p class="product-price">${formatearPrecio(producto.precio)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="verProducto('${producto.id}')">
                    Ver Detalles
                </button>
            </div>
        </div>
    `;

    return col;
}

// Función para ver producto
function verProducto(productoId) {
    window.location.href = `producto.html?id=${productoId}`;
}

// Función para mostrar error
function mostrarError(mensaje) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle fa-2x mb-3"></i>
                    <h4>${mensaje}</h4>
                    <p>El producto que buscas no existe o ha sido removido.</p>
                    <a href="index.html" class="btn btn-primary">Volver al Inicio</a>
                </div>
            </div>
        </div>
    `;
}

// Función para manejar cantidad
function manejarCantidad() {
    const cantidadInput = document.getElementById('cantidad');
    const decrementBtn = document.getElementById('decrementBtn');
    const incrementBtn = document.getElementById('incrementBtn');

    decrementBtn.addEventListener('click', () => {
        let cantidad = parseInt(cantidadInput.value);
        if (cantidad > 1) {
            cantidadInput.value = cantidad - 1;
        }
    });

    incrementBtn.addEventListener('click', () => {
        let cantidad = parseInt(cantidadInput.value);
        if (cantidad < 10) {
            cantidadInput.value = cantidad + 1;
        }
    });

    cantidadInput.addEventListener('change', () => {
        let cantidad = parseInt(cantidadInput.value);
        if (cantidad < 1) cantidadInput.value = 1;
        if (cantidad > 10) cantidadInput.value = 10;
    });
}

// Función para agregar al carrito desde la página de producto
function agregarAlCarritoProducto() {
    const productoId = getUrlParameter('id');
    const producto = productos[productoId];
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!producto) return;

    // Usar la función del carrito.js
    if (typeof window.agregarAlCarrito === 'function') {
        window.agregarAlCarrito(productoId, cantidad);
    } else {
        // Fallback si carrito.js no está cargado
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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

        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }
    
    // Mostrar modal de confirmación
    mostrarModalConfirmacion(producto, cantidad);
}

// Función para mostrar modal de confirmación
function mostrarModalConfirmacion(producto, cantidad) {
    document.getElementById('modalImagen').src = `img/${producto.imagen}`;
    document.getElementById('modalTitulo').textContent = producto.nombre;
    document.getElementById('modalCantidad').textContent = cantidad;
    document.getElementById('modalPrecio').textContent = formatearPrecio(producto.precio * cantidad);

    const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
    modal.show();
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('carritoCount').textContent = totalItems;
}

// Función para comprar ahora
function comprarAhora() {
    agregarAlCarritoProducto();
    // Aquí se redirigiría a la página de checkout
    alert('Redirigiendo al checkout...');
}

// Función para agregar a favoritos
function agregarAFavoritos() {
    const productoId = getUrlParameter('id');
    const producto = productos[productoId];
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (!favoritos.find(item => item.id === productoId)) {
        favoritos.push({
            id: productoId,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Producto agregado a favoritos');
    } else {
        alert('El producto ya está en tus favoritos');
    }
}

// Función para compartir
function compartir() {
    if (navigator.share) {
        navigator.share({
            title: document.getElementById('productoTitulo').textContent,
            text: document.getElementById('productoDescripcion').textContent,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Enlace copiado al portapapeles');
        });
    }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const productoId = getUrlParameter('id');
    
    if (productoId && window.location.pathname.includes('producto.html')) {
        cargarProducto(productoId);
        manejarCantidad();
        actualizarContadorCarrito();
        
        // Event listeners
        document.getElementById('agregarCarritoBtn').addEventListener('click', agregarAlCarritoProducto);
        document.getElementById('comprarAhoraBtn').addEventListener('click', comprarAhora);
        document.getElementById('agregarFavoritosBtn').addEventListener('click', agregarAFavoritos);
        document.getElementById('compartirBtn').addEventListener('click', compartir);
        document.getElementById('verCarritoBtn').addEventListener('click', () => {
            window.location.href = 'carrito.html';
        });
    } else if (window.location.pathname.includes('producto.html') && !productoId) {
        mostrarError('ID de producto no especificado');
    }
});
