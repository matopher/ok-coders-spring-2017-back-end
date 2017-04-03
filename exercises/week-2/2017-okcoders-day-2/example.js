var myFunction = {
	count : 1,

	first : function(num){
		console.log("this is my " + num + " function");
		num = 'Second';
		return num;
	},

	counter : function(){
		if(this.count === 1){ 
			this.count++;
			return "First"; 
		}
		return "Not First";
	}
};

myFunction.first(myFunction.counter());
var result = myFunction.first(myFunction.counter());

console.log(result);
