const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const content = document.getElementById('content_glob');

// Define la contraseña que deseas utilizar
const correctPassword = 'madrededios.coar.edu.pe';

// Agrega un evento de clic al botón de ingreso
submitButton.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Si la contraseña es correcta, muestra el contenido protegido
        content.style.display = 'block';
        // Oculta el formulario de contraseña
        document.querySelector('.password-form').style.display = 'none';
    } else {
        // Si la contraseña es incorrecta, muestra un mensaje de error
        alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
    }
});


//contenido//


