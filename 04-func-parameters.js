// Default Paremeters
function power(x=1, n=0){
	if(n === 0) return 1;
	if(x === 1) return 1;
	let pow = 1;
	for(let i=0; i<n; i++)
		pow = pow * x;
	return pow;
}


console.log(power());
console.log(power(2));
console.log(power(2,2));


// REST Parameters ...a in below example
function foo(x, y, ...a){
	console.log((x+y) * a.length);
}

function zoo(func, ...args){
	//console.log(args);
	//console.log(Object.getOwnPropertyNames(func));
	//console.log(func['length']);
	if(func['length'] !== args.length)
		throw new Error("Arguements mismatch");

	else{
		
		if(args.length > 4)
			throw new Error("Not supported for more than 4 arguments");
		if(args.length === 0)
			func();
		else if(args.length === 1)
			func(args[0]);
		else if(args.length === 2)
			func(args[0], args[1]);
		else if(args.length === 3)
			func(args[0], args[1], args[2]);
		else
			func(args[0], args[1], args[2], args[3]);

	}
}

zoo((x,y,z) =>{console.log(x*y+z);}, 2,3,3);

foo(2,3, "Hello", "Wrold", 3, 4);

// Spread Operators
var arr = [1,2,3];

function goo(...par){
	let tot = 0;
	console.log(par);
	for(let i=0; i<par[0].length; i++){
		console.log(par[0][i]);
	}
}

goo(arr);
