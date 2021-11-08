const landscape = {
	src: '/landscape-nm.jpg',
}

const { src } = landscape
console.log('src  : ', src)
/// landscape-nm.jpg

const { src: url } = landscape
console.log('url : ', url)
// ReferenceError: src is not defined

// console.log('src : ', src)
// ReferenceError: src is not defined