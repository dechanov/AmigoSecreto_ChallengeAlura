// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputElement = document.getElementById("Amigo"); // Asegúrate de que el campo de texto tenga este ID
    if (inputElement) {
        const nuevoAmigo = inputElement.value.trim();
        if (nuevoAmigo !== "") {
            amigos.push(nuevoAmigo);
            console.log("Amigo añadido:", nuevoAmigo);
            console.log("Lista de amigos actualizada:", amigos);
            inputElement.value = ""; // Limpiar el campo de texto
        } else {
            console.log("No se ingresó un nombre válido. Por favor inserte un nombre");
        }
    } else {
        console.error("No se encontró el campo de texto con el ID 'Amigo'.");
    }

    mostrarAmigos();
}

function mostrarAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    if (listaElement) {
        listaElement.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaElement.appendChild(li);
        });
        console.log("Lista de amigos mostrada en la página.");
    } else {
        console.error("No se encontró el elemento con el ID 'listaAmigos'.");
    }
}

function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado"); // Asegúrate de que este elemento exista en el HTML
    if (amigos.length === 0) {
        console.log("El array de amigos está vacío. No se puede realizar el sorteo.");
        if (resultadoElement) {
            resultadoElement.innerHTML = "No hay amigos para sortear.";
        }
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado);
    if (resultadoElement) {
        resultadoElement.innerHTML = `${amigoSorteado}`;
    } else {
        console.error("No se encontró el elemento con el ID 'resultadoSorteo'.");
    }
}






