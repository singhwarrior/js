var shapes = require('./07.01-class');

const ES6Shape = shapes.ES6Shape;
const ES5Shape = shapes.ES5Shape;

//ES6 way of inheritence
class ES6Circle extends ES6Shape{
	constructor(id, x, y, radius){
		super(id,x,y);
		this.radius = radius;
	}

	area(){
		return this.radius * this.radius;
	}

	toString(){
		return "Circle > "+super.toString();
	}
}


//ES5 way of inheritence
function ES5Circle(id, x, y, radius){
	ES5Shape.call(this, id, x, y);
	this.raius = radius;
}

ES5Circle.prototype = Object.create(ES5Shape.prototype);
ES5Circle.prototype.constructor = ES5Circle;
ES5Circle.prototype.area = function(){
	return this.radius*this.radius;
}
ES5Circle.prototype.toString = function(){
	return "Circle > "+ ES5Shape.prototype.toString.call(this);
}


//Constructs and overriding and using the super class functions
var es6Circle = new ES6Circle(1,5,4,2);
var es5Circle = new ES5Circle(1,5,4,2);

console.log("ES6 Shape postition "+es6Circle.toString());
es6Circle.move(2,3);
console.log("ES6 Shape postition after movement dx=2 and dy=3 "+es6Circle.toString());

console.log("ES5 Shape postition "+es5Circle.toString());
es5Circle.move(2,3);
console.log("ES5 Shape postition after movement dx=2 and dy=3 "+es5Circle.toString());