// toUpperCase() 문자열을 대문자로 변환해 반환
console.log(String.prototype.toUpperCase.prototype); // undefined
console.log(String.prototype.toUpperCase.call); // [Function: call]

// String.fromCharCode() UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
console.log(String.fromCharCode.prototype); // undefined
console.log(String.fromCharCode.call); // [Function: call]
			
// toFixed() 숫자를 고정 소수점 표깁버으로 표기해 반환
console.log(Number.prototype.toFixed.prototype); // undefined
console.log(Number.prototype.toFixed.call); // [Function: call]

// Number.isFinite() 주어진 값이 유한수인지 판별
console.log(Number.isFinite.prototype); // undefined
console.log(Number.isFinite.call); // [Function: call]

console.log(Array.prototype.map.prototype); // undefined
console.log(Array.prototype.map.call); // [Function: call]

console.log(Array.from.prototype); // undefined
console.log(Array.from.call // [Function: call]