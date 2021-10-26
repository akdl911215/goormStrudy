const phone = {
	name : 'iPhone',
	color : undefined
}

const {
	name: n,
	version: v = '11edition',
	color: c = 'red'
} = phone
console.log(n, v, c)
// iPhone 11edition red

const {
	name,
	version = '11Pro',
	color = 'spce grey'
} = phone;
console.log(name, version, color)
// iPhone 11Pro spce grey

// name에는 'iPhone'값이 있으나 color는 undefined인 상태로 version: v = '11edition' version과 version을 매칭해서 값을 담으려고 할 때 version 값이 없으면 '11edition'을 할당하라고 default parameter를 사용한 것이다.

// 이러한 패턴은 서버에서 정보를 받는데 해당 정보가 있을 수도 있고 없을 수도 있는 정보(프로퍼티)가 있다면 default parameter를 이용하면 간단히 해결 할 수 있다. 다시 말해, 실무에서 통신할 때 유용하게 사용한다.