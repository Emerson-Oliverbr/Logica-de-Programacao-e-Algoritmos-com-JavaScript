const prompt = require("prompt-sync")();

let C, F, resposta;

do{
    C = Number(prompt("Digite a temperatura em Celsius: "));
    F = 9 * C / 5 + 32;
    console.log(`Equivalente em fahrenheit: ${F.toFixed(1)}`);
    console.log("Deseja repetir (s/n)? ");
    resposta = (prompt());
} while (resposta == "s" || resposta == "S");




