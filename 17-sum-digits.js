// #17: Calculate the sum of digits of a positive integer number

// Input: 1235231


function sum(number){
    var num = number;
    var remainder;
    var sum = 0;
    while(num != 0){
        remainder = Math.floor(num % 10)
        sum = sum + remainder;
        num = Math.floor(num / 10)
    }
    return sum
}

console.log(sum(1235231));

/* Expected output
Sum:  17
 */
