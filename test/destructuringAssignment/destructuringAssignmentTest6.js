// 실행 안됨. 

// 값 교환하기
let a = 10;
let b = 20;
let temp = a;

a = b;
b = temp;

console.log(a, b)
// 20, 10

// ES6 해체할당 사용시
let cc = 10
let dd = 20

[cc, dd] = [dd, cc];
console.log(cc, dd)
// 20, 10