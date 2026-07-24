
// Task 1: Variables & Type Conversion

let number = "80";

number = Number(number);

number += 10;

number++;

console.log("Task 1:");
console.log("Final Result:", number);

// Task 2: const & Truthy Check

const username = "Sarah";

console.log("\nTask 2:");

if (username) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("Please provide a username.");
}

// Task 3: Simple Grading System

let score = 88;

console.log("\nTask 3:");

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// Task 4: Number Multiplier

let base = 5;

console.log("\nTask 4:");

for (let i = 1; i <= 5; i++) {
    console.log(`${base} multiplied by ${i} is ${base * i}`);
}