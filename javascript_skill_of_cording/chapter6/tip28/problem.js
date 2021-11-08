function roundToDecimalPlace(number, decimalPlaces) {
 	const round = 10 ** decimalPlaces; // ** 거듭제곱
	return Math.round(number * round) / round;
}

function convertWeight(weight, ounces, roundTo) {
	const oz = ounces / 16 || 0;
	const total = weight + oz;
	const conversion = total / 2.2;
	const round = roundTo === undefined ? 2 : roundTo;
	return roundToDecimalPlace(conversion, round);
}

console.log('convertWeight(weight, ounces, roundTo) : ', convertWeight(10, 0, 2))
// 4.55