function ubahHuruf(kata) {
  var result = '';
  var allAbjad = ('abcdefghijklmnopqrstuvwxyz');
  var nextIndex = 0;
  for(let i = 0; i < kata.length; i++) {
    for(let j = 0; j < allAbjad.length; j++) {
      if(kata[i] === allAbjad[j]) {
        nextIndex = j + 1;
        result += allAbjad[nextIndex];
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

// cara lain:
// function ubahHuruf(kata) {
//   var result = [];
//   var allAbjad = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   var array = kata.split("")
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < allAbjad.length; j++) {
//       if(array[i] === allAbjad[j]) {
//         var nextIndex = j + 1;
//         result.push(allAbjad[nextIndex]);
//       }
//     }
//   }
//   return result.join("");
// }