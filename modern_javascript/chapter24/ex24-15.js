// 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter = (function() {
	// 카운트 상태를 유지하기 위한 자유 변수
	let counter = 0;
	
	// 함수를 인수로 전달받는 클로저를 반환
	return function (predicate) {
		// 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
		counter = predicate(counter);
		return counter;
	}
}());

// 보조 함수 
function increase(num) {
	return ++num;
}

// 보조 함수
function decrease(num) {
	return num === 0 ? 0 : --num;
}

// 보조 함수를 전달하여 호출
// 자유 변수를 공유한다.
console.log(counter(increase)); // 1
console.log(counter(decrease)); // 0
console.log(counter(decrease)); // 0
console.log(counter(increase)); // 1