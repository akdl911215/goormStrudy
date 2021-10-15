function defaultFunction(name, greeting) {
	name = (typeof name === 'undefined') ? 'Student' : name
	greeting = (typeof greeting === 'undefined') ? 'Welcome' : greeting
	
	return `${greeting} ${name}`
}

console.log('defaultFunction() : ', defaultFunction());
// Welcome Student
console.log("defaultFunction('JunHyun') : ", defaultFunction('JunHyun'))
// Welcome JunHyun
console.log("defaultFunction('JunHyun', 'Hello') : ", defaultFunction('JunHyun', 'Hello'))
// Hello JunHyun

function defaultFunction2(name = 'Student', greeting = 'Welcome') {
	return `${greeting} ${name}`
}

console.log('defaultFunction2() : ', defaultFunction2());
// Welcome Student
console.log("defaultFunction2('JunHyun') : ", defaultFunction2('JunHyun'))
// Welcome JunHyun
console.log("defaultFunction2('JunHyun', 'Hello') : ", defaultFunction2('JunHyun', 'Hello'))
// Hello JunHyun