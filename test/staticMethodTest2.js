// 2. 생성자 호출을 할 함수를 이용해서 구현하는 경우.
function StaticMethodCall() {};

StaticMethodCall.staticMethod = function () {
	return 'Static method has been called';
}

StaticMethodCall.anotherStaticMethod = function () { // this 키워드로 다른 static method에 접근.
	return this.staticMethod() + ' from another static method';
}

console.log(StaticMethodCall.staticMethod()); // Static method has been called
console.log(StaticMethodCall.anotherStaticMethod()); // Static method has been called from another static 

// 인스턴스화되면 정적 메소드는 사용이 불가능하다.
const instance = new StaticMethodCall();
instance.staticMethod(); // Uncaught TypeError: instance.staticMethod() is not a function