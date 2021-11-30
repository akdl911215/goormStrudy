function Person(name, age, age2) {
	this.name = name; // public
	let _age = age; // private
	this.age = age2;
	
	// 인스턴스 메서드
	this.sayHi = function () { 
		console.log(`Hi! My name is ${this.name}. I am ${_age}`);
	};
}

const me = new Person('LeeJungHyun', 20, 30);
me.sayHi() // Hi! My name is LeeJungHyun. I am 20
console.log(me.name); // LeeJungHyun
console.log(me._age); // undefind
console.log(me.age); // 30

const you = new Person('Kim', 10);
you.sayHi(); // Hi! My name is Kim. I am 10
console.log(you.name); // Kim
console.log(you._age) // undefind