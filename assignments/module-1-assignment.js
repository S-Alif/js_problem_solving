/* Write a program that generates a multiplication table for a given number using a for loop. */

function multiplicationTable(num){
    for(var i = 1; i <= 10; i++){
        console.log(""+num+" X "+i+" = "+num*i);
    }
}

multiplicationTable(18);