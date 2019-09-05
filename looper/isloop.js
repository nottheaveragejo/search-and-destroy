'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let arr = []
  let node = linkedlist.head
  console.log(linkedlist)
  while(node.next != null){
    if(arr.includes(node.value))
    {
      return true
   }
    else{
      arr.push(node.value)
      node = node.next
    }
    // console.log(arr)
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
