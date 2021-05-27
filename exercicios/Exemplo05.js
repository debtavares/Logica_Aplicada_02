// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e
// 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

// function calculadora(n1,n2)

let operador = '+'
let n1 = 5
let n2 = 5

switch (operador) {

    case '+':
        console.log(n1+n2)
        break

    case '-':
        console.log(n1-n2)
        break

    case '*':
        console.log(n1*n2)
        break

    case '/':
        console.log(n1/n2)
    break

    default:
        console.log(` ${operador} não é um dos quatro operadores.`)
} 