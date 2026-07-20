const prompt = require("prompt-sync")();

const N = parseInt(prompt());

let media = 0;
for(let index = 0; index < N; index +=1) {
    let valor1 = Number(prompt());
    let valor2 = Number(prompt());
    let valor3 = Number(prompt());

    media = ((valor1 * 2) + (valor2 * 3) + (valor3 * 5)) / 10.0;
    console.log(media.toFixed(1));
}

