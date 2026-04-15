function validarRegistro(nombre, edad, password, confirmarPassword) {

    // Validar nombre (mínimo 3 caracteres)
    if (nombre.length < 3) {
        console.log("El nombre debe tener al menos 3 caracteres");
        return false;
    }

    // Validar edad (entre 18 y 99)
    if (edad < 18 || edad > 99) {
        console.log("Edad no válida. Debe ser mayor de edad");
        return false;
    }

    // Validar contraseñas iguales
    if (password !== confirmarPassword) {
        console.log("Las contraseñas no coinciden");
        return false;
    }

    console.log("Registro exitoso");
    return true;
}