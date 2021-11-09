const base = {
	name: 'Lee',
	sayHi() {
		return `Hi! ${this.name}`;
	}
};
console.log(base)

const derived = {
	__proto__: base,
	// sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
	// sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
	// super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
	
	
	sayHi() {
		return `${super.sayHi()}. how are you doing?`;
	}
};

console.log(derived.sayHi()); 
// 