# 5-Advanced-JS

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