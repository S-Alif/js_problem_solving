// #16: Create a function that will return a Boolean specifying if a number is prime
function prime(n){
    var prime_number = 1;
    if(n < 2){
        return false;
    }
    else{
        for(var i = 0; i < n; i++){
            if(n%2 == 0){
                prime_number = 0;
                break;
            }
        }
        if(prime_number == 0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(prime(9));

/* Expected output
2  is prime?  true
3  is prime?  true
4  is prime?  false
5  is prime?  true
9  is prime?  false
 */
