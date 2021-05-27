// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e
// 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calculadora(n1,n2) {
    if (operador == '+') {
        return n1+n2
    } else if (operador == '-') {
        return n1-n2
    } else if (operador == '*') {
        return n1*n2
    } else if (operador == '/') {
        return n1/n2
    } else {
        console.log("Entrada inválida")
    }
}


let operador = '/'

console.log(calculadora(5,5))