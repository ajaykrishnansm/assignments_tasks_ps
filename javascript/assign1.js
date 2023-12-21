// Write a program to check if a number is divisible by 7 or not?
const prompt = require('prompt-sync')();
let num=prompt("Enter the number to check:");
let lastDigit=num.charAt(num.length-1);
let lastDigitDoubled=Number(lastDigit)*2;
let remainingNum=Number(num.substring(0,num.length-1));
let result=null;
if(remainingNum>lastDigitDoubled){
    result=remainingNum-lastDigitDoubled;
}else{
    result=lastDigitDoubled-remainingNum;
}
if(result % 7 ==0){
console.log(result);
console.log("Divisible!");
}else{
    console.log("Not Divisible");
}
