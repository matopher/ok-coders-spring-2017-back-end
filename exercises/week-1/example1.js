// howMany is global
var howMany = 'First';

function myFirstFunction(num) {

	// cannot use 'num' outside of function
	console.log("this is my " + num + " function");
	num = 'Second';

	return num;
}

myFirstFunction("First");
var result = myFirstFunction(howMany);

console.log(result);