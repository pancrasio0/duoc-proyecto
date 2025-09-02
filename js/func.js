document.addEventListener('DOMContentLoaded', function () {
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