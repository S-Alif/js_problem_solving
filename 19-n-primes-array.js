//  Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// Input: 10, 100
function prime(terms, startAt){
    var n = 0
    let array = []
    for(var i = startAt; n < terms; i++){
        var flag = 0
        for(var j = 2; j <= i/2; j++){

            if(i % j == 0){
                flag = 1
                break
            }
        }

        if(flag != 1){
            array.push(i)
            n++
        }
    }
    return array;
}

console.log(prime(10, 100))

/* Expected output
[ 101, 103, 107, 109, 113, 127, 131, 137, 139, 149 ]
 */
