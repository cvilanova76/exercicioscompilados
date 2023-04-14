/**
 * Faça um programa que receba um número e retorne se ele é par ou impar
 */

const number = alert("Enter a number: ");
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// opção com if ternário

const number = alert("Enter a number: ");
const result = number % 2 == 0 ? "even" : "odd";
console.log("The number is ${result}.");
