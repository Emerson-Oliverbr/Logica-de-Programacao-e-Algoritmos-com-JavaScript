const prompt = require("prompt-sync")();

const N = Number(prompt());

for(let index = 1; index <= N; index += 1) {
    if(index % 2 == 0) {
        console.log(`${index}^2 = ${index * index}`)
    }
}