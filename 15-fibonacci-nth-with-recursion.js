// #15: Create a function that will find the nth Fibonacci number using recursion
function recursion1(n){
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return recursion1(n - 1) + recursion1(n - 2)
    }
}

console.log(recursion1(10));

/* Expected output
55
 */
