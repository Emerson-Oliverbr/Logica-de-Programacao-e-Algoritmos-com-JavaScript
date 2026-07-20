const prompt = require("prompt-sync")();

const N = Number(prompt());

for (let index = 0; index < N; index += 1) {
    let valor = Number(prompt());
    
    if (valor === 0) {
        console.log("NULL");
    }     
    else if (valor % 2 === 0) {
        if (valor > 0) {
            console.log("EVEN POSITIVE");
        } else {
            console.log("EVEN NEGATIVE");
        }
    }     
    else {
        if (valor > 0) {
            console.log("ODD POSITIVE");
        } else {
            console.log("ODD NEGATIVE");
        }
    }
}