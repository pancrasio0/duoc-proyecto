// Categorías de productos
export const categorias = [
    { slug: 'juegos-mesa', nombre: 'Juegos de Mesa' },
    { slug: 'accesorios', nombre: 'Accesorios' },
    { slug: 'consolas', nombre: 'Consolas' },
    { slug: 'computadores-gamers', nombre: 'Computadores Gamers' },
    { slug: 'sillas-gamers', nombre: 'Sillas Gamers' },
    { slug: 'mouse', nombre: 'Mouse' },
    { slug: 'mousepad', nombre: 'Mousepad' },
    { slug: 'poleras-personalizadas', nombre: 'Poleras Personalizadas' }
];

export const getCategoriaBySlug = (slug) => {
    return categorias.find(cat => cat.slug === slug);
};

export const getAllCategorias = () => categorias;
