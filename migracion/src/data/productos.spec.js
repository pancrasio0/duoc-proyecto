import { productos, getProductById, getAllProducts, getProductsByCategory, getFeaturedProducts } from './productos.js';

describe('Productos Data Tests', () => {
  
  it('debe retornar un producto por ID válido', () => {
    const producto = getProductById('JM001');
    expect(producto).toBeDefined();
    expect(producto.nombre).toBe('Catan');
    expect(producto.precio).toBe(29990);
  });

  it('debe retornar undefined para ID inválido', () => {
    const producto = getProductById('INVALID');
    expect(producto).toBeUndefined();
  });

  it('debe retornar todos los productos', () => {
    const todosLosProductos = getAllProducts();
    expect(todosLosProductos).toBeDefined();
    expect(todosLosProductos.length).toBe(10);
    expect(Array.isArray(todosLosProductos)).toBe(true);
  });

  it('debe filtrar productos por categoría juegos-mesa', () => {
    const juegosMesa = getProductsByCategory('juegos-mesa');
    expect(juegosMesa.length).toBe(2);
    expect(juegosMesa[0].categoriaSlug).toBe('juegos-mesa');
    expect(juegosMesa[1].categoriaSlug).toBe('juegos-mesa');
  });

  it('debe filtrar productos por categoría accesorios', () => {
    const accesorios = getProductsByCategory('accesorios');
    expect(accesorios.length).toBe(2);
    expect(accesorios.every(p => p.categoriaSlug === 'accesorios')).toBe(true);
  });

  it('debe retornar array vacío para categoría inexistente', () => {
    const inexistente = getProductsByCategory('categoria-falsa');
    expect(inexistente.length).toBe(0);
    expect(Array.isArray(inexistente)).toBe(true);
  });

  it('debe retornar productos destacados con límite por defecto', () => {
    const destacados = getFeaturedProducts();
    expect(destacados.length).toBe(8);
    expect(Array.isArray(destacados)).toBe(true);
  });

  it('debe retornar productos destacados con límite personalizado', () => {
    const destacados = getFeaturedProducts(3);
    expect(destacados.length).toBe(3);
    expect(destacados[0].id).toBe('JM001');
  });

  it('debe verificar que todos los productos tengan propiedades requeridas', () => {
    const todosLosProductos = getAllProducts();
    todosLosProductos.forEach(producto => {
      expect(producto.id).toBeDefined();
      expect(producto.nombre).toBeDefined();
      expect(producto.precio).toBeGreaterThan(0);
      expect(producto.stock).toBeGreaterThanOrEqual(0);
      expect(typeof producto.disponible).toBe('boolean');
    });
  });

  it('debe verificar que el producto más caro sea el PC Gamer', () => {
    const todosLosProductos = getAllProducts();
    const productoMasCaro = todosLosProductos.reduce((max, producto) => 
      producto.precio > max.precio ? producto : max
    );
    expect(productoMasCaro.id).toBe('CG001');
    expect(productoMasCaro.nombre).toBe('PC Gamer ASUS ROG Strix');
    expect(productoMasCaro.precio).toBe(1299990);
  });

});