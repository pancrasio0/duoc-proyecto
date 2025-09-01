document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    const subscribeBtn = document.querySelector('.newsletter-section .btn-dark');

    subscribeBtn.addEventListener('click', function () {
        const emailInput = document.querySelector('.newsletter-section input[type="email"]');
        const email = emailInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            alert('¡Gracias por suscribirte a nuestro newsletter!');
            emailInput.value = '';
        } else {
            alert('Por favor, ingresa un email válido.');
        }
    });

});