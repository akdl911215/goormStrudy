// const arrow = () => const x = 1;
// console.log(arrow); // SyntaxError: Unexpected token const

// const arrow2 = () => { return const x = 1; };
// console.log(arrow2); // SyntaxError: Unexpected token const

const arrow3 = () => { const x = 1; };
console.log(arrow3) // [Function: arrow3]