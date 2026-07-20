//Posição"indices"
                //0  1  2  3  4    5            
const meuArray = [1, 33, 7.99, 8, 5, 41.4, -12, -199];

console.log(meuArray);
console.log(`Tamanho do meu array = ${meuArray.length}`);
console.log("+----------------------+");

for(let index = 0; index < meuArray.length; index +=1) {
    console.log(meuArray[index]);
}
