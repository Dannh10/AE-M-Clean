AOS.init();

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute('href'));
    seccion.scrollIntoView({ behavior: 'smooth' });
  });
});


