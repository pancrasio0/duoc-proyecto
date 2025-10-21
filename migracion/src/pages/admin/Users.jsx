import React, { useState, useEffect } from 'react';

const Users = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [filtroTipo, setFiltroTipo] = useState('all');
    const [busqueda, setBusqueda] = useState('');
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    // Datos de ejemplo
    useEffect(() => {
        const usuariosEjemplo = [
            {
                id: 1,
                nombre: 'María González Pérez',
                usuario: 'maria.gonzalez',
                correo: 'maria.gonzalez@email.com',
                telefono: '+56 9 1234 5678',
                direccion: 'Av. Providencia 1234, Santiago',
                tipo: 'cliente',
                activo: true
            },
            {
                id: 2,
                nombre: 'Carlos Rodríguez Silva',
                usuario: 'carlos.rodriguez',
                correo: 'carlos.rodriguez@email.com',
                telefono: '+56 9 2345 6789',
                direccion: 'Las Condes 567, Santiago',
                tipo: 'administrador',
                activo: true
            },
            {
                id: 3,
                nombre: 'Ana Martínez López',
                usuario: 'ana.martinez',
                correo: 'ana.martinez@email.com',
                telefono: '+56 9 3456 7890',
                direccion: 'Ñuñoa 890, Santiago',
                tipo: 'vendedor',
                activo: true
            },
            {
                id: 4,
                nombre: 'Diego Fernández Torres',
                usuario: 'diego.fernandez',
                correo: 'diego.fernandez@email.com',
                telefono: '+56 9 4567 8901',
                direccion: 'Maipú 234, Santiago',
                tipo: 'cliente',
                activo: false
            }
        ];
        setUsuarios(usuariosEjemplo);
    }, []);

    const tiposUsuario = ['all', 'administrador', 'cliente', 'vendedor'];

    const usuariosFiltrados = usuarios.filter(usuario => {
        const cumpleTipo = filtroTipo === 'all' || usuario.tipo === filtroTipo;
        const cumpleBusqueda = usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                              usuario.usuario.toLowerCase().includes(busqueda.toLowerCase()) ||
                              usuario.correo.toLowerCase().includes(busqueda.toLowerCase());
        return cumpleTipo && cumpleBusqueda;
    });

    const handleEditarUsuario = (usuario) => {
        setUsuarioEditando(usuario);
        setMostrarModal(true);
    };

    const handleEliminarUsuario = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            setUsuarios(usuarios.filter(u => u.id !== id));
        }
    };

    const handleToggleActivo = (id) => {
        setUsuarios(usuarios.map(u => 
            u.id === id ? { ...u, activo: !u.activo } : u
        ));
    };

    const getTipoBadgeClass = (tipo) => {
        switch (tipo) {
            case 'administrador': return 'bg-danger';
            case 'vendedor': return 'bg-warning';
            case 'cliente': return 'bg-primary';
            default: return 'bg-secondary';
        }
    };

    const getTipoLabel = (tipo) => {
        switch (tipo) {
            case 'administrador': return 'Administrador';
            case 'vendedor': return 'Vendedor';
            case 'cliente': return 'Cliente';
            default: return 'Desconocido';
        }
    };

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <nav className="admin-sidebar">
                <div className="sidebar-header">
                    <div className="company-logo">
                        <img src="/img/logo.png" alt="Level-up Gamer" className="logo-image" />
                        <span className="company-name">Level-up Gamer</span>
                    </div>
                    <hr className="sidebar-divider" />
                </div>

                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <a href="/admin" className="nav-link">
                            <i className="fas fa-th-large"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a href="/admin/usuarios" className="nav-link">
                            <i className="fas fa-clipboard-list"></i>
                            <span>Usuarios</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/editar-producto" className="nav-link">
                            <i className="fas fa-edit"></i>
                            <span>Editar producto</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content Area */}
            <main className="admin-main">
                <header className="admin-header">
                    <h1 className="admin-title">Usuarios</h1>
                    <div className="header-actions">
                        <button 
                            className="btn btn-nuevo-usuario" 
                            onClick={() => setMostrarModal(true)}
                        >
                            <i className="fas fa-plus me-2"></i>NUEVO USUARIO
                        </button>
                        <i className="fas fa-bell notification-icon"></i>
                    </div>
                </header>
                <hr className="header-divider" />

                <div className="admin-content">
                    {/* Filter Section */}
                    <div className="filter-section">
                        <div className="filter-dropdown">
                            <select 
                                className="form-select"
                                value={filtroTipo}
                                onChange={(e) => setFiltroTipo(e.target.value)}
                            >
                                <option value="all">All Users</option>
                                <option value="administrador">Administradores</option>
                                <option value="vendedor">Vendedores</option>
                                <option value="cliente">Clientes</option>
                            </select>
                        </div>
                        <div className="search-group">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Buscar usuario..."
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                />
                                <button className="btn btn-outline-secondary" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="table-container">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th className="sortable">
                                        Nombre
                                        <i className="fas fa-sort sort-icon"></i>
                                    </th>
                                    <th className="sortable">
                                        Usuario
                                        <i className="fas fa-sort sort-icon"></i>
                                    </th>
                                    <th className="sortable">
                                        Correo
                                        <i className="fas fa-sort sort-icon"></i>
                                    </th>
                                    <th className="sortable">
                                        Teléfono
                                        <i className="fas fa-sort sort-icon"></i>
                                    </th>
                                    <th className="sortable">
                                        Dirección
                                        <i className="fas fa-sort sort-icon"></i>
                                    </th>
                                    <th>Tipo</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuariosFiltrados.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.usuario}</td>
                                        <td>{usuario.correo}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>{usuario.direccion}</td>
                                        <td>
                                            <span className={`badge ${getTipoBadgeClass(usuario.tipo)}`}>
                                                {getTipoLabel(usuario.tipo)}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="form-check form-switch">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    checked={usuario.activo}
                                                    onChange={() => handleToggleActivo(usuario.id)}
                                                />
                                                <label className="form-check-label">
                                                    {usuario.activo ? 'Activo' : 'Inactivo'}
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-primary me-2"
                                                onClick={() => handleEditarUsuario(usuario)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleEliminarUsuario(usuario.id)}
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
                    <div className="pagination-container">
                        <nav className="pagination-nav">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fas fa-angle-left"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">4</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">5</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">6</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">7</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">8</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">9</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">10</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>

            {/* Modal para Editar/Crear Usuario */}
            {mostrarModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="fas fa-user-plus me-2"></i>
                                    {usuarioEditando ? 'Editar Usuario' : 'Nuevo Usuario'}
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => {
                                        setMostrarModal(false);
                                        setUsuarioEditando(null);
                                    }}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">RUN *</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="19011022K" 
                                                    maxLength="9" 
                                                    defaultValue={usuarioEditando?.run || ''}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Tipo de Usuario *</label>
                                                <select className="form-control" required>
                                                    <option value="">Seleccionar tipo</option>
                                                    <option value="administrador">Administrador</option>
                                                    <option value="cliente">Cliente</option>
                                                    <option value="vendedor">Vendedor</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre *</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    maxLength="50" 
                                                    defaultValue={usuarioEditando?.nombre || ''}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Apellidos *</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    maxLength="100" 
                                                    defaultValue={usuarioEditando?.apellidos || ''}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Correo Electrónico *</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    maxLength="100" 
                                                    placeholder="usuario@duoc.cl" 
                                                    defaultValue={usuarioEditando?.correo || ''}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Fecha de Nacimiento</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control" 
                                                    defaultValue={usuarioEditando?.fechaNacimiento || ''}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Región *</label>
                                                <select className="form-control" required>
                                                    <option value="">Seleccionar región</option>
                                                    <option value="metropolitana">Región Metropolitana</option>
                                                    <option value="valparaiso">Valparaíso</option>
                                                    <option value="biobio">Biobío</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Comuna *</label>
                                                <select className="form-control" required>
                                                    <option value="">Seleccionar comuna</option>
                                                    <option value="santiago">Santiago</option>
                                                    <option value="providencia">Providencia</option>
                                                    <option value="las-condes">Las Condes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label className="form-label">Dirección *</label>
                                        <textarea 
                                            className="form-control" 
                                            rows="3" 
                                            maxLength="300" 
                                            placeholder="Calle, Número, Comuna, Ciudad"
                                            defaultValue={usuarioEditando?.direccion || ''}
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Contraseña *</label>
                                                <div className="input-group">
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        required 
                                                    />
                                                    <button className="btn btn-outline-secondary" type="button">
                                                        <i className="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Confirmar Contraseña *</label>
                                                <div className="input-group">
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        required 
                                                    />
                                                    <button className="btn btn-outline-secondary" type="button">
                                                        <i className="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                required 
                                            />
                                            <label className="form-check-label">
                                                Acepto los términos y condiciones
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
                                        setUsuarioEditando(null);
                                    }}
                                >
                                    <i className="fas fa-times me-2"></i>Cancelar
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        // Aquí iría la lógica para guardar
                                        alert('Usuario guardado! (Funcionalidad en desarrollo)');
                                        setMostrarModal(false);
                                        setUsuarioEditando(null);
                                    }}
                                >
                                    <i className="fas fa-save me-2"></i>
                                    {usuarioEditando ? 'Actualizar Usuario' : 'Guardar Usuario'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
