document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');
  const navLinks = mainNav.querySelectorAll('.nav-links a');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      // Alternar clases para mostrar/ocultar menú y animar botón
      mainNav.classList.toggle('is-active');
      hamburgerBtn.classList.toggle('is-active');

      // Actualizar el atributo ARIA para accesibilidad
      const isActive = mainNav.classList.contains('is-active');
      hamburgerBtn.setAttribute('aria-expanded', isActive);
    });
  }

  // Cierra el menú móvil cuando se hace clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('is-active')) {
        mainNav.classList.remove('is-active');
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
