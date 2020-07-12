var shapes = require('./07.01-class');

const ES6Shape = shapes.ES6Shape;

class ES6Circle extends ES6Shape{

	constructor(id, x, y, radius){
		super(id, x, y);
		this._radius = radius;
	}

	get radius() { return this._radius}
	set radius(radius) { this._radius = radius; } 
	area(){
		return this._radius * this._radius;
	}
	toString(){
		return "Circle > "+super.toString();
	}

	static defaultES6Circle(){
		return new ES6Circle(0, 0, 0, 1);
	}
}

var es6Circle = new ES6Circle(1, 2, 3, 2);
es6Circle.radius = 10;
console.log(es6Circle.radius);
console.log(es6Circle.area());

