// Efecto suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(enlace.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
