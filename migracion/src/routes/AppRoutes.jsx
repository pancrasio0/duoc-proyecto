import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AdminLayout from '../components/admin/AdminLayout';

// Pages - se crearán después
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import PaymentResult from '../pages/PaymentResult';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';

// Admin pages
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import EditProduct from '../pages/admin/EditProduct';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas con layout normal */}
                <Route path="/*" element={
                    <div className="app-container">
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/productos" element={<Products />} />
                                <Route path="/producto/:id" element={<ProductDetail />} />
                                <Route path="/carrito" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/payment-result" element={<PaymentResult />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/registro" element={<Register />} />
                                <Route path="/perfil" element={<Profile />} />
                                <Route path="/nosotros" element={<About />} />
                                <Route path="/blogs" element={<Blogs />} />
                                <Route path="/contacto" element={<Contact />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                } />
                
                {/* Rutas de administración con layout específico */}
                <Route path="/admin" element={
                    <AdminLayout>
                        <Dashboard />
                    </AdminLayout>
                } />
                <Route path="/admin/usuarios" element={
                    <AdminLayout>
                        <Users />
                    </AdminLayout>
                } />
                <Route path="/admin/editar-producto" element={
                    <AdminLayout>
                        <EditProduct />
                    </AdminLayout>
                } />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
