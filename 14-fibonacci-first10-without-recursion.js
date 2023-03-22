// #14: Print the first 10 Fibonacci numbers without recursion
var sum = 0
var sum2 = 1
var sum3 = 0
for(var i = 0; i < 11; i++){
    console.log(sum3);
    sum = sum2
    sum2 = sum3
    sum3 = sum + sum2
}

/* Expected output
0
1
1
2
3
5
8
13
21
 */
