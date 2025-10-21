import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../data/productos';
import ProductCard from '../components/products/ProductCard';
import Newsletter from '../components/common/Newsletter';
import NotificationContainer from '../components/common/NotificationContainer';
import { useNotifications } from '../hooks/useNotifications';

const Home = () => {
    const productosDestacados = getFeaturedProducts();
    const { notifications, removeNotification } = useNotifications();

    return (
        <>
            <NotificationContainer 
                notifications={notifications} 
                onRemove={removeNotification} 
            />
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-4">Level-up Gamer</h1>
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed neque ac ex tincidunt eleifend nec nec ipsum. Duis pretium est quis lacus consectetur lobortis quis non mi.
                            </p>
                            <Link to="/productos" className="btn btn-ver-productos">
                                <i className="fas fa-download me-2"></i>Ver productos
                            </Link>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src="/img/logo.png" width="400" height="400" alt="Level-up Gamer" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {productosDestacados.map(producto => (
                            <div key={producto.id} className="col-lg-3 col-md-6 mb-4">
                                <ProductCard producto={producto} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Home;
