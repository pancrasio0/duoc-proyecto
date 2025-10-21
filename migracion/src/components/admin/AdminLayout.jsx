import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/admin.css';

const AdminLayout = ({ children }) => {
    const location = useLocation();

    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

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
                    <li className={`nav-item ${isActiveRoute('/admin') ? 'active' : ''}`}>
                        <Link to="/admin" className="nav-link">
                            <i className="fas fa-th-large"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActiveRoute('/admin/usuarios') ? 'active' : ''}`}>
                        <Link to="/admin/usuarios" className="nav-link">
                            <i className="fas fa-clipboard-list"></i>
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActiveRoute('/admin/editar-producto') ? 'active' : ''}`}>
                        <Link to="/admin/editar-producto" className="nav-link">
                            <i className="fas fa-edit"></i>
                            <span>Editar Producto</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <i className="fas fa-user-friends"></i>
                            <span>Customers</span>
                        </Link>
                    </li>
                </ul>

                {/* Utility Links */}
                <hr className="sidebar-divider" />
                <ul className="sidebar-utility">
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <i className="fas fa-user-plus"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <i className="fas fa-search"></i>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <i className="fas fa-question-circle"></i>
                            <span>Help</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Volver al sitio</span>
                        </Link>
                    </li>
                </ul>

                {/* Bottom Profile */}
                <hr className="sidebar-divider" />
                <div className="sidebar-profile">
                    <div className="profile-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <span className="profile-text">Admin</span>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="admin-main">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;