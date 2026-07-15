const nota = 80;
let mensagem = "";

if(nota >= 80) {
    mensagem = "Parabéns você foi aprovado!"
}
else if(nota >= 60) {
    mensagem = "Voce está na lista de espera!"
}
else {
    mensagem = "Voce foi reprovado, estude mais!"
}

console.log(mensagem);
