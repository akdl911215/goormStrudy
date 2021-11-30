class StaticMethodCall {
	constructor() {
		console.log(StaticMethodCall.staticMethod());
	
	
		console.log(this.constructor.staticMethod());
	}
	
	static staticMethod() {
		return 'static method has been called.';
	}
}