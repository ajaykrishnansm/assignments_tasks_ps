// Write a program to check if a number is having 4 at the unit's place or not?

const prompt = require("prompt-sync")();

//a simple approach
// let num=prompt("Enter the number:");
// if(!isNaN(num)){
//     let lastDigit=num.charAt(num.length-1);
//     if(Number(lastDigit)==4){
//         console.log("The unit place number is 4");
//     }else{
//         console.log("The unit place number is not 4");
//     }

// }
// else{
//     console.log("Excepts a number");
// }

// mathematical approach

let num=prompt("Enter the number:");
if(!isNaN(num)){
if(Number(num)%10==4){
    console.log("The unit place number is 4");
}
else{
            console.log("The unit place number is not 4");
        }
}

else{
    console.log("Excepts a number");
}