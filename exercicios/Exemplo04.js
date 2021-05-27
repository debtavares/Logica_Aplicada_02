//  4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
//     a) números de 1 a 100  
//     b) quando chegar no número 50 interrompa a instrução e pare o loop 
//     c) quando chegar no número 50 pule a instrução 

//a)
let numero = 0
while (numero <=100) {
    console.log(numero)
    numero++
}

 //b)
let numerob = 0
while (numerob <=100) {
    console.log(numerob)
    numerob++
    if (numerob == 51) 
    break
    
}
//c)
let numeroc = 0
while (numeroc <=100) {
    console.log(numeroc)
    numeroc++
    if (numeroc == 51) 
    numeroc++

}
