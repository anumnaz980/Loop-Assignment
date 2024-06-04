"use strict";
// Loops Assignments //
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// whether each lesson is running this year.
// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
// 3. Add the lesson to the a{}rray: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
// Hints:
// • Use a ternary operator to set the status property based on whether the lesson number is
// odd or even.
// • The modulo operator % can help determine if a number is even or odd.
let myWork = [];
for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 !== 0 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.
let maxValue = 50;
let randomNo = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random number for development purposes is ${randomNo}.`);
let userGuessIsCorrect = false;
let userPredefinedGuesses = [22, 31, 9, 27, 5, 39, 45];
let i = 0;
while (!userGuessIsCorrect && i < userPredefinedGuesses.length) {
    let guess = userPredefinedGuesses[i];
    console.log(guess);
    if (guess == randomNo) {
        console.log("Congratulations! you guess the correct number..");
        userGuessIsCorrect = true;
    }
    else if (guess > randomNo) {
        console.log("Your guess is too high!");
    }
    else {
        console.log("Your guess is too low!");
    }
    i++;
}
if (!userGuessIsCorrect) {
    console.log(`Sorry! your guess is wrong and the correct number is  ${randomNo}`);
}
// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow:
// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 100.
let counter = 0;
let step = 20;
do {
    console.log(`The counter number is ${counter}.`);
    counter += step;
} while (counter < 100);
console.log(`Th final counter number is ${counter}.`);
let myObject = {
    item1: "Bata",
    item2: "Service",
    item3: "Stylo",
};
for (let property in myObject) {
    console.log(`Property name is ${property} , Value name is ${myObject[property]}`);
}
// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.
// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.
let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i + 1);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log(`The element index of ${i} is ${myArray[i]}.`);
}
for (let element of myArray) {
    console.log(element);
}
