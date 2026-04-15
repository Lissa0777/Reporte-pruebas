function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    // ERROR 1: El cliente pide mínimo 3 caracteres, pero algo falla aquí...
    if (nombre.length <= 2) {
        return "Nombre muy corto";
    }

    // ERROR 2: El sistema está dejando registrar menores de edad.
    if (edad > 100) {
        return "Edad no permitida";
    }

    // ERROR 3: Las contraseñas no se están comparando.
    if (pass.length < 8) {
        return "Contraseña débil";
    }

    return "Registro Exitoso";
}