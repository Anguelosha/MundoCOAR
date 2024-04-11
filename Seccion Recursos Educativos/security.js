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

// Función para ejecutar al presionar la tecla 'A'
function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === 'Enter') {
      submitButton.click(); // Simular un clic en el botón al presionar la tecla 'A'
    }
  }
  
  // Agregar un evento global al documento para detectar la pulsación de teclas
  document.addEventListener('keypress', handleKeyPress);
//contenido//


//seccion de los numeros menu de productos//
document.querySelector(".option1").addEventListener("click", () => {
  document.querySelector("#slide1").style.zIndex = "1"
});

document.querySelector(".option2").addEventListener("click", () => {
  document.querySelector("#slide2").style.zIndex = "1"
});

document.querySelector(".option3").addEventListener("click", () => {
  document.querySelector("#slide3").style.zIndex = "1"
});

document.querySelector(".option4").addEventListener("click", () => {
  document.querySelector("#slide4").style.zIndex = "1"
});
