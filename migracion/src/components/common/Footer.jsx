import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">&copy; 2025 Level-up Gamer. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
