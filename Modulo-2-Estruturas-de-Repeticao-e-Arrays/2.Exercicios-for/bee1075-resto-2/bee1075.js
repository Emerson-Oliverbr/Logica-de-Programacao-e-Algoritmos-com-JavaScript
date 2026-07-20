const prompt = require("prompt-sync")();
const N = parseInt(prompt());

for(let index = 1; index <= 10000; index += 1 ) {
    if(index % N === 2) {
        console.log(index);
    }
}