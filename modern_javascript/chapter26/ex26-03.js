// 프로퍼티 f에 바인딩된 함수는 callable이며 constructor다
let obj = {
	x: 10,
	f: function () { return this.x; }
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log('obj.f() : ', obj.f()) // 10

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
let bar = obj.f;
console.log('bar() : ', bar()) // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자함수로서 호출
console.log('new obj.f() : ', new obj.f()) // f {}