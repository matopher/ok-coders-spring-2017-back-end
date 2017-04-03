// howMany is global
var howMany = 'First';

function MyFirstFunction() {
	console.log("this is my " + howMany + " function");
	howMany = 'Second';
}

MyFirstFunction();
MyFirstFunction();

console.log(howMany);