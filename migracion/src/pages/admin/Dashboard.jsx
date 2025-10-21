import React from 'react';

const Dashboard = () => {
    return (
        <div className="admin-container">
            {/* Sidebar */}
            <nav className="admin-sidebar">
                {/* Logo/Company */}
                <div className="sidebar-header">
                    <div className="company-logo">
                        <img src="/img/logo.png" alt="Level-up Gamer" className="logo-image" />
                        <span className="company-name">Level-up Gamer</span>
                    </div>
                    <hr className="sidebar-divider" />
                </div>

                {/* Main Navigation */}
                <ul className="sidebar-nav">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">
                            <i className="fas fa-th-large"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/usuarios" className="nav-link">
                            <i className="fas fa-clipboard-list"></i>
                            <span>Usuarios</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#nuevoUsuarioModal">
                            <i className="fas fa-user-plus"></i>
                            <span>Nuevo usuario</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#nuevoProductoModal">
                            <i className="fas fa-box"></i>
                            <span>Nuevo producto</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/editar-producto" className="nav-link">
                            <i className="fas fa-edit"></i>
                            <span>Editar Producto</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-user-friends"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                </ul>

                {/* Utility Links */}
                <hr className="sidebar-divider" />
                <ul className="sidebar-utility">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-user-plus"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-search"></i>
                            <span>Search</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-question-circle"></i>
                            <span>Help</span>
                        </a>
                    </li>
                </ul>

                {/* Bottom Profile */}
                <hr className="sidebar-divider" />
                <div className="sidebar-profile">
                    <div className="profile-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <span className="profile-text">Profile</span>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="admin-main">
                {/* Header */}
                <header className="admin-header">
                    <h1 className="admin-title">Panel de administrador</h1>
                    <div className="header-actions">
                        <i className="fas fa-bell notification-icon"></i>
                    </div>
                </header>
                <hr className="header-divider" />

                {/* Content Area */}
                <div className="admin-content">
                    <div className="content-blocks">
                        <div className="content-block top-block">
                            {/* Estadísticas principales */}
                            <div className="row mb-4">
                                <div className="col-md-3 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>1,234</h3>
                                            <p>Usuarios Activos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-box"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>567</h3>
                                            <p>Productos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-shopping-cart"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>89</h3>
                                            <p>Ventas Hoy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>$45,678</h3>
                                            <p>Ingresos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gráficos y tablas */}
                            <div className="row">
                                <div className="col-md-8 mb-4">
                                    <div className="chart-container">
                                        <h4>Ventas Recientes</h4>
                                        <div className="chart-placeholder">
                                            <i className="fas fa-chart-line fa-3x"></i>
                                            <p>Gráfico de ventas (Integración pendiente)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="recent-orders">
                                        <h4>Pedidos Recientes</h4>
                                        <div className="order-list">
                                            <div className="order-item">
                                                <div className="order-info">
                                                    <strong>#1234</strong>
                                                    <span>Juan Pérez</span>
                                                </div>
                                                <div className="order-status">
                                                    <span className="badge bg-success">Completado</span>
                                                </div>
                                            </div>
                                            <div className="order-item">
                                                <div className="order-info">
                                                    <strong>#1235</strong>
                                                    <span>María García</span>
                                                </div>
                                                <div className="order-status">
                                                    <span className="badge bg-warning">Pendiente</span>
                                                </div>
                                            </div>
                                            <div className="order-item">
                                                <div className="order-info">
                                                    <strong>#1236</strong>
                                                    <span>Carlos López</span>
                                                </div>
                                                <div className="order-status">
                                                    <span className="badge bg-info">En Proceso</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-block bottom-block">
                            {/* Productos con stock bajo */}
                            <div className="row">
                                <div className="col-12">
                                    <h4>Productos con Stock Bajo</h4>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Stock Actual</th>
                                                    <th>Stock Mínimo</th>
                                                    <th>Estado</th>
                                                    <th>Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mouse Gamer Logitech G502</td>
                                                    <td>3</td>
                                                    <td>10</td>
                                                    <td><span className="badge bg-danger">Crítico</span></td>
                                                    <td><button className="btn btn-sm btn-primary">Reabastecer</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Auriculares HyperX Cloud II</td>
                                                    <td>7</td>
                                                    <td>15</td>
                                                    <td><span className="badge bg-warning">Bajo</span></td>
                                                    <td><button className="btn btn-sm btn-primary">Reabastecer</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
