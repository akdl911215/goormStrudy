// 배열 해체할당 활용

// rest parameter 와의 연동
const arr = [1,2,3,4,5];
const [a, ...b] = arr;
const [, , ...c] = arr;

console.log(a, b, c)
// 1 [ 2, 3, 4, 5 ] [ 3, 4, 5 ]


// default parameter 와의 연동
const [d = 10, e = 20] = [undefined, 5]
console.log(d, e)
// 10 5

const [f, g = f * 2] = [5];
console.log(f, g)
// 10 5

// const [h = i, i] = [undefined, 10]
const [i, h = i] = [10, undefined]
console.log(h, i)
// i is not defined 