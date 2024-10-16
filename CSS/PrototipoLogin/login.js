// Obtener el modal, el botón de abrir y el botón de cerrar
const modal = document.getElementById('loginModal');
const loginButton = document.querySelector('.botonn .boton');
const closeButton = document.querySelector('.close');

// Abrir el modal al hacer clic en el botón "Orden en Línea"
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita la redirección por defecto
    modal.style.display = 'block';
});

// Cerrar el modal al hacer clic en el botón de cerrar (×)
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

