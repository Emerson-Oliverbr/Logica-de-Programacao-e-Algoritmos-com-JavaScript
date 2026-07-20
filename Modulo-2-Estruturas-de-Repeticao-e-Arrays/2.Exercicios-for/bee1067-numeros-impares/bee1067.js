const prompt = require("prompt-sync")();

const X = Number(prompt());

for(let index = 0; index <= X; index += 1) {
    if(index % 2 != 0) {
        console.log(index);
    }
}