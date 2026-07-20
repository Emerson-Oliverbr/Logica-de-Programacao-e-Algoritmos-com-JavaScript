const prompt = require("prompt-sync")();

const N = Number(prompt());

let fora = 0;
let dentro = 0;
for(let index = 0; index < N; index +=1) {
    let valores = Number(prompt());
    if(valores >= 10 && valores <= 20) {
        dentro += 1;
    }
    else {
        fora += 1;
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);