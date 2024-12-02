// Selección del formulario y el cuerpo de la tabla donde se mostrarán los datos
const newUserForm = document.getElementById('newUserForm');
const userTableBody = document.getElementById('userTableBody');

// Arreglo para almacenar los registros de usuarios
let users = [];

// Función para agregar un nuevo usuario
function addUser(name, email, dob, address, phone) {
    // Crear un objeto usuario con los datos proporcionados
    const user = {
        id: users.length + 1, // Asignar un ID único basado en la longitud del arreglo
        name: name,
        email: email,
        dob: dob,
        address: address,
        phone: phone
    };

    // Agregar el usuario al arreglo
    users.push(user);

    // Actualizar la tabla con los nuevos datos
    updateUserTable();
}

// Función para actualizar el contenido de la tabla
function updateUserTable() {
    // Limpiar el cuerpo de la tabla antes de actualizar
    userTableBody.innerHTML = '';

    // Recorrer el arreglo de usuarios y agregar filas a la tabla
    users.forEach((user) => {
        const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.dob}</td>
                    <td>${user.phone}</td>
                    <td>${user.address}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        userTableBody.innerHTML += row; // Agregar la fila a la tabla
    });
}

// Función para eliminar un usuario
function deleteUser(id) {
    // Filtrar el arreglo para excluir al usuario con el ID especificado
    users = users.filter(user => user.id !== id);

    // Actualizar la tabla con los datos restantes
    updateUserTable();
}

// Función para editar un usuario
function editUser(id) {
    const user = users.find(user => user.id === id); // Buscar el usuario por ID

    if (user) {
        // Llenar el formulario de edición con los datos del usuario
        document.getElementById('edit-user-id').value = user.id;
        document.getElementById('edit-name').value = user.name;
        document.getElementById('edit-email').value = user.email;
        document.getElementById('edit-dob').value = user.dob;
        document.getElementById('edit-address').value = user.address;
        document.getElementById('edit-phone').value = user.phone;

        // Mostrar el modal de edición
        const editModal = new bootstrap.Modal(document.getElementById('editUserModal'));
        editModal.show();
    }
}

// Manejar el evento de guardar los cambios en el formulario de edición
const editUserForm = document.getElementById('editUserForm');
editUserForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Obtener los valores del formulario de edición
    const id = parseInt(document.getElementById('edit-user-id').value, 10);
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const dob = document.getElementById('edit-dob').value;
    const address = document.getElementById('edit-address').value;
    const phone = document.getElementById('edit-phone').value;

    // Actualizar los datos del usuario en el arreglo
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { id, name, email, dob, address, phone };
        updateUserTable(); // Actualizar la tabla
    }

    // Cerrar el modal de edición
    const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
    modal.hide();
});

// Manejar el evento de envío del formulario
newUserForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Llamar a la función para agregar un usuario
    addUser(name, email, dob, address, phone);

    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('newUserModal'));
    modal.hide();

    // Reiniciar el formulario
    newUserForm.reset();
});