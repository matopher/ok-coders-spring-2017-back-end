// howMany, count are global
var howMany = 'first';
var count = 1;
var myFunction = {};

myFunction.howMany = function(num) {

	// cannot use 'num' outside of function
	console.log("this is my " + num + " function");
	num = 'second';

	return num;
}

myFunction.count = function() {
	if (count === 1) {
		count++;
		return "first";
	}

	return "not First";
}

// use function as variable
myFunction.howMany(count());
var result = myFunction.howMany(myFunction.count());
myFunction.count()// undefined due to 'num' being a local variable

console.log(result);