// Write a program to check if a number is multiple of 3 or not?

const prompt=require('prompt-sync')();
let num=prompt("Enter the Number to check:");
let sum=0;
for(let digit of num){
    console.log(digit);
sum+=Number(digit);
}
if(sum%3==0){
console.log("It is divisible by 3!");
}else{
    console.log("It is not divisible by 3");
}
