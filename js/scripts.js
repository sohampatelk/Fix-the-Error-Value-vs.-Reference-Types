//https://edabit.com/challenge/3jZyJTfsXTXXwAQkA

// Fix this broken code!
function checkEquals(arr1, arr2) {
    //This campares String and array has a different location reference therefore its value is same then it is not same type
	if (arr1.toString() === arr2.toString()) {
  	return true;
  } else {
  	return false;
  }
}

console.log(checkEquals([1,2,3,4],[1,2,3,4]));
console.log(checkEquals([1,2,3,6],[1,2,3,6]));
console.log(checkEquals([1,2],[1,4]));
console.log(checkEquals([1,"null"],[1,"object"]));


function checkEquals1(arr1, arr2) {
	if (arr1=== arr2) {
  	return true;
  } else {
  	return false;
  }
}
console.log(checkEquals1([1,2,3,4],[1,2,3,4]));
console.log(checkEquals1([1,2,3,6],[1,2,3,6]));
console.log(checkEquals1([1,2],[1,4]));
console.log(checkEquals1([1,"null"],[1,"object"]));