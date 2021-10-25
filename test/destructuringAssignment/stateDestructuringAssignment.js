// 객체 해체할당 사용방법
// 기본: { 추출할 프로퍼티명 : 할당하고자 하는 변수명 }

const junghyun = {
	name : '이정현',
	age : 31,
	gender : 'mail'
}

const {
	name : name2,
	age : age2,
	gender : gender2
} = junghyun

console.log(name2, age2, gender2)
// 이정현 31 mail

console.log(gender2, name2)
// mail 이정현


// 객체 해체할당에서는 객체에 인덱스가 없는 대신에 그 역할을 key가 한다.
// key를 매칭시켜서 변수에 담는 것이 객체 해체할당이다.
// 위에서 보면 name2, age2, gender2가 변수가 되고 name과 name을 매칭시켜서 '이정현'을 name2에 할당하게 되는 형태이다.

