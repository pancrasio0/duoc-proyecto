import React, { useState } from 'react';
import Newsletter from '../components/common/Newsletter';

const Blogs = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('all');

    const blogs = [
        {
            id: 1,
            categoria: 'gaming',
            titulo: 'Lorem Ipsum Gaming: La Evolución del Entretenimiento Digital',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            imagen: 'ps5.png',
            autor: 'Admin',
            fecha: '15 Ene 2025',
            tiempoLectura: '5 min'
        },
        {
            id: 2,
            categoria: 'reviews',
            titulo: 'Review Completo: Lorem Ipsum Mouse Gaming Pro',
            excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            imagen: 'g502.png',
            autor: 'TechReview',
            fecha: '12 Ene 2025',
            tiempoLectura: '8 min'
        },
        {
            id: 3,
            categoria: 'tech',
            titulo: 'Lorem Ipsum Tech: El Futuro de los Componentes Gaming',
            excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            imagen: 'notebook.png',
            autor: 'TechGuru',
            fecha: '10 Ene 2025',
            tiempoLectura: '6 min'
        },
        {
            id: 4,
            categoria: 'news',
            titulo: 'Lorem Ipsum News: Últimas Tendencias en Gaming 2025',
            excerpt: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
            imagen: 'hyperxcloud2.png',
            autor: 'NewsEditor',
            fecha: '8 Ene 2025',
            tiempoLectura: '4 min'
        },
        {
            id: 5,
            categoria: 'gaming',
            titulo: 'Lorem Ipsum Board Games: El Renacimiento de los Juegos de Mesa',
            excerpt: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
            imagen: 'catan.png',
            autor: 'BoardGamer',
            fecha: '5 Ene 2025',
            tiempoLectura: '7 min'
        },
        {
            id: 6,
            categoria: 'reviews',
            titulo: 'Review Detallado: Lorem Ipsum Controller Elite',
            excerpt: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            imagen: 'joystick.png',
            autor: 'ControllerPro',
            fecha: '3 Ene 2025',
            tiempoLectura: '9 min'
        }
    ];

    const categorias = [
        { id: 'all', nombre: 'Todos', icono: 'fas fa-th-large' },
        { id: 'gaming', nombre: 'Gaming', icono: 'fas fa-gamepad' },
        { id: 'reviews', nombre: 'Reviews', icono: 'fas fa-star' },
        { id: 'tech', nombre: 'Tecnología', icono: 'fas fa-microchip' },
        { id: 'news', nombre: 'Noticias', icono: 'fas fa-newspaper' }
    ];

    const blogsFiltrados = categoriaActiva === 'all' 
        ? blogs 
        : blogs.filter(blog => blog.categoria === categoriaActiva);

    const handleCategoriaChange = (categoria) => {
        setCategoriaActiva(categoria);
    };

    return (
        <>
            {/* Hero Section para Blogs */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold mb-4">
                                <i className="fas fa-blog me-3" style={{color: 'var(--electric-blue)'}}></i>Blog Gaming
                            </h1>
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed neque ac ex tincidunt eleifend nec nec ipsum. Duis pretium est quis lacus consectetur lobortis quis non mi.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-newspaper fa-5x" style={{color: 'var(--electric-blue)', opacity: 0.3}}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Blogs */}
            <section className="py-5">
                <div className="container">
                    {/* Filtros de categorías */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                {categorias.map(categoria => (
                                    <button 
                                        key={categoria.id}
                                        className={`btn ${categoriaActiva === categoria.id ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => handleCategoriaChange(categoria.id)}
                                    >
                                        <i className={`${categoria.icono} me-2`}></i>{categoria.nombre}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid de Blogs */}
                    <div className="row">
                        {blogsFiltrados.map(blog => (
                            <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="blog-card">
                                    <div className="blog-image-container">
                                        <img src={`/img/${blog.imagen}`} alt="Blog Gaming" className="blog-image" />
                                        <div className="blog-category">
                                            {categorias.find(cat => cat.id === blog.categoria)?.nombre}
                                        </div>
                                        <div className="blog-date">
                                            <i className="fas fa-calendar me-1"></i>{blog.fecha}
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">{blog.titulo}</h5>
                                        <p className="blog-excerpt">
                                            {blog.excerpt}
                                        </p>
                                        <div className="blog-meta">
                                            <div className="blog-author">
                                                <i className="fas fa-user me-1"></i>{blog.autor}
                                            </div>
                                            <div className="blog-read-time">
                                                <i className="fas fa-clock me-1"></i>{blog.tiempoLectura}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Paginación */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <nav aria-label="Paginación de blogs">
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
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default Blogs;