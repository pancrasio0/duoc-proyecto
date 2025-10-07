import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../data/productos';
import { getAllCategorias } from '../data/categorias';
import ProductCard from '../components/products/ProductCard';
import Newsletter from '../components/common/Newsletter';

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [ordenSeleccionado, setOrdenSeleccionado] = useState('nombre');

    useEffect(() => {
        const todosLosProductos = getAllProducts();
        setProductos(todosLosProductos);
        setProductosFiltrados(todosLosProductos);
    }, []);

    useEffect(() => {
        filtrarYOrdenar();
    }, [categoriaSeleccionada, ordenSeleccionado, productos]);

    const filtrarYOrdenar = () => {
        let resultado = [...productos];

        // Filtrar por categoría
        if (categoriaSeleccionada) {
            resultado = resultado.filter(p => p.categoria === categoriaSeleccionada);
        }

        // Ordenar
        resultado.sort((a, b) => {
            switch (ordenSeleccionado) {
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

        setProductosFiltrados(resultado);
    };

    const limpiarFiltros = () => {
        setCategoriaSeleccionada('');
        setOrdenSeleccionado('nombre');
    };

    const categorias = getAllCategorias();

    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold mb-4">Nuestros Productos</h1>
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, ex et congue rutrum, nisl ante interdum mauris, ut viverra mi nisi sed ex.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="/img/logo.png" width="200" height="200" alt="Level-up Gamer" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <h2 className="mb-0">Catálogo de Productos</h2>
                                <div className="d-flex flex-wrap gap-3">
                                    <div className="filter-group">
                                        <label htmlFor="categoriaFilter" className="form-label text-light mb-2">
                                            Filtrar por categoría:
                                        </label>
                                        <select 
                                            id="categoriaFilter" 
                                            className="form-select"
                                            value={categoriaSeleccionada}
                                            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                                            style={{ minWidth: '200px' }}
                                        >
                                            <option value="">Todas las categorías</option>
                                            {categorias.map(cat => (
                                                <option key={cat.slug} value={cat.nombre}>
                                                    {cat.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="filter-group">
                                        <label htmlFor="ordenFilter" className="form-label text-light mb-2">
                                            Ordenar por:
                                        </label>
                                        <select 
                                            id="ordenFilter" 
                                            className="form-select"
                                            value={ordenSeleccionado}
                                            onChange={(e) => setOrdenSeleccionado(e.target.value)}
                                            style={{ minWidth: '150px' }}
                                        >
                                            <option value="nombre">Nombre</option>
                                            <option value="precio-asc">Precio: Menor a Mayor</option>
                                            <option value="precio-desc">Precio: Mayor a Menor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <span className="text-light">
                                    Mostrando <span>{productosFiltrados.length}</span> productos
                                </span>
                            </div>
                        </div>
                    </div>

                    {productosFiltrados.length > 0 ? (
                        <div className="row">
                            {productosFiltrados.map(producto => (
                                <div key={producto.id} className="col-lg-3 col-md-6 mb-4">
                                    <ProductCard producto={producto} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <i className="fas fa-search fa-3x text-muted mb-3"></i>
                            <h4 className="text-light">No se encontraron productos</h4>
                            <p className="text-muted">Intenta ajustar los filtros para ver más productos.</p>
                            <button className="btn btn-outline-primary" onClick={limpiarFiltros}>
                                <i className="fas fa-refresh me-2"></i>Limpiar filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Products;
