// Function Constructor

/*
var john = {
	name: "John",
	yearOfBirth: 1990,
	job: "teacher"
};
*/

/*
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

Person.prototype.lastName = "Smith";

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
var rav = new Car("Toyota", "Rav4", 2002);

console.log(todd.name + " drives a " + civic.year + " " + civic.make + " " + civic.model + ".");
console.log(brenda.name + " drives a " + rav.year + " " + rav.make + " " + rav.model + ".");

console.log(john.name + " " + john.lastName);
console.log(todd.name + " " + todd.lastName);
*/

// Object.create
/*
var personProto = {
	calculateAge: function() {
		console.log(2017 - yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto,
{
	name: { value: "Jane" },
	yearOfBirth: {value: 1969 },
	job: {value: "designer" }
});
*/

// Primitive vs. Objects
/*
var a = 23;
var b = a;

// Now mutate var a:
a = 46;
console.log("A = " + a + " | B = " + b);

var obj1 = {
	name: "John",
	age: 26
};

var obj2 = obj1;

// Now mutate the age on Object 1:
obj1.age = 30;

console.log("Object 1 Age = " + obj1.age + " | Object 2 Age = " + obj2.age);

// Functions
var age = 27;
var obj = {
	name: "Jonas",
	city: "Lisbon"
};

// Now ue a function to mutate the object's data:
function change(a, b) {
	a = 30,
	b.city = "San Francisco";
}

change(age, obj);

console.log("Age = " + age + " | City = " + obj.city);
*/

// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2017 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	}
	else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);













