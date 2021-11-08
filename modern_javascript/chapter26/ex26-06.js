// toUpperCase() 문자열을 대문자로 변환해 반환
console.log(String.prototype.toUpperCase.prototype); // undefined
console.log(String.prototype.toUpperCase.call); // [Function: call]

// String.fromCharCode() UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
console.log(String.fromCharCode.prototype); //
console.log(String.fromCharCode.call); // 
			
// toFixed() 숫자를 고정 소수점 표깁버으로 표기해 반환
console.log(Number.prototype.toFixed.prototype); //
console.log(Number.prototype.toFixed.call); //

//
console.log(Number.isFinite.prototype); //
console.log(Number.isFinite.call); //

//
console.log(Array.prototype.map.prototype); //
console.log(Array.prototype.map.call); //

//
console.log(Array.from.prototype);
console.log(Array.from.call);