import React, { useState, useEffect } from 'react';
import { validarFormularioProducto } from '../../utils/validators';

const EditProduct = () => {
    const [productos, setProductos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [productoEditando, setProductoEditando] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [formData, setFormData] = useState({
        codigo: '',
        nombre: '',
        categoria: '',
        descripcion: '',
        precio: '',
        stock: '',
        stock_critico: '',
        activo: true
    });
    const [formErrors, setFormErrors] = useState({});

    // Datos de ejemplo
    useEffect(() => {
        const productosEjemplo = [
            {
                id: 1,
                codigo: 'MS001',
                nombre: 'Mouse Gamer Logitech G502 HERO',
                categoria: 'Periféricos',
                precio: 49990,
                stock: 15,
                stockCritico: 5,
                activo: true
            },
            {
                id: 2,
                codigo: 'AC002',
                nombre: 'Auriculares Gamer HyperX Cloud II',
                categoria: 'Audio',
                precio: 79990,
                stock: 8,
                stockCritico: 10,
                activo: true
            },
            {
                id: 3,
                codigo: 'JM001',
                nombre: 'Catan',
                categoria: 'Juegos de Mesa',
                precio: 29990,
                stock: 25,
                stockCritico: 5,
                activo: true
            }
        ];
        setProductos(productosEjemplo);
    }, []);

    const categorias = ['Todas las categorías', 'Periféricos', 'Audio', 'Juegos de Mesa', 'Consolas', 'PC Gaming'];

    const productosFiltrados = productos.filter(producto => {
        const cumpleCategoria = filtroCategoria === '' || producto.categoria === filtroCategoria;
        const cumpleBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                              producto.codigo.toLowerCase().includes(busqueda.toLowerCase());
        return cumpleCategoria && cumpleBusqueda;
    });

    const handleEditarProducto = (producto) => {
        setProductoEditando(producto);
        setFormData({
            codigo: producto.codigo,
            nombre: producto.nombre,
            categoria: producto.categoria,
            descripcion: producto.descripcion || '',
            precio: producto.precio.toString(),
            stock: producto.stock.toString(),
            stock_critico: producto.stockCritico.toString(),
            activo: producto.activo
        });
        setFormErrors({});
        setMostrarModal(true);
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Limpiar error cuando el usuario empiece a escribir
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const validation = validarFormularioProducto(formData);
        setFormErrors(validation.errors);
        return validation.valid;
    };

    const handleEliminarProducto = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            setProductos(productos.filter(p => p.id !== id));
        }
    };

    const handleGuardarProducto = () => {
        if (validateForm()) {
            const productoActualizado = {
                ...productoEditando,
                codigo: formData.codigo,
                nombre: formData.nombre,
                categoria: formData.categoria,
                descripcion: formData.descripcion,
                precio: parseFloat(formData.precio),
                stock: parseInt(formData.stock),
                stockCritico: parseInt(formData.stock_critico) || 0,
                activo: formData.activo
            };
            
            setProductos(productos.map(p => 
                p.id === productoActualizado.id ? productoActualizado : p
            ));
            setMostrarModal(false);
            setProductoEditando(null);
            setFormData({
                codigo: '',
                nombre: '',
                categoria: '',
                descripcion: '',
                precio: '',
                stock: '',
                stock_critico: '',
                activo: true
            });
            setFormErrors({});
        }
    };

    const handleNuevoProducto = () => {
        setProductoEditando(null);
        setFormData({
            codigo: '',
            nombre: '',
            categoria: '',
            descripcion: '',
            precio: '',
            stock: '',
            stock_critico: '',
            activo: true
        });
        setFormErrors({});
        setMostrarModal(true);
    };

    return (
        <>
            <header className="admin-header">
                <h1 className="admin-title">Editar Productos</h1>
                       <div className="header-actions">
                           <button className="btn btn-primary" onClick={handleNuevoProducto}>
                               <i className="fas fa-plus me-2"></i>NUEVO PRODUCTO
                           </button>
                           <i className="fas fa-bell notification-icon"></i>
                       </div>
            </header>
            <hr className="header-divider" />

                <div className="admin-content">
                    {/* Filter Section */}
                    <div className="filter-section">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="filter-group">
                                    <label htmlFor="categoriaFilter" className="filter-label">Filtrar por categoría:</label>
                                    <select 
                                        id="categoriaFilter" 
                                        className="form-select filter-select"
                                        value={filtroCategoria}
                                        onChange={(e) => setFiltroCategoria(e.target.value)}
                                    >
                                        {categorias.map(categoria => (
                                            <option key={categoria} value={categoria === 'Todas las categorías' ? '' : categoria}>
                                                {categoria}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search-group">
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Buscar producto..."
                                            value={busqueda}
                                            onChange={(e) => setBusqueda(e.target.value)}
                                        />
                                        <button className="btn btn-outline-secondary" type="button">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Table */}
                    <div className="table-container">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th><i className="fas fa-sort me-1"></i>Código</th>
                                    <th><i className="fas fa-sort me-1"></i>Nombre</th>
                                    <th><i className="fas fa-sort me-1"></i>Categoría</th>
                                    <th><i className="fas fa-sort me-1"></i>Precio</th>
                                    <th><i className="fas fa-sort me-1"></i>Stock</th>
                                    <th><i className="fas fa-sort me-1"></i>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productosFiltrados.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.codigo}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.categoria}</td>
                                        <td>${producto.precio.toLocaleString()}</td>
                                        <td>
                                            <span className={producto.stock <= producto.stockCritico ? 'text-danger fw-bold' : ''}>
                                                {producto.stock}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${producto.activo ? 'bg-success' : 'bg-secondary'}`}>
                                                {producto.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-primary me-2"
                                                onClick={() => handleEditarProducto(producto)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleEliminarProducto(producto.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <nav aria-label="Paginación de productos">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            {/* Modal para Editar/Crear Producto */}
            {mostrarModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="fas fa-edit me-2"></i>
                                    {productoEditando ? 'Editar Producto' : 'Nuevo Producto'}
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => {
                                        setMostrarModal(false);
                                        setProductoEditando(null);
                                    }}
                                ></button>
                            </div>
                                   <div className="modal-body">
                                       <form>
                                           <div className="row">
                                               <div className="col-md-6">
                                                   <div className="form-group mb-3">
                                                       <label className="form-label">Código Producto *</label>
                                                       <input 
                                                           type="text" 
                                                           className={`form-control ${formErrors.codigo ? 'is-invalid' : ''}`}
                                                           name="codigo"
                                                           value={formData.codigo}
                                                           onChange={handleFormChange}
                                                           required 
                                                       />
                                                       {formErrors.codigo && <div className="invalid-feedback">{formErrors.codigo}</div>}
                                                   </div>
                                               </div>
                                               <div className="col-md-6">
                                                   <div className="form-group mb-3">
                                                       <label className="form-label">Categoría *</label>
                                                       <select 
                                                           className={`form-control ${formErrors.categoria ? 'is-invalid' : ''}`}
                                                           name="categoria"
                                                           value={formData.categoria}
                                                           onChange={handleFormChange}
                                                           required
                                                       >
                                                           <option value="">Seleccionar categoría</option>
                                                           <option value="Periféricos">Periféricos</option>
                                                           <option value="Audio">Audio</option>
                                                           <option value="Juegos de Mesa">Juegos de Mesa</option>
                                                           <option value="Consolas">Consolas</option>
                                                           <option value="PC Gaming">PC Gaming</option>
                                                       </select>
                                                       {formErrors.categoria && <div className="invalid-feedback">{formErrors.categoria}</div>}
                                                   </div>
                                               </div>
                                           </div>
                                           
                                           <div className="form-group mb-3">
                                               <label className="form-label">Nombre del Producto *</label>
                                               <input 
                                                   type="text" 
                                                   className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                                                   name="nombre"
                                                   value={formData.nombre}
                                                   onChange={handleFormChange}
                                                   required 
                                               />
                                               {formErrors.nombre && <div className="invalid-feedback">{formErrors.nombre}</div>}
                                           </div>
                                           
                                           <div className="form-group mb-3">
                                               <label className="form-label">Descripción</label>
                                               <textarea 
                                                   className="form-control" 
                                                   rows="3" 
                                                   name="descripcion"
                                                   value={formData.descripcion}
                                                   onChange={handleFormChange}
                                                   placeholder="Descripción detallada del producto"
                                               ></textarea>
                                           </div>
                                           
                                           <div className="row">
                                               <div className="col-md-4">
                                                   <div className="form-group mb-3">
                                                       <label className="form-label">Precio *</label>
                                                       <div className="input-group">
                                                           <span className="input-group-text">$</span>
                                                           <input 
                                                               type="number" 
                                                               className={`form-control ${formErrors.precio ? 'is-invalid' : ''}`}
                                                               name="precio"
                                                               value={formData.precio}
                                                               onChange={handleFormChange}
                                                               min="0" 
                                                               step="0.01" 
                                                               required 
                                                           />
                                                       </div>
                                                       {formErrors.precio && <div className="invalid-feedback">{formErrors.precio}</div>}
                                                   </div>
                                               </div>
                                               <div className="col-md-4">
                                                   <div className="form-group mb-3">
                                                       <label className="form-label">Stock *</label>
                                                       <input 
                                                           type="number" 
                                                           className={`form-control ${formErrors.stock ? 'is-invalid' : ''}`}
                                                           name="stock"
                                                           value={formData.stock}
                                                           onChange={handleFormChange}
                                                           min="0" 
                                                           required 
                                                       />
                                                       {formErrors.stock && <div className="invalid-feedback">{formErrors.stock}</div>}
                                                   </div>
                                               </div>
                                               <div className="col-md-4">
                                                   <div className="form-group mb-3">
                                                       <label className="form-label">Stock Crítico</label>
                                                       <input 
                                                           type="number" 
                                                           className={`form-control ${formErrors.stock_critico ? 'is-invalid' : ''}`}
                                                           name="stock_critico"
                                                           value={formData.stock_critico}
                                                           onChange={handleFormChange}
                                                           min="0" 
                                                       />
                                                       {formErrors.stock_critico && <div className="invalid-feedback">{formErrors.stock_critico}</div>}
                                                   </div>
                                               </div>
                                           </div>
                                           
                                           <div className="form-group mb-3">
                                               <label className="form-label">Imagen del Producto</label>
                                               <input type="file" className="form-control" accept="image/*" />
                                           </div>
                                           
                                           <div className="form-group mb-3">
                                               <div className="form-check">
                                                   <input 
                                                       className="form-check-input" 
                                                       type="checkbox" 
                                                       name="activo"
                                                       checked={formData.activo}
                                                       onChange={handleFormChange}
                                                   />
                                                   <label className="form-check-label">
                                                       Producto activo (disponible para venta)
                                                   </label>
                                               </div>
                                           </div>
                                       </form>
                                   </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={() => {
                                        setMostrarModal(false);
                                        setProductoEditando(null);
                                    }}
                                >
                                    <i className="fas fa-times me-2"></i>Cancelar
                                </button>
                                       <button 
                                           type="button" 
                                           className="btn btn-primary"
                                           onClick={handleGuardarProducto}
                                       >
                                           <i className="fas fa-save me-2"></i>
                                           {productoEditando ? 'Actualizar Producto' : 'Guardar Producto'}
                                       </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditProduct;
