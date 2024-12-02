function RegistroUsuario() {
  const user = {
      nombre: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
  }

  // Guardamos toda la información del usuario en localStorage
  localStorage.setItem('user', JSON.stringify(user));
  console.log(user);

  // Redirigimos a la página de inicio de sesión
  window.location.href = './iniciarsesion.html';
}