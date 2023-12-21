
// Write a program to print the greatest number in given two numbers?
const prompt = require("prompt-sync")();

// let num1=prompt("Enter the number");
// let num2=prompt("Enter the second number");
// if(num2>num1)
// console.log(`${num2} is greater than ${num1}`);
// else
// console.log(`${num1} is greater than ${num2}`);

//a simpple approach
let arr=new Array();
arr.push(prompt("Enter the number:"));
arr.push(prompt("Enter the number:"));
console.log(Math.max(...arr))


