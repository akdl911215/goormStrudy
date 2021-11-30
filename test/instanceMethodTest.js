// 1. constructor 내부에 직접 프로퍼티와 메소드를 입력하여 모든 인스턴스가 아래 3개의 프로퍼티와 run, changeColor 메소드를 가지게 된다.
class Car {
	constructor(name, color, maxSpeed) {
		this.name = name;
		this.color = color;
		this.maxSpeed = maxSpeed;
		
		this.run = function() {
			return `The car ${this.name} is running with speed of ${this.maxSpeed}km/h/`;
		}
		
		this.change = function() {
			retunr `I'd like to change the color of the car from ${this.color} to red.`;
		}
	}
}

console.log(constructor('BMW', 'RED', 10000))
console.log(Car.constructor('BMW', 'RED', 10000).run)