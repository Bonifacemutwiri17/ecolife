/* EcoLife JS */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Simple testimonial slider
    let current = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    setInterval(() => {
        testimonials[current].style.display = 'none';
        current = (current + 1) % testimonials.length;
        testimonials[current].style.display = 'block';
    }, 8000);
});