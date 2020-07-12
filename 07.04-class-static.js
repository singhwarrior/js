var shapes = require('./07.01-class');

const ES6Shape = shapes.ES6Shape;
const ES5Shape = shapes.ES5Shape;

class ES6Circle extends ES6Shape{
	constructor(id, x, y, radius){
		super(id, x, y);
		this.radius = radius;
	}

	toString(){
		return "Circle > "+super.toString();
	}

	static defaultES6Circle(){
		return new ES6Circle(0, 0, 0, 1);  
	}
}


function ES5Circle(id, x, y, radius){
	ES5Shape.call(this, id, x, y);
	this.radius = radius;
}

ES5Circle.prototype = Object.create(ES5Shape.prototype);
ES5Circle.prototype.constructor = ES5Circle;
ES5Circle.prototype.toString = function(){
	return "Circle > "+ES5Shape.prototype.toString.call(this);
}
ES5Circle.defaultES5Circle = function(){
	return new ES5Circle(0, 0, 0, 1);
}

var es6Circle = ES6Circle.defaultES6Circle();
var es5Circle = ES5Circle.defaultES5Circle();

console.log("ES6 "+es6Circle);
console.log("ES5 "+es5Circle);

es6Circle.move(2,2);
es5Circle.move(2,2);

console.log("ES6 Movement after dx=2 and dy=2 "+es6Circle);
console.log("ES5 Movement after dx=2 and dy=2 "+es5Circle);
