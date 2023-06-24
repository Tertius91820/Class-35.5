// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function hiAndBye(arr){
 arr[0] < arr[arr.length-1] ? alert('Bye'):
 arr[0] > arr[arr.length-1] ? alert('Hi'): alert('We close in an hour')

}

hiAndBye([2,5,2,6,2])