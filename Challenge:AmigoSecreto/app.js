let listaNombres = [];

function agregarAmigo() {
    // Obtener el valor del input
    let nombreAmigoSecreto = document.getElementById('amigo').value;

    // Validar que el input no esté vacío y que el nombre no esté repetido
    if (nombreAmigoSecreto.trim() !== "" && !listaNombres.includes(nombreAmigoSecreto.toLowerCase())) {
        // Agregar el nombre a la lista (en minúsculas)
        listaNombres.push(nombreAmigoSecreto.toLowerCase());

        // Limpiar el input
        document.getElementById('amigo').value = "";

        // Mostrar la lista actualizada
        mostrarNombre();

        // Mostrar la lista actualizada en la consola (opcional)
        console.log(listaNombres);
    } else {
        alert("El nombre está vacío o ya existe en la lista.");
    }
}

// Función para seleccionar elementos del DOM y agregarles texto de manera simple
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para sortear amigo
function sortearAmigo() {
    // Verificamos que la lista tenga más de 1 nombre para ejecutar el sorteo
    if (listaNombres.length < 2) {
        alert("No hay suficientes nombres para realizar un sorteo D:");
        return;
    }

    // Seleccionamos un número de la lista aleatorio
    let amigoAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSecreto = listaNombres[amigoAleatorio];

    // Mostrar el nombre sorteado en la pantalla
    asignarTextoElemento('resultado', `Tu amigo secreto es ${amigoSecreto}`);

    // Eliminar el nombre sorteado de la lista
    listaNombres.splice(amigoAleatorio, 1);

    // Mostrar la lista actualizada en la consola (opcional)
    console.log(listaNombres);

    // Mostrar un mensaje si no hay más nombres para sortear
    if (listaNombres.length === 0) {
        asignarTextoElemento('resultado', "¡Todos los amigos han sido sorteados!");
    }
}

// Función para mostrar los nombres en la pantalla
function mostrarNombre() {
    let listaWeb = listaNombres.join("<br>");
    asignarTextoElemento('listaAmigos', 'Lista de amigos: ' + listaWeb);
}