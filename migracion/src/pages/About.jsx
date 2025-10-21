import React from 'react';
import Newsletter from '../components/common/Newsletter';

const About = () => {
    return (
        <>
            {/* Hero Section para Nosotros */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold mb-4">
                                <i className="fas fa-users me-3" style={{color: 'var(--electric-blue)'}}></i>Nosotros
                            </h1>
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed neque ac ex tincidunt eleifend nec nec ipsum. Duis pretium est quis lacus consectetur lobortis quis non mi.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-building fa-5x" style={{color: 'var(--electric-blue)', opacity: 0.3}}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Principal Nosotros */}
            <section className="py-5" style={{background: 'linear-gradient(135deg, var(--dark-gray) 0%, var(--primary-bg) 100%)'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="display-5 fw-bold mb-4" style={{color: 'var(--electric-blue)', fontFamily: "'Orbitron', monospace"}}>
                                <i className="fas fa-users me-3"></i>Nuestra Historia
                            </h2>
                            <p className="lead mb-4" style={{color: 'var(--white-text)'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <p className="mb-4" style={{color: 'var(--light-gray)'}}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="text-center">
                                        <h4 style={{color: 'var(--neon-green)', fontFamily: "'Orbitron', monospace"}}>500+</h4>
                                        <p style={{color: 'var(--light-gray)', margin: 0}}>Productos</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-center">
                                        <h4 style={{color: 'var(--neon-green)', fontFamily: "'Orbitron', monospace"}}>10K+</h4>
                                        <p style={{color: 'var(--light-gray)', margin: 0}}>Clientes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <div className="text-center p-3" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)'}}>
                                        <i className="fas fa-gamepad fa-2x mb-2" style={{color: 'var(--electric-blue)'}}></i>
                                        <h6 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Gaming</h6>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="text-center p-3" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)'}}>
                                        <i className="fas fa-headset fa-2x mb-2" style={{color: 'var(--electric-blue)'}}></i>
                                        <h6 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Audio</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-center p-3" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)'}}>
                                        <i className="fas fa-mouse fa-2x mb-2" style={{color: 'var(--electric-blue)'}}></i>
                                        <h6 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Periféricos</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-center p-3" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)'}}>
                                        <i className="fas fa-puzzle-piece fa-2x mb-2" style={{color: 'var(--electric-blue)'}}></i>
                                        <h6 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Juegos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Valores */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="display-5 fw-bold" style={{color: 'var(--electric-blue)', fontFamily: "'Orbitron', monospace"}}>
                                <i className="fas fa-star me-3"></i>Nuestros Valores
                            </h2>
                            <p className="lead" style={{color: 'var(--light-gray)'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="text-center p-4" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)', height: '100%'}}>
                                <i className="fas fa-rocket fa-3x mb-3" style={{color: 'var(--electric-blue)'}}></i>
                                <h4 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Innovación</h4>
                                <p style={{color: 'var(--light-gray)'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="text-center p-4" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)', height: '100%'}}>
                                <i className="fas fa-heart fa-3x mb-3" style={{color: 'var(--neon-green)'}}></i>
                                <h4 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Pasión</h4>
                                <p style={{color: 'var(--light-gray)'}}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="text-center p-4" style={{background: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--dark-gray)', height: '100%'}}>
                                <i className="fas fa-handshake fa-3x mb-3" style={{color: 'var(--electric-blue)'}}></i>
                                <h4 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Confianza</h4>
                                <p style={{color: 'var(--light-gray)'}}>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Equipo */}
            <section className="py-5" style={{background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--dark-gray) 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="display-5 fw-bold" style={{color: 'var(--electric-blue)', fontFamily: "'Orbitron', monospace"}}>
                                <i className="fas fa-users-cog me-3"></i>Nuestro Equipo
                            </h2>
                            <p className="lead" style={{color: 'var(--light-gray)'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="text-center">
                                <div className="mb-3">
                                    <i className="fas fa-user-circle fa-5x" style={{color: 'var(--electric-blue)'}}></i>
                                </div>
                                <h5 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Lorem Ipsum</h5>
                                <p style={{color: 'var(--neon-green)', fontWeight: 600}}>CEO & Founder</p>
                                <p style={{color: 'var(--light-gray)', fontSize: '0.9rem'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="text-center">
                                <div className="mb-3">
                                    <i className="fas fa-user-circle fa-5x" style={{color: 'var(--electric-blue)'}}></i>
                                </div>
                                <h5 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Dolor Sit</h5>
                                <p style={{color: 'var(--neon-green)', fontWeight: 600}}>CTO</p>
                                <p style={{color: 'var(--light-gray)', fontSize: '0.9rem'}}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="text-center">
                                <div className="mb-3">
                                    <i className="fas fa-user-circle fa-5x" style={{color: 'var(--electric-blue)'}}></i>
                                </div>
                                <h5 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Amet Consectetur</h5>
                                <p style={{color: 'var(--neon-green)', fontWeight: 600}}>Lead Designer</p>
                                <p style={{color: 'var(--light-gray)', fontSize: '0.9rem'}}>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="text-center">
                                <div className="mb-3">
                                    <i className="fas fa-user-circle fa-5x" style={{color: 'var(--electric-blue)'}}></i>
                                </div>
                                <h5 style={{color: 'var(--white-text)', fontFamily: "'Orbitron', monospace"}}>Adipiscing Elit</h5>
                                <p style={{color: 'var(--neon-green)', fontWeight: 600}}>Marketing Director</p>
                                <p style={{color: 'var(--light-gray)', fontSize: '0.9rem'}}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default About;
