//--- Easy
//create a variable and assign it a number
let num = 5;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let loggedValue = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number
loggedValue += 25

//alert that number
alert(loggedValue)

//--- Hard
//create a variable that holds the h1
 let hOneValue = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
hOneValue.addEventListener('click',addTwo);

function addTwo(){
  console.log(num+loggedValue)
}

