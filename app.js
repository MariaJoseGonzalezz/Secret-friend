//Variables
let amigos = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

//Agregar amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value
    if (nombre === "") {
        alert('Por favor, escribe un nombre');
        return;
}
//Agregar nombre a la lista
amigos.push(nombre);
actualizarLista();
inputAmigo.value =""; 
};

//Actualizar lista
function actualizarLista() {
    listaAmigos.innerHTML = "";

        let li = 0;
        while (li < amigos.length) {
            let nuevoAmigo = document.createElement("li");
            nuevoAmigo.textContent = amigos [li];
            listaAmigos.appendChild(nuevoAmigo);
            li++;
        }
}

//Sortear nombres 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Lista vacía, por favor ingrese un nombre.');
    } else if (amigos.length === 1) {
        alert('Debe ingresar al menos 2 nombres')
    } else {  
        //Nombre aleatorio
    let nombreAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nombreAleatorio];
    resultado.innerHTML = resultado.innerHTML = "¡El amigo sorteado es: " + amigoSorteado + "!";
    }

}
