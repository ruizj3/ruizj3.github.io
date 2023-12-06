document.addEventListener("DOMContentLoaded", () => {
    // Example: Add a class to elements when they are scrolled into view
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const position = el.getBoundingClientRect();
            if(position.top < window.innerHeight) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    });
});
