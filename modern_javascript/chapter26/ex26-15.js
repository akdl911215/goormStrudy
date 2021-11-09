// concise body
const power = x => x ** 2;
console.log(power(4))

// 위 표현을 다음과 동일
// block body
const power2 = x => {return x ** 2};
console.log(power2(4));

