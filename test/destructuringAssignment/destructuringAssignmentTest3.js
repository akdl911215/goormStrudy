// 해체할당의 장점은 원하는 것만 할당 할 수 있다
let colors = ['red', 'white', 'orange']
let [ , second ] = colors
let [ , , third ] = colors 
console.log(second)
// white
console.log(third)
// orange

// 우측에서 좌측 방향으로 펼쳐서 할당하는데 오른쪽에 있는 것들을 그대로 매칭해서 하나하나 할당하는 것이 destructuring assingment 이다. 매칭할대상이 없다면 undefined가 할당된다.

let colors2 = ['black', 'pink', 'green']
let [ , , first ] = colors2
console.log(first)
// green

let [ fruit ] = ['apple', 'banana', 'mellon']
console.log(fruit)
// apple