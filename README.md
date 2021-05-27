# Logica js - funções e loop ⚡

### função:

Uma função é um conjunto de ações. 
<br> É criada por meio da expressão `function`, pode ou não receber parâmetros e possui um corpo envolvido por chaves. 
A expressão `return` determina o valor de retorno da função. 

Exemplo:

``` 
function square(x) { 
  return x * x; `
} 
```


### loop:

Loop, ou estrutura de repetição, é usado para voltar a um ponto do código e repetí-lo até certa condição. Pode ser feito com for, while e com do...while..

```
for (var numero = 0; numero <= 10; number = number + 2)
  console.log(number)
  
  //vai imprimir 0, 2, 4, 6, 8, 10
```

A primeira parte indica o ponto de partida, a segunda parte indica o ponto de chegada e a terceira parte indica o intervalo até chegar no ponto de chegada.

```
var numero = 0;
while (numero <= 10) {
    console.log(numero)
  numero = numero + 2
}
```

```
var numero = 0
do {
  console.log(numero)
  numero = numero + 2
} while (numero <= 10);



```

