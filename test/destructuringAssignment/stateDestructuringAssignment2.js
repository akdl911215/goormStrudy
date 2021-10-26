// 할당할 변수명은 생략 가능하다.
const bora = {
	name : '양보라',
	age : 28,
	gender : 'femail'
}

// const {
// 	name : name,
// 	age : age,
// 	gender : gender
// } = bora;

// console.log(name, age, gender)

// 위와 같은 코드에서 프로퍼티를 축양형으로 변경하면 다음과 같다

const {
	name,
	age,
	gender
} = bora;

console.log(name, age, gender)