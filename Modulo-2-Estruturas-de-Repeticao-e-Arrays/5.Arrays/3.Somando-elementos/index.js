const meuArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let soma = 0; // variável acumuladora
for(let index = 0; index < meuArray.length; index += 1) {
    soma +=meuArray[index];
}
console.log(soma);
