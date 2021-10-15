// function createGridDefault([width = 5, height = 5] ) {
// 	return `Generates a ${width} x ${height} grid`
// }

function createGridDefault([width = 5, height = 5] = []) {
	return `Generates a ${width} x ${height} grid`
}


// 기존의 방식대로 함수를 호출할때 []을 넣지 않으면 에러가 발생한다.
// 해결하기 위해 파라티머에 = [] 을 할당해주면 해결된다.
console.log("createGridDefault()) : " , createGridDefault())
// 기존 방식 : TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
// = [] 추가 방식 : Generates a 5 x 5 grid
