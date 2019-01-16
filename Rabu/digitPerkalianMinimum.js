function digitPerkalianMinimum(angka) {
  var result = [];
  var temp = '';
  for(let i = 0; i <= angka; i++) {
    for(let j = 0; j <= angka; j++) {
      if(i * j === angka) {
        temp = String(i) + String(j);
        result.push(temp);
      }
    }
  }
  digitMinim = result[0].length;
  for(let k = 0; k < result.length; k++) {
    if(digitMinim > result[k].length) {
      digitMinim = result[k].length;
    }
  }
  return digitMinim;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2