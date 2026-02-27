// Script para scroll suave hacia las secciones del navbar
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-button');
  const navbar = document.querySelector('.nav');
  
  // Obtener la altura del navbar dinámicamente
  const getNavbarHeight = () => {
    return navbar ? navbar.offsetHeight : 0;
  };
  
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      
      // Mapeo de destinos
      let targetElement = null;
      
      if (href === '#inicio' || href === '/') {
        targetElement = document.querySelector('.introduccion');
      } else if (href === '#descubre') {
        targetElement = document.querySelector('.descubre');
      } else if (href === '#impulsa' || href === '/Impulsa/') {
        targetElement = document.querySelector('.impulsa');
      } else if (href === '#crece') {
        targetElement = document.querySelector('.crece');
      }
      
      if (targetElement) {
        e.preventDefault();
        
        // Obtener la altura del navbar
        const navbarHeight = getNavbarHeight();
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        // Scroll suave hacia el elemento con offset del navbar
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        const navLinks = document.getElementById('main-menu');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
  
  // También permitir scroll desde los enlaces del menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const navLinks = document.getElementById('main-menu');
      navLinks.classList.toggle('active');
    });
  }
});
