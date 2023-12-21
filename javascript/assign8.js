const prompt = require("prompt-sync")();
// Write a program to print the least number given two numbers?


// let num1=prompt("Enter the number");
// let num2=prompt("Enter the second number");
// if(num2<num1)
// console.log(`${num2} is lesser than ${num1}`);
// else
// console.log(`${num1} is lesser than ${num2}`);

//a simpple approach
let arr=new Array();
arr.push(prompt("Enter the number:"));
arr.push(prompt("Enter the number:"));
console.log(Math.min(...arr))


