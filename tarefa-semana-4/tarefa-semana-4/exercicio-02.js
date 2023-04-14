/**
 * Faça um programa que receba o nome e idade do usuário e retorne:
 * - o nome do usuário;
 * - se ele é menor ou maior de idade;
 */

window.alert("Enter your name");
var name = alert("Enter your name");
console.log(name);

window.alert("Enter your age");
var age = alert("Enter your age");
console.log(age);

const identity = alert("Enter your noame");
const result = identity;
const major = alert("Enter your age: ");
const result1 = age >= 18 ? "major" : "minor";
console.log("${result}, you are ${result1}.");


// com prompt em vez de alert, mas tem mensagem de erro
var name = window.prompt("Qual é o seu nome?");
console.log(nome);

var age = window.prompt("Qual é a sua idade?");
console.log(idade);

const result = nome
const result1 = age >= 18 ? "maior de idade" : "menor de idade";
console.log("${result}, você é ${result1}.");
