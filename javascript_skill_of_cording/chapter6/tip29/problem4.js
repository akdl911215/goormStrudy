const landscape = {
	photographer: 'Nathan',
	equiment: 'Canon',
	format: 'digital',
}

const {
	photographer,
	...additional
} = landscape

console.log('photographer : ', photographer)


console.log('additional : ', additional)
// { equiment: 'Canon', format: 'digital' }