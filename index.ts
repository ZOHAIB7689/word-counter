#! /usr/bin/env node


import inquirer from "inquirer"

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers : {

    Sentence :string 
} = await inquirer.prompt (
    {
        name : "Sentence",
        type : "input",
        message : "enter your sentence to count the word "
    }
)

const words = answers.Sentence.trim().split(" ")


// Print the array of words to console 


// Print the word of the sentence to the console
console.log (`Your sentence word count is${words.length}`)
