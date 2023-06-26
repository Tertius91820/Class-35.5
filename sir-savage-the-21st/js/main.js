//Create a function that has a loop that prints '21' 21 times to the console and then call that function
// function print21Times(num){
//   for(let i= 1;i<=num;i++){
//     document.querySelector('h2').innerText += (i)+' 21\n'
//     console.log(21)
//   }
// }
// print21Times(21)

//Bonus can you make it print '21' 21 times to the dom?

// function pipeFix(numbers){
//   console.log(numbers)
//   let newArr =[]
//   for(let i = numbers[0];i <= numbers[numbers.length-1];i++){
//    newArr.push(i)
// }
//   return newArr
// }

// console.log(pipeFix([1,2,3,5,6,8,9]))

function sumMul(n, m) {
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  let sum = 0;
  for (let i = n; i < m; i++) {
   // console.log(i);
   // console.log(n);
    if (i % n === 0) {
      console.log(i);
      sum += i;
     // console.log(sum)
    }
  }

  return sum;
}
console.log(sumMul(2,9));