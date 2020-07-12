function foo(func, arg){
	func(arg);
}

foo(function(x){
	console.log("Coming from ES 5 value = "+x);
}, 2);

foo((x) => {
	console.log(`Coming from ES 6 value = ${x}`);
},2);
