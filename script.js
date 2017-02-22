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
/*
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
*/
// Functions Returning Functions
/*
function interviewQuestion(job) {
	if (job === "designer") {
		return function(name) {
			console.log(name + ", can you please explain what UX design is?");
		}
	}
	else if (job === "teacher") {
		return function(name) {
			console.log("What subject do you teach, " + name + "?");
		}
	}
	else if (job === "special forces operator") {
		return function(name) {
			console.log(name + ", how many confirmed kills do you have?");
		}
	}
	else {
		return function(name) {
			console.log("Hello, " + name + ". What do you do?");
		}
	}
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");


var designerQuestion = interviewQuestion("designer");
designerQuestion("Kate");
designerQuestion("Mark");
designerQuestion("Quentin");
designerQuestion("Liz");

var specialForcesQuestion = interviewQuestion("special forces operator");
specialForcesQuestion("Jack Bauer");

interviewQuestion("special forces operator")("Jack Bauer");
*/

// Immediately Invoked Function Expressions (IIFE)
/*
// Normal way:
function game() {
	var score = Math.random () * 10;
	console.log(score >= 5);
}

game();
*/
/*
// IIFE way:
(function() {
	var score = Math.random () * 10;
	console.log(score >= 5);
})();

// IIFE, with parameters and arguments:
(function(goodLuck) {
	var score = Math.random () * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/

// Closures
/*
function retirement(retirementAge) {
	var a = " years left until retirement.";
	return function(yearOfBirth) {
		var age = 2017 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

// Retirement age is 66 in the US, so:
var retirementUS = retirement(66);
// Now call this function and pass your birth year into it, and it will calculate how many years you have until retirement:
retirementUS(1979);

// Same thing, written a different way:
// retirement(66)(1979);

var retirementGermany = retirement(65);
retirementGermany(1979);

var retirementIceland = retirement(67);
retirementIceland(1979);
*/
// Interview questions rewritten using the power of closures:
/*
function interviewQuestion(job) {
	return function(name){
		if (job === "designer") {
			console.log(name + ", can you please explain what UX design is?");
		}
		else if (job === "teacher") {
			console.log("What subject do you teach, " + name + "?");
		}
		else if (job === "special forces operator") {
			console.log(name + ", how many confirmed kills do you have?");
		}
		else {
			console.log("Hello, " + name + ". What do you do?");
		}
	}
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");


var designerQuestion = interviewQuestion("designer");
designerQuestion("Kate");
designerQuestion("Mark");
designerQuestion("Quentin");
designerQuestion("Liz");

var specialForcesQuestion = interviewQuestion("special forces operator");
specialForcesQuestion("Jack Bauer");

interviewQuestion("primal scream therapist")("Smacky");
*/
// Bind, Call, Apply:
/*
var john = {
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function(style, timeOfDay) {
		if (style === "formal") {
			console.log("Good " + timeOfDay + ", ladies and gentlemen. I\'m " + this.name + ", and I\'m a " + this.job + " and I\'m " + this.age + " years old.");
		}
		else if (style === "friendly") {
			console.log("Hey, what\'s up? I\'m " + this.name + ". I\'m a " + this.age + "-year-old " + this.job + ". Have a good " + timeOfDay + ".");
		}
	}
};

john.presentation("formal", "morning");
john.presentation("friendly", "afternoon");

// Call:

var emily = {
	name: "Emily",
	age: 35,
	job: "designer"
}

// Set "this" parameter to the emily object instead of john using the CALL method:
john.presentation.call(emily, "friendly", "afternoon");
john.presentation.call(emily, "formal", "morning");

// Apply:
// Same thing, but using the APPLY method, which takes an array instead:
john.presentation.apply(emily, ["friendly", "afternoon"]);

// Bind:

var johnFriendly = john.presentation.bind(john, "friendly");
// Now you only need the last argument.
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
// And again, you only need to pass in the last argument:
emilyFormal("evening");
*/

/*
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

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// Coding Challenge:
/*
1. Build a function constructor called Question to describe a question:
	a. The question itself.
	b. The multiple choice answers (in an array, or object, etc.).
	c. The correct answer (use a number).
2. Create a couple of questions using the constructor.
3. Store them all inside an array.
4. Select one random question and log it on the console along with all the multiple choice answers. (Each question should have a number.)
	a. Hint: Write a method for the Question objects for this task.
5. Use the "prompt" function to ask the user for the correct answer. The user should input the number of the correct answer, as you displayed it in bullet point 4.
6. Check if the answer is correct and print the result (correct/incorrect) to the console.
	a. Hint: Write another method for this.
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers' code.
	a. Hint: We learned a special technique to do exactly that.

EXPERT LEVEL BONUSES:

8. After you display the result, display the next random question so that the game never ends.
	a. Hint: Write a function for this and call it right away after displaying the result.
9. Be careful. After #8, the game literally never ends. So include the option to quit the game if the user writes "exit" instead of the answer. In this case, DON'T call the function from #8.
10. Track the user's score so that each time they answer correctly, one point is added to their score.
	a. Hint: You can use the power of closures to do this.
11. Display the score in the console. Use another method for this.
*/

// Everything is inside an IIFE for data privacy and so as not to interfere with any other programmers' code:
(function() {
	// Function Constructor for Questions:
	var Question = function(q, choices, correct) {
		this.q = q;
		this.choices = choices;
		this.correct = correct;
	};

	// Method to display the randomly selected question in the console log:
	Question.prototype.displayQuestion = function() {
		console.log(this.q);
		for (var i = 0; i < this.choices.length; i ++) {
			console.log(i + ": " this.choices[i]);
		}
	}

	// Method to verify player's answer:
	Question.prototype.checkAnswer = function(ans) {
		if (ans == "exit") {
			console.log("Game Over. Score: " + score);
		}
		else if (ans == this.correct) {
			console.log("Correct!");
			scoring();
		}
		else {
			console.log("Sorry, that is incorrect.");
		}
	}

	// Questions to be passed into Function Constructor:
	var q1 = new Question("What year was JFK shot?", ["1961", "1962", "1963"], 2);
	var q2 = new Question("Where does Tucker Max hope they serve beer?", ["Heaven.", "Hell.", "His house."], 1);
	var q3 = new Question("What color is the water tower in Corcoran?", ["Red", "White", "There is no water tower in Corcoran!"], 2);

	// Array containing the questions to be passed into Function Contructor:
	var qArray = [q1, q2, q3];
	// Score Counter:
	var score = 0;

	function quiz() {
		// Generate random number between 0 and 2:
		var randomQ = qArray[Math.floor(Math.random() * qArray.length)]
		qArray[randomQ].displayQuestion();
		var questionPrompt = parseInt(prompt("Please type the number of the correct answer. Type \"exit\" to stop."));
		if (ans !== "exit") {
			qArray[randomQ].checkAnswer();
			quiz();
		}
	}
	
	function scoring() {
		score++;
		console.log("Score: " + score);
	}
	
	quiz();
})();







