/**Faz a manipulação de "Crud" das Task's 
 * Creat | Read | Update | Delete
*/

//Import de recursos
const fs = require("fs")/**install lodash -->  npm i lodash */
const chalk = require("chalk")


/**Setup for Display style: */

 //Branco(Withe)
 const infoTitleWhite = chalk.bold.white.inverse
 const infoTitle2White = chalk.white.inverse
 const infoSpotlightWhite = chalk.bold.white
 const infoWhite = chalk.white

 //Cinza(Gray)
 const infoTitleGray = chalk.bold.gray.inverse
 const infoTitle2Gray = chalk.gray.inverse
 const infoSpotlightGray = chalk.bold.gray
 const infoGray = chalk.gray

 //Azul(Blue)
 const infoTitleBlue = chalk.bold.blue.inverse
 const infoTitle2Blue = chalk.blue.inverse
 const infoSpotlightBlue = chalk.bold.blue
 const infoBlue = chalk.blue

 //Verde(Green)
 const infoTitleGreen = chalk.bold.green.inverse
 const infoTitle2Green = chalk.green.inverse
 const infoSpotlightGreen = chalk.bold.green
 const infoGreen = chalk.green

 //Amalero(Yellow)
 const infoTitleYellow = chalk.bold.yellow.inverse
 const infoTitle2Yellow = chalk.yellow.inverse
 const infoSpotlightYellow = chalk.bold.yellow
 const infoYellow = chalk.yellow

 //Vermelho(Red)
 const infoTitleRed = chalk.bold.red.inverse
 const infoTitle2Red = chalk.red.inverse
 const infoSpotlightRed = chalk.bold.red
 const infoRed = chalk.red



//Função responsavel por receber as informações de uma tarefa e cria um arquivo JSON
const addTask = (name, description) => {
    
    //Debugando o code com "debugger" na fonte e "inspect" no terminal, e visualisando no console Google Chrome(v8)
    debugger

    //Metodo para carregamento das Tarefas
    const tasks = loadAllTasks()
    
    //Metodo "find" para verificar duplicidade
    /** 
     * 
     const duplicatedTask = tasks.find(function(task) {
         
         return task.name === name

        })

        */

        const duplicatedTask = tasks.find((task) => task.name === name)
    
    if (!duplicatedTask) {
        //Criando Objeto JS para criar uma nova task
        const newTask = {
            name,
            description,
            status: "BACKLOG"
        }
        
        /**New elements of the Array.
         *Appends new elements to an array, and returns the new length of the array. 
         */
        tasks.push(newTask)
        
        //Metodo para gravar uma nova tarefa.
        saveTasks(tasks)
        
        //Mensagem para a operação realizada com sucesso.
        const successMessage = infoGreen("Task Created: " + infoSpotlightGreen(name))
        console.log(successMessage) 

    }else{
        //Mensagem para falha de execução da operação.
        const errorMessage = infoTitle2Red(`Task with name: [${name}] alread taken!`)
        console.log(errorMessage)
    }
    
    
}




//Função para gravar uma nova tarefa em arquivo JSON
const saveTasks = (task) => {
    //Converte o Objeto JS em JSON e armazena na constante taskJSON
    const tasksJSON = JSON.stringify(task) 
    //Grava os dados armazenados na const "taskJSON" no arquivo JSON "tasks.josn"
    fs.writeFileSync('tasks.json', tasksJSON)
}




//Função de carregamento das tarefas por método
const loadAllTasks = () => {
    //Ler todas as tarefas
    try {
        //Busca todas as tarefas dentro o arquivo "tasks.json" e armazena na constante "taskBuffer"
        const taskBuffer = fs.readFileSync("tasks.json")
        //Retorna a converção de JSON para Objeto JS
        return JSON.parse(taskBuffer.toString())
    } catch (error) {
        return []
    }
}




//Função que remove uma tarefa
const removeTask = (name) => {
    //Metodo para carregamento das Tarefas
    const tasks = loadAllTasks()

    /**
     *  const taskToKeep = tasks.filter(function(task) {
                return task.name !== name
            })//FILTER é um método do nodeJs
     */
    const taskToKeep = tasks.filter((task) => task.name !== name) //FILTER é um método do nodeJs

    saveTasks(taskToKeep)
    console.log(infoSpotlightGreen(`Task with name [${name}] has been removed!`))


}




//Função busca uma Task na lista
const findTask = function(name) {
    //Amarzena todas as tarefas na constante TASKS
    const tasks = loadAllTasks()

    //Busca a task dentro das tarefas
    const taskFound = tasks.find(function(task) {
        return task.name === name
    })

    if (taskFound !== undefined) {
        return taskFound
    } else {
        return {}
    }
}




//Função busca uma Task na lista
const updateTask = function(name, status) {
    //Amarzena todas as tarefas na constante TASKS
    const tasks = loadAllTasks()

    //Metodo MAP localiza a task correspondente
    /**
    tasks.map(function (task) {
     */
    tasks.find(function (task) {//FIND retorna assim que localiza a Task    
        if (task.name === name) {
            task.status = status
        }
    })

    saveTasks(tasks)
    console.log(infoSpotlightGreen(`Task status with name [${name}] has been update!`))
}


//Para exportar as funcionalidades de >>task.js<< "Exporta Objetos"
module.exports = {
    //Export function ADDTASK
    addTask,

    //Export function REMOVETASK
    removeTask,

    //Export function LOADALLTASKS
    loadAllTasks,

    //Export function FINTASK
    findTask,

    //Export UPDATETASK
    updateTask
}