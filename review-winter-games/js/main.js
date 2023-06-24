//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNum(arr){
  let newArr =[]
  arr.forEach(num => {
    num % 2 == 0 ? newArr.push(num) : null 
  });
  return newArr
}

//OR
function onlyEvens(arr){
  return arr.filter(num=> num % 2 === 0)
}

console.log(evenNum([1,2,3,4,5,6,7,8]))

console.log(onlyEvens([1,2,3,4,5,6,7,8]));