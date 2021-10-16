function convertWeight(weight, ounces) {
	const oz = ounces ? ounces / 16 : 0;
	const total = weight ? weight : 0 + oz;
	return total / 2.2;
}

console.log('convertWeight : ', convertWeight(6, 6))
// 2.727272727272727

console.log('convertWeight : ', convertWeight())
// 0