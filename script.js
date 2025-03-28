// let tasks = [
//     {id: 1 , descricao: "aula de js"},
//     {id: 2 , descricao: "aula de html"},
//     {id: 3 , descricao: "aula de python"}
// ]


// console.log(tasks[2])
// console.log(tasks[1].descricao)


// let tasksDescricao= ["aula de js", "aula de html", "aula de python"]
// console.log(tasksDescricao[2])


// let task = {}



// let hoje = new Date()
// console.log(hoje)

// let amanha = new Date("03-29-2025")
// console.log(amanha)


// let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// console.log(pattern.test("+55(11)99999-9999"))


// let numero = 11

// console.log(numero, typeof numero)

// let numeroEmTexto = String(numero)

// console.log(numeroEmTexto, typeof numeroEmTexto)

// let numeroNaoInteiroTexto = "15.5"

// console.log(numeroNaoInteiroTexto, typeof numeroNaoInteiroTexto)

// let numeroNaoInteiroConvertido = parseFloat(numeroNaoInteiroTexto)

// console.log(numeroNaoInteiroConvertido, typeof numeroNaoInteiroConvertido)



// let a = 10
// let b = 3

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)

// let contador = 0

// let contador2 = 0

// console.log(++contador)

// console.log(contador2++)



// let x = 10
// console.log(x)
// x += 5
// console.log(x)



// console.log(10 == "10")
// console.log(10 === "10")

// let idade = 20


// let status = idade >= 18 ? "maior de idade": "menor de idade"

// console.log(status)



// let tarefaConcluida = true

// if(tarefaConcluida) {
//     console.log("A tarefa esta concluida")
// } else {
//     console.log("A tarefa não esta concluida")
// }



let diaSemana = "segunda"
switch (diaSemana) {
    case "segunda":
        console.log("hoje é segunda-feira")
    
        break;

    case "terça":
        console.log("hoje é terca-feira")
        break;

    case "quarta":
        console.log("hoje é quarta-feira")
        break;
    
    case "quinta":
        console.log("hoje é quinta-feira")
        break;
    
    case "sexta":
        console.log("hoje é sexta-feira")
        break;
    default:
        console.log("nao é um dia da semana")
    
        break;
}
