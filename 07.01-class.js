/**
	Following is new way of creating classes
**/
class ES6Shape {
	constructor(id, x, y){
		this.id = id;
		this.x = x;
		this.y = y;
	}

	
	move(dx, dy) {
		this.x = this.x + dx;
		this.y = this.y + dy;
	}

	toString(){
		return `x = ${this.x} y = ${this.y}`;
	}
}

/**
	Old Way of creating class
**/
function ES5Shape(id, x, y){
	this.id = id;
	this.x = x;
	this.y = y;
	/*
	this.move = function(dx, dy){
		this.x = this.x + dx;
		this.y = this.y + dy;
	}
	this.toString = function(){
		return "x = "+this.x +" y = " + this.y;
	}
	*/
}

//Using prototype also it was possible

ES5Shape.prototype.move = function(dx, dy){
	this.x = this.x + dx;
	this.y = this.y + dy;
}

ES5Shape.prototype.toString = function(){
	return "x = "+this.x +" y = " + this.y; 
}


exports.ES6Shape = ES6Shape;
exports.ES5Shape = ES5Shape;

