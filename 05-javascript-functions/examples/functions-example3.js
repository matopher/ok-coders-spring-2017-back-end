// howMany, count are global
var howMany = 'First';
var count = 1;// change 'count'to 2 will result in a different output


function myFirstFunction(num) {

	// cannot use 'num' outside of function
	console.log("this is my " + num + " function");
	num = 'Second';

	return num;
}

function counter() {
	if (count === 1) {
		count++;
		return "First";
	}

	return "Not First";
}

// use function as variable
myFirstFunction("First");
var result = myFirstFunction(counter());

console.log(result);