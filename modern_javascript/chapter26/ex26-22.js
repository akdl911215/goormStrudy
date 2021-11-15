// ES5
const test = [1, 2, 3].map(function (v) {
	return v * 2;
})
console.log('test : ', test);

// ES6
const test2 = [1, 2, 3].map(v => v * 2);
console.log('test2 : ', test2);