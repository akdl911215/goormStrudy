const num = 1;

function outerFunction() {
	const num = 10;
	
	function innerFunction() {
		console.log(num) // 10
	}
	
	innerFunction();
}

outerFunction();