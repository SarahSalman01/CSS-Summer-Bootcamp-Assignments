// Task 1: Arrow Function Calculator

const calculateTotal = (price, taxPercentage, discountAmount) => {
    const tax = (price * taxPercentage) / 100;
    const total = price + tax - discountAmount;
    return total;
};

console.log("Task 1");
console.log(
    `Final Price: ${calculateTotal(1000, 10, 50)}`
);


// Task 2: Access Check

const isLoggedIn = true;
const hasActiveSubscription = false;
const guestToken = "guest123";

console.log("\nTask 2");

if ((isLoggedIn && hasActiveSubscription) || guestToken) {
    console.log("Access Granted!");
} else {
    console.log("Access Denied!");
}


// Task 3: Switch Statement

let dayOfWeek = "Wednesday";

console.log("\nTask 3");

switch (dayOfWeek) {

    case "Monday":
    case "Tuesday":
        console.log("Focus: Core JavaScript Study");
        break;

    case "Wednesday":
    case "Thursday":
        console.log("Focus: Practical Code Labs");
        break;

    case "Friday":
        console.log("Focus: Assignment Submission Review");
        break;

    default:
        console.log("Rest & Recovery Day");
}


// Task 4: Even Numbers

const numbers = [11, 45, 7, 22, 19, 98, 3, 50, 44, 10];

console.log("\nTask 4");

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        console.log(`even number found: ${numbers[i]}`);
    }

}