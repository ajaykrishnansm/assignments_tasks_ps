// Write a program to print even or odd for a given number?
const prompt = require("prompt-sync")();
let num=prompt("Enter the number:");
if(!isNaN(num)){
    if(num%2==0)
    console.log(`${num} This is an even number!`);
    else
    console.log(`${num} This is an odd number!`);
}
else{
    console.log("Excepts a number");
}