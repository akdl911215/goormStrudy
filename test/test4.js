function Pen() {
	this._color = 0;
}

Object.defineProperties(Pen.prototype, {
	color: {
		get: function() {
			return this._color;
		},
		set: function(value) {
			this._color = value;
		}
	}
}); 

let pen = new Pen();
pen.color = ~pen.color;
console.log('pen.color : ', pen.color); 

pen.color += 1;
console.log('pen.color : ', pen.color); 