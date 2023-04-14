var number = 20;

number += 10;
number -= 10.5;
number *= 5;
number /20;

console.log(number)

// retorna o resto da divisão
const result = number % 5

console.log(result)


let number = 20;

const maiorQue = number > 20; // false
const maiorIgual = number >=20; // true
const menorQue = number <20; // false
const menorIgual = number <=20; // true
const igual = number ==20; // true
const diferente = number !=20; //false



// compara valor e tipo
const estritamenteIgual = number === "20";
const estritamenteDiferente = number === 20;

igual // igual
estritamenteIgual // false


let a = 5;
let b = 10;

const result1 = a === 5 && b === 6;
result1 // false
const result2 = a === 5 && b === 10;
result2 // true
const result3 = a === 5 || b === 6;
result3 // true
const result4 = !(a === 5)
result4 // false


let person = {
  name: "sergio",
  age: 53,
  hasCNH: false
}

const maiority_canDrive = person.age > 18 && person.hasCNH

maiority_canDrive // false

// IF ternário
let age = 18;

if(age >= 18){
  console.log("maiority");
}else {
  console.log("minor");
}

// if ternário
const result = age >= 18 ? "maiority" : "minor"
console.log(result);


