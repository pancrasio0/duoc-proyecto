// Base de datos de productos
export const productos = {
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

export const getProductById = (id) => productos[id];

export const getAllProducts = () => Object.values(productos);

export const getProductsByCategory = (category) => {
    return Object.values(productos).filter(p => p.categoriaSlug === category);
};

export const getFeaturedProducts = (limit = 8) => {
    return Object.values(productos).slice(0, limit);
};
