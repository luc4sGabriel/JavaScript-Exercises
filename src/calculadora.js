const adicionar = (numero1,numero2) => numero2 + numero1;

function dividir(numero1,numero2){
    return numero1 / numero2;
}

const multiplicar = (numero1,numero2) => numero1 * numero2;

const subtrair = (numero1,numero2) => numero1 - numero2;

const idade = (anoA,anoN) => anoA - anoN;



module.exports = {
    adicionar,
    multiplicar,
    dividir,
    subtrair,
    idade
}