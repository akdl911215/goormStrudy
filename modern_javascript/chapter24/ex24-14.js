// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(predicate) {
	// 카운트 상태를 유지하기 위한 자유 변수
	let counter = 0;
	
	// 클로저를 반환
	return function() {
		// 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
		counter = predicate(counter);
		return counter;
	};
}

// 보조 함수 
function increase(num) {
	return ++num;
}

// 보조 함수
function decrease(num) {
	return num > 0 ? --num : 0;
}

function decrease2(num) {
	return --num;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // 0
console.log(decreaser()); // 0
console.log(decreaser()); // 0

const decreaser2 = makeCounter(decrease2);
console.log(decreaser2()); // -1
console.log(decreaser2()); // -2