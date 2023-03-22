// #11: Calculate the average of the numbers in an array of numbers

var ar = [1, 3, 9, 15, 90];
var sum = 0;

for(var i = 0; i < ar.length; i++){
    sum+=ar[i];
}
console.log(sum/ar.length);


/* Expected output
Average: 23.6
 */
