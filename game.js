#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t\tWelcome to Hashtech Coding - CLI Nunmber Guessing Game\n");
// math.floor = decimal values ko khatam karta hai round of karta hai
// math.random = khud se koi bhi number generate karta hai system *5 ka matlab 5 digit tak koi number suggest karna. aur jo bhi number ayega us mai 1 ko add karna means 0 nahi hoga
const randomNumber = Math.floor(Math.random() * 5 + 1);
const ans = await inquirer.prompt([
    {
        name: "GuessNumber",
        type: "number",
        message: "Enter any number of your choice (limit from 1 to 5): ",
    }
]);
if (ans.GuessNumber === randomNumber) {
    console.log("Congratulations! You guess the correct number.");
}
else {
    console.log("Sorry! bad luck. Try again.");
}
