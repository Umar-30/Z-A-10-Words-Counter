#! /usr/bin/env node
//Import the 'inquirer'
import inquirer from "inquirer";
//declare a constant "answers" and  assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word :"
    }
]);
const word = answer.sentence.trim().split(" ");
//print  the array of words 
console.log(word);
//print the word count of the sentence 
console.log(`Your sentence word count is ${word.length}`);
