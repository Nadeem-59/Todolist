#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let todolist = [];
let conditions = true;

console.log(chalk.red.bold("\n \welcome to my todolist\n "));
while(conditions){
    let addTask = await inquirer.prompt([
        {
          name : "task",
          type : "input",
          message : chalk.yellow( "Enter your new task"),

    }
]);
todolist.push(addTask.task);
console.log(chalk.green(`${addTask.task}task add in Todo_list successfully `));

    let addMoreTask = await inquirer.prompt([
       {
         name :"addMore",
         type :"confirm",
         message :"Do you want to add more task ",
         default : "False",

    }
]);
conditions = addMoreTask.addMore

    }
console.log(chalk.blue("your update Todo-list",todolist));