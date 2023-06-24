//Create a stopwatch object that has four properties and three methods
let stopWatch = {}
stopWatch.color = 'black'
stopWatch.size = 'small'
stopWatch.brand = 'cisco'
stopWatch.digital = 'true'

stopWatch.beep = function(){
  console.log('beep beep');
}
stopWatch.start = function(){
  console.log('started');
}
stopWatch.stop = function(){
  console.log('stopped');
}