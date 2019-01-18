function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var result = [];
  var posisiAwal = 0;
  var posisiAkhir = 0;
  for(let i = 0; i < arrPenumpang.length; i++) {
  	var obj = {};
  	obj.penumpang = arrPenumpang[i][0],
  	obj.naikDari = arrPenumpang[i][1],
  	obj.tujuan = arrPenumpang[i][2],
  	obj.bayar = 0
  	
  	for(let j = 0; j < rute.length; j++) {
  		if(rute[j] === obj.naikDari) {
  			posisiAwal = j;
  		}
  		else if(rute[j] === obj.tujuan) {
  			posisiAkhir = j;
  		}
  	}
  	obj.bayar = Math.round(posisiAkhir - posisiAwal) * 2000;
  	result.push(obj);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]