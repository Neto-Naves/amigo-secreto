//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() === '' ) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado!');
        return;
    }
    amigos.push(nomeAmigo);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.join(', ');
    document.getElementById('amigo').value = '';
}
function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Adicione pelo menos dois amigos para sorteio!');
            return;
        }
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}!`;

        console.log(amigos);
        console.log(amigoSorteado);
    }