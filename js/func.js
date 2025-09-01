// Funcionalidad básica para el carrito
        document.addEventListener('DOMContentLoaded', function() {
            // Agregar interactividad a los Productos
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    this.style.transition = 'all 0.3s ease';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });

            // Newsletter subscription
            const subscribeBtn = document.querySelector('.newsletter-section .btn-dark');
            subscribeBtn.addEventListener('click', function() {
                const emailInput = document.querySelector('.newsletter-section input[type="email"]');
                if (emailInput.value) {
                    alert('¡Gracias por suscribirte a nuestro newsletter!');
                    emailInput.value = '';
                } else {
                    alert('Por favor, ingresa un email válido.');
                }
            });
        });