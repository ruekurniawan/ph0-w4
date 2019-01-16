function urutkanAbjad(str) {
  var temp = [];
  var tempNewString = '';
  var result = '';
  for(let i = 0; i < str.length; i++) {
    temp.push(str[i]);
  }

  for(let j = 1; j < temp.length; j++) {
    for(let k = 0; k < temp.length; k++) {
      if(temp[j] < temp[k]) {
        tempNewString = temp[j];
        temp[j] = temp[k];
        temp[k] = tempNewString;
      }
    }
  }

  for(let l = 0; l < temp.length; l++) {
    result += temp[l];
  }

  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'