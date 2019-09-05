'use strict';

// Complete this algo
// the O(n) way
// const binarySearch = (array, target) => {
// 	for(let i = 0; i < array.length; i++){
// 		if(array[i] === target){
// 			return true
// 		}
// 	}
// 	return false
// };


//the good way

const binarySearch = (array, target) => {
	while (array.length > 1) {
  	const middle = Math.floor(array.length / 2);
  	if (array[middle] === target) {
  		return true;
  	} else if (target < array[middle]) {
  		array = array.slice(0, middle);
  	} else {
  		array = array.slice(middle);
		}
	}
	return array[0] === target;
	//console.log(array(Math.floor(array.length/2)))
}
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
