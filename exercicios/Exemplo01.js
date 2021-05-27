// 1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão 
// ser substituidos pela palavra "PULOU".

var imprimir = 10
while (imprimir <= 60) {
    console.log(imprimir)
    imprimir = imprimir + 5 

    if (imprimir==35 || imprimir==45) {
        console.log("PULOU")
        imprimir = imprimir + 5                           // continue, ão quisessse ne substituir.

    } 
   
}   

