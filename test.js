function test(func, ...args){
	if(args.length === 1)
		func(args[0]);
	else if(args.length === 2)
		func(args[0], args[1]);
}

test((x) => {console.log(x)}, 2);
test((x,y) => {console.log(x*y)}, 2, 3);