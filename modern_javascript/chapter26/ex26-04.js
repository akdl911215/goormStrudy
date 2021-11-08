// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로토타입을 생성한다.
let ESSixfunction = [1, 2, 3].map(function (item) {
	return item * 2
})

console.log('ESSixfunction : ', ESSixfunction)
// [ 2, 4, 6 ]