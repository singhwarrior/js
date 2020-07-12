console.log("FROM ES6")
var es6names = new Set();
es6names.add("Gaurav").add("Sunil").add("Manikandan");

console.log(es6names.has("Gaurav"));
console.log(es6names.size === 3);

for (let key of es6names.values())
	console.log(key);


console.log("FROM ES5")
var es5names = {};
es5names["Gaurav"] = true;
es5names["Sunil"] = true;
es5names["Manikandan"] = true;

console.log(Object.keys(es5names).length === 3)
console.log(es5names["Gaurav"] === true);

for(var key in es5names)
	console.log(key); 