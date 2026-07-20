const prompt = require("prompt-sync")();

const N = Number(prompt());

for(let index = 1; index <=10; index +=1) {
    console.log(`${index} x ${N} = ${index * N}`);
}