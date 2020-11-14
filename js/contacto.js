function validacion() {
    var error = false;
    var mensajeError = "";
    var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var regexTelefono = /^[0-9]{4}\-[0-9]{4}$/;

    if (document.getElementById("nombre").value == "") {
        error = true;
        mensajeError += "<p>Nombre no puede estar vacío</p>";
    }
    if (document.getElementById("apellido").value == "") {
        error = true;
        mensajeError += "<p>Apellido no puede estar vacío</p>";
    }
    if (!regexEmail.test(document.getElementById("correo").value)) {
        error = true;
        mensajeError += "<p>El email es inválido</p>"
    }
    if (!regexTelefono.test(document.getElementById("telefono").value)) {
        error = true;
        mensajeError += "<p>El teléfono es inválido</p>"
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }
    return true;
}

function contar() {
    const TOTAL = 1000;
    var escritos = document.getElementById("consulta").value.length;
    var restantes = TOTAL - escritos;
    document.getElementById("caracteres").innerHTML = restantes;
}