
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const track = document.getElementById('carousel-track');
        if (!track) return;

        const slides = track.children;
        const total = slides.length;
        let current = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${current * 100}%)`;
        };

        document.getElementById('prev')?.addEventListener('click', () => {
            current = current === 0 ? total - 1 : current - 1;
            updateCarousel();
        });

        document.getElementById('next')?.addEventListener('click', () => {
            current = current === total - 1 ? 0 : current + 1;
            updateCarousel();
        });
    });
}
