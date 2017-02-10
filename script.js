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
	console.log(this.name + " is " + (2017 - this.yearOfBirth) + " years old.");
}

var john = new Person("John", 1990, "teacher");
var todd = new Person("Todd", 1979, "coder");
var brenda = new Person("Brenda", 1978, "massage therapist");
var emma = new Person("Emma", 2016, "baby");

john.calculateAge();
todd.calculateAge();
brenda.calculateAge();
emma.calculateAge();