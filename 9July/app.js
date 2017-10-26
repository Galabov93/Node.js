// THE GLOBAL OBJECT METHODS EXPLORE BELOW

// var time = 0;

// var timer = setInterval(function(){
// 	time+=2;
//     console.log(time + '3 seconds have passed');

//     if (time > 5){
//     	clearInterval(timer);
//     }
// },3000);

// console.log(__dirname);

// console.log(__filename);

var counter = require('./count.js');

console.log(counter([1,2,3]));