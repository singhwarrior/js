
{
	let temp = 1;
	{
		let temp = 2;
		console.log(temp);
	}
	console.log(temp);
}

{
	//var x = 2;
	{
		var x = 5;
		console.log(x);
	}
	console.log(x);
}

{
	function foo(){
		return 1;
	}

	console.log(foo() === 1);

	{
		function foo(){
			return 2; 
		}
		console.log(foo() === 1);
	}
	console.log(foo() === 2);	
}
