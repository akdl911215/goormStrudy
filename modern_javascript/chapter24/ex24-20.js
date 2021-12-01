var funcs = [];

for (var i = 0; i < 3; i++) {
	funcs[i] = function(){return i;}
	console.log(`funcs[${i}] : `, funcs[i])
}

console.log('funcs.length : ', funcs.length)
for (var j = 0; j < funcs.length; j++) {
	console.log(funcs[j]())
}