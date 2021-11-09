// 객체 리터럴을 반환하는 경우 화살표 함수는 소괄호로 객체 리터럴을 감싸줘야 한다.

const create = (id, content) => ({ id, content });
console.log(create(1, 'JavaScript'));
// { id: 1, content: 'JavaScript' }

// 위 표현은 다음과 동일
const create2 = (id, content) => { return { id, content }; };
console.log(create2(1, 'JavaScript'));
// { id: 1, content: 'JavaScript' }

const create3 = (id, content) => { id, content };
// { id, content }를 함수 몸체 내의 쉼표 연산자문으로 해석한다.
console.log(create3(1, 'JavaScript'));
// undefined