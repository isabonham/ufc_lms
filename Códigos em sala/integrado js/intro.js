let x = 2;
let y = 10;
let soma = x + y;

console.log(soma);

console.log("A soma é " + soma);
console.log(`a soma de ${x} e ${y} é ${soma}`);

let lista = [];
lista.push(3);
lista.push("isa");
lista.push({curso:"DD", ira:8.0})
console.log(lista);

for (let i = 0; i < lista.length; i++) {
    console.log(lista);
}

function somar(x,y) {
    return x + y;
}