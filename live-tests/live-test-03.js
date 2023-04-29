// sum of the squares of even numbers in an array

function sumOfEvenSquares(array){
    var sum = 0;
    
    for(num in array){
        if(array[num] % 2 == 0){
            sum = sum + (array[num] * array[num])
        }
    }

    return sum
}

const arr = [1,2,3,4,5]
console.log(sumOfEvenSquares(arr))