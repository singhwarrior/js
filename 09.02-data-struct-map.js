let es6m = new Map(); 
es6m.set("key1","value1");
es6m.set("key2","value2");
console.log(es6m.get("key1"));
console.log(es6m.size === 2);
for(let [key, val] of es6m.entries()){
	console.log(key + "="+ val);
}


var es5m = {};
es5m["key1"] = "value1";
es5m["key2"] = "value2";
console.log(es5m["key1"]);
console.log(Object.keys(es5m).length === 2);
for(key in es5m){
	if(es5m.hasOwnProperty(key)){
		console.log(key+"="+es5m[key]);
	}
}

console.log();