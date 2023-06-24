//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function print21Times(num){
  for(let i= 1;i<=num;i++){
    document.querySelector('h2').innerText += (i)+' 21\n'
    console.log(21)
  }
}
print21Times(21)

//Bonus can you make it print '21' 21 times to the dom?
