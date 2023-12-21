// Write a program to print the least number in given three numbers?
const prompt=require("prompt-sync")();

let arr=new Array();

arr.push(Number(prompt("Enter the first number:")));
arr.push(Number(prompt("Enter the second number:")));
arr.push(Number(prompt("Enter the third number:")));
// switch(true){

// case (arr[0]>arr[1]&&arr[0]>arr[2]):
//     console.log("The first element is larger");
//     break;

// case (arr[1]>arr[0]&&arr[1]>arr[2]):
//     console.log("The second element is larger");
//     break;


// case (arr[2]>arr[0]&&arr[2]>arr[1]):
//     console.log("The third element is larger");
//     break;

// default:
//     console.log("Please provide Numbers");
// }

// a simple approach
if(!arr.some(isNaN))
console.log(`${Math.max(...arr)} is largest out of others `);
else
console.log("Enter a valid number");

