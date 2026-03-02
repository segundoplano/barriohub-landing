if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const slides = track.children;
    const total = slides.length;
    let current = 0;

    // DOTS
    const dotsContainer = document.getElementById('carousel-dots');
    const dots = dotsContainer ? dotsContainer.children : [];

    const updateCarousel = () => {
      track.style.transform = `translateX(-${current * 100}%)`;

      // actualizar dots activos
      if (dots.length) {
        Array.from(dots).forEach(dot => dot.classList.remove('active'));
        dots[current]?.classList.add('active');
      }
    };

    document.getElementById('prev')?.addEventListener('click', () => {
      current = current === 0 ? total - 1 : current - 1;
      updateCarousel();
    });

    document.getElementById('next')?.addEventListener('click', () => {
      current = current === total - 1 ? 0 : current + 1;
      updateCarousel();
    });

    // click en dots
    if (dots.length) {
      Array.from(dots).forEach(dot => {
        dot.addEventListener('click', e => {
          const index = Number(e.target.dataset.index);
          current = index;
          updateCarousel();
        });
      });
    }

    // activar estado inicial
    updateCarousel();
  });
}