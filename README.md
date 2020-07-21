By Leandro de Paula
E-mail: leandrodepaula.ti@gmail.com
Linkedin: https://www.linkedin.com/in/leandro-de-paula/
Instagram: https://www.instagram.com/leandrodepaula12/

To do List (todo-list)

BACKEND project made in NODE.JS for CLI

Programa via terminal de um gerenciador de tarefas besado no conceito de CLI

Instruções de uso:

    

    Depois da clonagem na pasta raiz execute os seguintes comandos baseados nas seguintes instruções para criar, remover, listar, ler, ou autlizar uma tarefa.

    #Para executar configure as dependencias
    npm i

    #Os comandos seguem a seguinte grafica
    node app.js [ ... ]

    #Instruções de comandos no CLI
    app.js [comando]

    Comandos:
    app.js add     ADD a new task into the ToDo list
    app.js remove  REMOVE a task from the ToDo list
    app.js list    LIST all task into the ToDo list
    app.js read    READ a task into the ToDo list
    app.js update  UPDATE a task into the ToDo list

    Options:
    --help     Exibe ajuda                                              [booleano]
    --version  Exibe a versão                                           [booleano]

    Exemplo para adicionar uma tarefa

        app.js add

        ADD a new task into the ToDo list

        Options:
        --help         Exibe ajuda                                          [booleano]
        --version      Exibe a versão                                       [booleano]
        --name         Task New                                 [string] [obrigatório]
        --description  Task Description                         [string] [obrigatório]


        #Exemplo de codigo para dicionar uma tarefa:

            node app.js add --name="Fazer Compras" --description="Ir ao mercado e fazer a compra do mês"

    Obs: Use o --help entre os camandos para saber o que pode ser feito

