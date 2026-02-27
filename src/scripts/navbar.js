document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-button');
  const navbar = document.querySelector('.nav');
  
  const getNavbarHeight = () => {
    return navbar ? navbar.offsetHeight : 0;
  };
  
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      
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
        
        const navbarHeight = getNavbarHeight();
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        const navLinks = document.getElementById('main-menu');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
  
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const navLinks = document.getElementById('main-menu');
      navLinks.classList.toggle('active');
    });
  }
});
