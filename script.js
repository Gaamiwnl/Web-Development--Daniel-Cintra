/*
console.log('Hello, world!');
console.info("info")



console.group("grupo de logs")
console.log("log 1")
console.log("log 2")
console.groupEnd()

console.time("Timer")
// ...algum processamento
console.timeEnd("Timer")

//comentario de uma linha


comentario de varias linhas


var antigo = "valor da variavel"

console.log(antigo)



let variavelMutavel = "valor que pode ser alterado"

const variavelImutavel = "valor que não pode ser alterado diretamente"

variavelMutavel = 1

console.log(variavelMutavel)

variavelImutavel = 2

console.log(variavelImutavel)
*/

// Tipos de dados primitivos

// let texto = "texto"
// console.log(typeof texto)
// let numero = 0
// console.log(typeof numero)
// let isCompleted = false
// console.log(typeof isCompleted)
// let semValor
// console.log(typeof semValor)
// let nulo = null
// console.log(typeof nulo)
// let uniqueId = Symbol("id")
// console.log(typeof uniqueId)
// let bigNumero = 999999999999999999n
// console.log(typeof bigNumero)


//Tipos de Dados Complexos


let tasks = [
    { id: 1, tarefa: "Estudar JavaScript"},
    { id: 2, tarefa: "Estudar HTML"},
    { id: 3, tarefa: "Estudar CSS"}

]

console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]['id'])


let hoje = new Date("2021/03/20")
console.log(hoje)

let pattern = /^[a-z]+$/i;

console.log(pattern)



