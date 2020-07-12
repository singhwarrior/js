//import * as math from "06-support" 
//console.log("2 PI = " + math.sum(PI,PI))

/**
	The above import and export is not working for ES6 but following
	require works fine.
**/
const math = require("./06-support");
console.log("TWICE of PI = " + math.sum(math.PI,math.PI));