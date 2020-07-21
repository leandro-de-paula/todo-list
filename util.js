// criar uma funcao que recebe um paramentro
//log.txt
	//se o arquivo nao existe , deve-se criar o log.txt
	//se o arquivo existe, deve-se adicionar o conteudo enviado por par uma nova linha
//adicionar no log a data e hora que foi gravado o conteudo
	//data -> conteudo

const fs = require("fs")
const logfileName = "log.txt"



const log = (content) => {
	const currentDate = new Date()
	fs.appendFileSync(logfileName, `${currentDate} --> ${content}\n`)
}

module.exports = log