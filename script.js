// Function Constructor

/*
var john = {
	name: "John",
	yearOfBirth: 1990,
	job: "teacher"
};
*/

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.calculateAge = function() {
		console.log(this.name + " is " + (2017 - this.yearOfBirth) + " years old.");
	}
};

var john = new Person("John", 1990, "teacher");
console.log(john);

john.calculateAge();