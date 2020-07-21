const chalk = require("chalk")
const yargs = require("yargs")
const task = require("./task")

//alterando a versão CLI
yargs.version("1.0.1")

/*Adicionar no buider description:
    Descrição do novo campo
    Adicionar tipo
    imprimir no console.log */

yargs.command({
    command: "add",
    describe:"ADD a new task into the ToDo list",
    builder:{
        name:{
            describe: "Task New",
            demandOption: true,
            type: "string"
        },

        description:{
            describe: "Task Description",
            demandOption: true,
            type: "string"
        }
    },
    handler:  (argv) => {
        console.time(chalk.gray('Request processed on'))
          const info = chalk.bold.green.inverse ("    Creating a new task:              ")
          console.log(info)
          task.addTask(argv.name, argv.description)
          console.timeEnd(chalk.gray('Request processed on'))
          
    }
})

yargs.command({
    command: "remove",
    describe:"REMOVE a task from the ToDo list",
    builder:{
        name:{
            description: "Task name on to be deleted",
            demandOption: true,
            type: "string"
        }
    },
    handler:  (argv) => {
        console.time(chalk.gray('Request processed on'))
        console.log(chalk.bold.red.inverse   ("    Removing task with success          "))
        task.removeTask(argv.name)
        console.timeEnd(chalk.gray('Request processed on'))
    }
})

yargs.command({
    command: "list",
    describe:"LIST all task into the ToDo list",
    handler:  () => {
        console.time(chalk.gray('Request processed on'))
        console.log(chalk.bold.yellow.inverse("    List all task with success          "))
        const allTasks = task.loadAllTasks()
        const allTasksJSON = JSON.stringify(allTasks, null, 2)
        console.log(allTasksJSON)
        console.timeEnd(chalk.gray('Request processed on'))
    }
})

yargs.command({
    command: "read",
    describe:"READ a task into the ToDo list",
    builder:{
        name:{
            describe: "Task find",
            demandOption: true,
            type: "string"
        }
    },
    handler:  (argv) => {
        console.time(chalk.gray('Request processed on'))
        console.log(chalk.bold.blue.inverse  ("    Reading a Task           "))
        const taskFound = task.findTask(argv.name)
        console.log(JSON.stringify(taskFound, null, 2))
        console.timeEnd(chalk.gray('Request processed on'))
    }
})

yargs.command({
    command: "update",
    describe:"UPDATE a task into the ToDo list",
    builder:{
        name:{
            describe: "Task name for updating",
            demandOption: true,
            type: "string"
        },

        status:{
            describe: "Altere o status",
            demandOption: true,
            type: "string"
        } 
    },
    handler:  (argv) => {
        console.time(chalk.gray('Request processed on'))
        console.log(chalk.bold.blue.inverse  ("    Update with success           "))
        task.updateTask(argv.name, argv.status)
        console.timeEnd(chalk.gray('Request processed on'))
    }
})

//add -> adicionar uma nova task
//remove -> remover a task
//list -> list all task
//read -> read a task

/*console.log(process.argv)
console.log(yargs.argv)*/

/*name: limpar Casa
description: limpar sala, limpar cozinha, limpar quarto ...
status: BACKLOG | IN_PROGRESS | DONE*/ 

yargs.parse()