// 1. class 키워드와 static 키워드를 이용해서 정적 메소드를 선언하는 경우.
class StaticMethodCall {
	static staticMethod() {
		return 'Static method has been called';
	}
	static anotherStaticMethod() {
		return this.staticMethod() + ' from another static method';
	}
}

console.log(StaticMethodCall.staticMethod()); // Static method has been called
console.log(StaticMethodCall.anotherStaticMethod()); // Static method has been called from another static method

const instance = new StaticMethodCall();
// console.log(instance.staticMethod()); // TypeError: instance.staticMethod is not a function 