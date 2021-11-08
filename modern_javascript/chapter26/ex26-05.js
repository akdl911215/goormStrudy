const obj = {
	x: 1,
	
	// foo 는 메서드
	foo() { return this.x; },
	
	// bar에 바인딩된 함수는 메서드가 아닌 일반 함수
	bar: function() { return this.x; }
}

console.log(obj.foo()) // 1
console.log(obj.bar()) // 1

// console.log(new obj.foo()) // TypeError: obj.foo is not a constructor
console.log(new obj.bar()) // bar {}


// ES6 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
// obj.foo 는 constructor가 아닌 ES6 메서드이므로 protoype 프로퍼티가 없다.
console.log(obj.foo.hasOwnProperty('prototype')); // false
console.log(obj.bar.hasOwnProperty('prototype')); // true