// #10: Calculate the sum of numbers in an array of numbers

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = 0;

for(var i = 0; i < ar.length; i++){
    sum+=ar[i];
}
console.log(sum);

/* Expected output
145
 */
