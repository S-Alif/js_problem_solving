// #13: Find the maximum number in an array of numbers

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max;
for(var i = 0; i < ar.length; i++){
    if(ar[i] > ar[i+1]){
        max = ar[i];
    }
}
console.log("Max: "+max);

/* Expected output
Max: 90
 */
