const person = (name => ({
	sayHi() {
		return `Hi? My name is ${name}.`;
	}
}))('Mr.Market');

console.log(person.sayHi());
// Hi? My name is Mr.Market.