// use map() to add 10 if the array element is less than 5

const originalArray = [1,6,2,7,3,8,4,9,5,10]

function checkElement(element){
    if(element < 5){
        return element + 10
    }else{
        return element
    }
}
const newArray = originalArray.map(checkElement)

console.table(newArray);