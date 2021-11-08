var foo = function () {};

// ES6 이전의 모든 함수는 callable이면서 constructor다.
console.log('foo() : ', foo()) // undefined
console.log('new foo() : ', new foo()) // foo {}