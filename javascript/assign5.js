// Write a program to check if a number is 3-digit numbers or not?

const prompt = require("prompt-sync")();
let num=prompt("Enter the number:");
if(!isNaN(num)){
    if(Number(num)>=10**(3-1) && Number(num)<(10**3)){
        console.log("This is a 3 digit number!");
    }
    else{
        console.log("This is not a 3 digit number!");
    }
}
else{
    console.log("Excepts a number");
}