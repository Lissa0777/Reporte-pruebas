function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    // Validar nombre
    if (nombre.length < 3) {
        return "Nombre muy corto";
    }

    // Validar edad
    if (edad < 18 || edad > 99) {
        return "Edad no permitida";
    }

    // Validar contraseñas
    if (pass !== confirmPass) {
        return "Las contraseñas no coinciden";
    }

    return "Registro Exitoso";
}