#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function guessNumber(){
 type anstype = {
    userGuess: number
}   
let systemGeneratedNo = Math.floor(Math.random()*10);

const answer: any = await inquirer.prompt([
{ type: "number", name: "userguess", message: "Gusess a number between 1 to 10"}    
]);

const {userguess} = answer;

console.log("Your Guess:", userguess, "\nSystem's guess:",systemGeneratedNo);
if (userguess === systemGeneratedNo) {
    console.log(chalk.blueBright("Congratulation! Your answer is correct.\nYou Win!"))
} else {
    console.log(chalk.greenBright("Wrong Guess, Better luck next time!"))
};
}

async function startLoop() {
    let again;
    do {
        await guessNumber() ;
         again = await inquirer.prompt([
            { type: "list", name: "restart", choices:["Yes","No"], message: "Do you want to continue?"
    }]);
}while(again.restart == "Yes");
}
startLoop();

 

