var shapes = require("./07.01-class");


class ES6Circle extends shapes.ES6Shape{
	constructor(id, x, y, radius){
		super(id, x, y);
		this.radius = radius;
	}

	area(){
		return this.radius * this.radius;
	}

}


function ES5Circle(id, x, y, radius){
	
	shapes.ES5Shape.call(this, id, x, y);
	this.radius = radius;

	/*
	this.area = function(){
		return this.radius * this.radius;
	}
	*/
	
}

ES5Circle.prototype = Object.create(shapes.ES5Shape.prototype);
ES5Circle.prototype.constructor = ES5Circle;
ES5Circle.prototype.area = function(){
	return this.radius*this.radius;
}


// Just using the Super class Shapes
var es6Shape = new shapes.ES6Shape(1, 5, 4);
es6Shape.move(2,2);
console.log("Generalized shape from ES6 = "+es6Shape);

var es5Shape = new shapes.ES5Shape(1, 5, 4);
es5Shape.move(2,2);
console.log("Generalized shape from ES5 = "+es5Shape);

var es6Circle = new ES6Circle(1,5,4,2);
console.log(`Area of circle from ES6 = ${es6Circle.area()} and position = ${es6Circle.toString()}`);

var es5Circle = new ES5Circle(1,5,4,2);
console.log(`Area of circle from ES5 = ${es5Circle.area()} and position = ${es5Circle.toString()}`);



