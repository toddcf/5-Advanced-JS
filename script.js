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
};

Person.prototype.calculateAge = function() {
	if (2017 - this.yearOfBirth === 1) {
		console.log(this.name + " is " + (2017 - this.yearOfBirth) + " year old.");
	}
	else {
		console.log(this.name + " is " + (2017 - this.yearOfBirth) + " years old.");
	}
}

var john = new Person("John", 1990, "teacher");
var todd = new Person("Todd", 1979, "coder");
var brenda = new Person("Brenda", 1978, "massage therapist");
var emma = new Person("Emma", 2016, "baby");

john.calculateAge();
todd.calculateAge();
brenda.calculateAge();
emma.calculateAge();

var Car = function(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var civic = new Car("Honda", "Civic", 2016);

console.log(todd.name + " drives a " + civic.year + " " + civic.make + " " + civic.model + ".");