function cariMedian(arr) {
  var midIndex = (arr.length - 1) / 2;
  if(midIndex % 2 === 0){
  	return arr[midIndex];
  }
  else {
  	var lastIndex = Math.floor(midIndex);
  	var afterIndex = Math.round(midIndex);
  	var Median = (arr[lastIndex]+arr[afterIndex]) / 2;
  	return Median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5