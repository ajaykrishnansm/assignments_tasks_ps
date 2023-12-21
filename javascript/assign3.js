// Write a program to check if a number is positive or not?

const prompt = require("prompt-sync")();
let num=prompt("Enter the number:");
if(Number(num) > 0){
    console.log("This is a positive number");
}
else if(Number(num) < 0){
    console.log("This is a negative number");
}
else{
    console.log("It is 0");
}

