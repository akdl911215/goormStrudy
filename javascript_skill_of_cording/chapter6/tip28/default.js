function roundToDecimalPlace(number, decimalPlaces) {
 	const round = 10 ** decimalPlaces; // ** 거듭제곱
	return Math.round(number * round) / round;
}

function convertWeight(weight, ounces = 0, roundTo = 2){
	const total = weight + (ounces / 16)
	const conversion = total / 2.2;
	return roundToDecimalPlace(conversion, roundTo)
}

console.log('convertWeight : ', convertWeight(10))
// 4.55