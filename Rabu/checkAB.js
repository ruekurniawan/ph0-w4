function checkAB(num) {
  var indexA = [];
  var indexB = [];
  var jarak = [];
  for(let i = 0; i < num.length; i++) {
  	if(num[i] === 'a') {
  		indexA.push(i);
  	}
   	else if (num[i] === 'b') {
  		indexB.push(i);
  	}
  }

  for(let j = 0; j < indexA.length; j++) {
  	for(let k = 0; k < indexB.length; k++) {
  		jarak.push(Math.abs(indexA[j] - indexB[k]));
  	}
  }

  var cek = false
  for(let l = 0; l < jarak.length; l++) {
  	if(jarak[l] === 4) {
  		cek = true;
  	}
  }

  if(cek === true) {
  	return true;
  }
  else {
  	return false;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false