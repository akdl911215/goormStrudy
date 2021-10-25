// 다차원 배열에서의 동작
const arr = [1, [2, [3, 4], 5], 6]

const [a, [b, [ , c], ], d] = arr;
console.log(a, b, c, d)
// 1, 2, 4, 6 

const [e, [f], g] = [1, [2, [3, 4], 5], 6];
console.log(e, f, g)
///1, 2 ,6


