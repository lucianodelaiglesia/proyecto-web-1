function validacion() {
    var error = false;
    var mensajeError = "";

    if (document.getElementById("apyn").value == "") {
        error = true;
        mensajeError += "<p>Nombre y Apellido no puede estar vacío</p>";
    }

    if (document.getElementById("dni").value == "") {
        error = true;
        mensajeError += "<p>DNI no puede estar vacío</p>";
    }

    if (document.getElementById("telefono").value == "") {
        error = true;
        mensajeError += "<p>Telefono no puede estar vacío</p>";
    }

    var contador = -5;
    var contadorSintomas = 0;
    var listaSintoma = document.getElementsByClassName("sintoma");
    for (i in listaSintoma) {
        if ((listaSintoma[i].value == "si" || listaSintoma[i].value == "no") && !listaSintoma[i].checked) {
            contador++;
        }
        if (listaSintoma[i].value == "si" && listaSintoma[i].checked) {
            contadorSintomas++;
        }
    }

    if (document.getElementById("dyc").style.display == "flex" &&
        (document.getElementById("direccion").value == "" || document.getElementById("ciudad").value == "")) {
        error = true;
        mensajeError += "<p>Los campos Dirección y Ciudad no pueden estar vacíos</p>"
    }

    if (contador != 0) {
        error = true;
        mensajeError += "<p>Síntomas sin marcar: " + contador + "</p>";
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }
    alert("El formulario fue completado correctamente. " + contadorSintomas + " síntoma/s de COVID-19 fueron registrados");
    return true;

}

function paisesVisitados() {
    var opciones = document.getElementsByName("exterior");
    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById("paises").style.display = "block";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById("paises").style.display = "none";
        }
    }
}

function mostrarDireccion() {
    var opciones = document.getElementsByName("respirar");
    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById("dyc").style.display = "flex";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById("dyc").style.display = "none";
        }
    }
}