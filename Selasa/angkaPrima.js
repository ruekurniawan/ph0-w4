function angkaPrima(angka) {
	for(var i = 2; i < angka; i++) {
		if(angka % i === 0) {
			return false;
		}
	}
	if(angka < 2) {
		return false;
	}
	return true;
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));
