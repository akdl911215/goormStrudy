function createGridDefault([width = 5, height = 5]) {
	return `Generates a ${width} x ${height} grid`
}

console.log("createGridDefault([])) : " , createGridDefault([]))
// Generates a 5 x 5 grid
console.log("createGridDefault([1])) : " , createGridDefault([1]))
// Generates a 1 x 5 grid
console.log("createGridDefault([1,2])) : " , createGridDefault([1,2]))
// Generates a 1 x 2 grid
console.log("createGridDefault([undefined, 3])) : " , createGridDefault([undefined, 3]))
// Generates a 5 x 3 grid
console.log("createGridDefault([null, 4])) : " , createGridDefault([null, 4]))
// Generates a null x 4 grid
