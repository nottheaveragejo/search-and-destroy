'use strict';

// Complete this algo
const minJumps = arr => {
let counter = 0;
let sum = 0
let totalLength = arr.length
// let array = arr.slice(sum,arr[sum])
// let jumpSize = array.reduce(function(a, b){
//   return Math.max(a, b)
// })
//console.log('jump size', jumpSize ,array)


while(sum < totalLength){
//   console.log(Math.max(...arr.slice(sum,arr[sum])))
// let jumpSize = Math.max(...arr.slice(sum,arr[sum]))
let array = arr.slice(sum,arr[sum])
if(sum != totalLength -1){

  let jumpSize = array.reduce(function(a, b){
    return Math.max(a, b)})
  console.log('jump size', jumpSize)
  sum += jumpSize
  console.log(sum)
  counter++
}
else{
  counter ++
}
 }
 return counter
};

module.exports = minJumps
