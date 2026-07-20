const prompt = require("prompt-sync")();

let x, y, min, max, soma;

x = Number(prompt());
y = Number(prompt());

if(x < y) {
    min = x;
    max = y;
}
else {
    min = y;
    max = x;
}

soma = 0;
for(let index = min + 1; index < max; index +=1) {
    if(index % 2!= 0) {
        soma += index;
    }
}
console.log(soma);