function iniciarSesion() {
  // Obtener datos del formulario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Recuperar datos del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Validar que existan datos y coincidan
  if (user && user.email === email && user.password === password) {
      alert("Inicio de sesión exitoso.");
      // Redirigir a otra página si es necesario
      window.location.href = './index.html'; // Cambia por la ruta que necesites
  } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
  }
}