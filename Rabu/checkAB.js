function checkAB(num) {
  var indexA = [];
  var indexB = [];
  var jarak = 0;
  for(let i = 0; i < num.length; i++) {
  	if(num[i] === 'a') {
  		indexA.push(i);
  	}
  	
  	if (num[i] === 'b') {
  		indexB.push(i);
  	}
  }
  // console.log(indexA);
  // console.log(indexB);

  for(let j = 0; j < indexA.length; j++) {
  	for(let k = 0; k < indexB.length; k++) {
  		jarak = Math.abs(indexA[j] - indexB[k]);
  	}
  	if(jarak === 4) {
  		return true
  	} else {
  		return false
  	}
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false