window.addEventListener('scroll', function() {
    const logoNav = document.querySelector('.logo-nav');  // Logo pequeño (navegación)
    const logoPrincipal = document.querySelector('.logo-principal');  // Logo grande
    const nav = document.querySelector('.inicio');  // Barra de navegación (Inicio)

    // Umbral para el scroll, ajusta este valor si es necesario
    const scrollThreshold = 150;

    if (window.scrollY > scrollThreshold) {
        // Si el scroll supera el umbral, muestra el logo pequeño, oculta el logo grande, y añade fondo oscuro a la barra de navegación
        logoNav.style.opacity = '1';
        logoNav.style.transform = 'translateY(0)';
        logoNav.style.transition = 'opacity 0.5s, transform 0.5s';
        logoPrincipal.style.opacity = '0';
        logoPrincipal.style.transition = 'opacity 0.5s';
        nav.classList.add('scrolled');  // Añade la clase que cambiará el fondo
    } else {
        // Si estamos en la parte superior, oculta el logo pequeño, muestra el logo grande y elimina el fondo oscuro de la barra de navegación
        logoNav.style.opacity = '0';
        logoNav.style.transform = 'translateY(-100%)'; // Mueve hacia arriba para que no sea visible
        logoPrincipal.style.opacity = '1';
        nav.classList.remove('scrolled');  // Remueve la clase del fondo oscuro
    }
});