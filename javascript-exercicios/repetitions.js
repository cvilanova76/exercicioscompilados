
let contador = 0;

++contador;
// contador +=1;
// contador = contador + 1

console.log (contador)

for (let contador = 0; contador < 10 ; contador ++){
    console.log(contador)
  };
// conta de 0 a 9

for (let contador = 0; contador <= 10 ; contador ++){
    console.log(contador)
  };
// conta de 0 a 10  


for (let contador = 10; contador > 0 ; contador --){
    console.log(contador)
  };
// contagem regressiva de 10 a 1

for (let contador = 10; contador >= 0 ; contador --){
    console.log(contador)
  };
// contagem regressiva de 10 a 0  
  

for(let contador = 10; contador <= 10; contador--){
    console.log("contador" + contador)
  };
  //  loop infinito -- dá mensagem de erro  

  let number = 42;
let dividor = 1;

while (dividor <= number) {
  let rest = number % dividor;
  if (rest == 0) {
    console.log("Dividor found: " + dividor);
  }
  dividor = dividor + 1;
}
// dá o resultado do resto da divisao

let counter = 0;

do {
  console.log("Counter is valid: " + counter);
} while (counter == 1);
// 


  