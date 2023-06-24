// *Variables*
// Create a variable and console log the value
let newVar = 2;

// Create a variable, add 10 to it, and alert the value
let newVar2 = 5
 newVar2 += 10
 alert(newVar2)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(n1,n2,n3,n4){
  alert(n1-n2-n3-n4)
}

// Create a function that divides one number by another and returns the remainder
function devideTwo(n1,n2){
  return(n1/n2)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwo(n1,n2){
  return n1+n2 >50? 'Jumanji':null
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThree(n1,n2,n3){
  if((n1*n2*n3)%3 == 0){
    alert('Zebra')
  } 
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function multiWord(word, num){
  for(let i = 1;i<=num;i++){
    console.log(word)
  }
}