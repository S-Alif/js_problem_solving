// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var show = "";
for(var i = 0; i < ar.length; i++){
    if(ar[i] > 0){
        show += ar[i] + ", ";
    }
}
console.log("["+show+"\b\b]");

/* Expected output
[10, 12, 5, 90, 0, 1]
 */
