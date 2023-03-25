// #16: Create a function that will return a Boolean specifying if a number is prime
function prime(n){
    var prime_number = 1
    if(n < 2){
        return false;
    }
    else if(n == 2){
        return true
    }
    else{
        for(var i = 2; i <= n/2; i++){
            if(n%i == 0){
                prime_number = 0;
                break
            }
        }
        if(prime_number == 0){
            return false
        }
        else{
            return true
        }
    }
}

console.log(prime(12))

/* Expected output
2  is prime?  true
3  is prime?  true
4  is prime?  false
5  is prime?  true
9  is prime?  false
 */
