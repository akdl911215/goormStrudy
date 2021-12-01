const Person = (function () {
	let _age = 0; // private
	
	// 생성자 함수
	function Person(name, age) {
		this.name = name; // public
		_age = age;
	}
	
	// 프로토 메서드
	Person.prototype.sayHi = function () {
		console.log(`Hi! My anme is ${this.name}. I am ${_age}`);
	}
	
	// 생성자 함수를 반환
	return Person;
}());

const me = new Person('Lee', 20);
me.sayHi(); // Hi! My anme is Lee. I am 20
console.log(me.name); // Lee
console.log(me.age); // undefined

const you = new Person('Kim', 10);
you.sayHi(); // Hi! My anme is Kim. I am 10
console.log(you.name); // Kim
console.log(you.age); // undefined

me.sayHi() // 