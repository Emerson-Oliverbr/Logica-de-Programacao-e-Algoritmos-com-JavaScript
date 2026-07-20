const prompt = require("prompt-sync")();

const N = Number(prompt());
let valores;

let soma = 0;
for (let index = 0; index < N; index += 1) {  
  valores = Number(prompt()); 
  soma += valores;
}
console.log(soma);