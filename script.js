// // let tasks = [
// //     {id: 1 , descricao: "aula de js"},
// //     {id: 2 , descricao: "aula de html"},
// //     {id: 3 , descricao: "aula de python"}
// // ]


// // console.log(tasks[2])
// // console.log(tasks[1].descricao)


// // let tasksDescricao= ["aula de js", "aula de html", "aula de python"]
// // console.log(tasksDescricao[2])


// // let task = {}



// // let hoje = new Date()
// // console.log(hoje)

// // let amanha = new Date("03-29-2025")
// // console.log(amanha)


// // let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// // console.log(pattern.test("+55(11)99999-9999"))


// // let numero = 11

// // console.log(numero, typeof numero)

// // let numeroEmTexto = String(numero)

// // console.log(numeroEmTexto, typeof numeroEmTexto)

// // let numeroNaoInteiroTexto = "15.5"

// // console.log(numeroNaoInteiroTexto, typeof numeroNaoInteiroTexto)

// // let numeroNaoInteiroConvertido = parseFloat(numeroNaoInteiroTexto)

// // console.log(numeroNaoInteiroConvertido, typeof numeroNaoInteiroConvertido)



// // let a = 10
// // let b = 3

// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(a % b)
// // console.log(a ** b)

// // let contador = 0

// // let contador2 = 0

// // console.log(++contador)

// // console.log(contador2++)



// // let x = 10
// // console.log(x)
// // x += 5
// // console.log(x)



// // console.log(10 == "10")
// // console.log(10 === "10")

// // let idade = 20


// // let status = idade >= 18 ? "maior de idade": "menor de idade"

// // console.log(status)



// // let tarefaConcluida = true

// // if(tarefaConcluida) {
// //     console.log("A tarefa esta concluida")
// // } else {
// //     console.log("A tarefa não esta concluida")
// // }



// let diaSemana = "segunda"
// switch (diaSemana) {
//     case "segunda":
//         console.log("hoje é segunda-feira")
    
//         break;

//     case "terça":
//         console.log("hoje é terca-feira")
//         break;

//     case "quarta":
//         console.log("hoje é quarta-feira")
//         break;
    
//     case "quinta":
//         console.log("hoje é quinta-feira")
//         break;
    
//     case "sexta":
//         console.log("hoje é sexta-feira")
//         break;
//     default:
//         console.log("nao é um dia da semana")
    
//         break;
// }



// Aula  11/04

// let titulo = "Aprender JavaScript"


// let descricao = "Estudar Manipulação de string"

// console.log(titulo, typeof titulo)

// console.log(descricao, typeof descricao)

// console.log("Tamanho da variável titulo", titulo.length)

// console.log("Tamanho da variável descricao", descricao.length)


// console.log("primeiro caractere: ", titulo[0])

// console.log("primeiro caractere: ", descricao[0])

// console.log("ultimo caractere: ", titulo[titulo.length - 1])

// console.log("ultimo caractere: ", descricao[descricao.length - 1])

// const palavra = "palavra"

// console.log("caractere na posição 3", palavra.charAt(3))

// let titulo = "Aprender JavaScript"

// let categoria = "Estudo"

// let infoCompleta = "categoria: " + categoria + " - " + "titulo: " + titulo
// console.log(infoCompleta)

// let incoCompleta = `categoria: ${categoria} - titulo: ${titulo}`
// console.log(incoCompleta)


// let texto1 = "posição de JavaScript"

// console.log(texto1.indexOf("JavaScript"))

// console.log(texto1.includes("JavaScript"))

// console.log(texto1.startsWith("posição"))
// console.log(texto1.endsWith("JavaScript"))



// Função que trunca uma string se ela for maior que um tamanho máximo
// function truncarDescricao(texto, maxLength = 30) {
//     if (texto.length <= maxLength) {
//       return texto;
//     }
//     return texto.substring(0, maxLength) + "...";
//   }
  
//   let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
//   console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
//   console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));


// let texto = "javascript,programação,web,frontend"

// console.log("texto original", texto)

// console.log("texto original", texto.slice(0, 10))


// console.log("texto substring", texto.substring(0, 10))

// let arrayTags = texto.split(",")

// console.table(arrayTags) 
// console.log(arrayTags[0])

// console.log(arrayTags.join(","))


// const destacarTermo = (texto, termo) => {
//     if (!termo) return texto
//     const redex = new RegExp(`(${termo})`, "gi")
//     return texto.replace(redex, `**$&**`)


// }

// let busca = destacarTermo("Aprender JavaScript é muito legal", "JavaScript")
// console.log(busca)



// MATH 


// console.log(Math.PI)
// console.log(Math.E)


// const raio = 5


// const AreaCirculo = Math.PI * Math.pow(raio, 2)
// console.log(`Area do circulo com raio ${raio} é ${AreaCirculo}`)



// const numero = 9.7

// console.log(Math.round(numero))
// console.log(Math.floor(numero))
// console.log(Math.ceil(numero))
// console.log(Math.trunc(numero))


// const numeroAleatorioEntre = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min)

// }
// console.log(numeroAleatorioEntre(1, 100))

// console.log(Math.random())



// DATAS  


// const formatarData = (data) => {
    //     const dia = data.getDate().toString()
    //     const mes = (data.getMonth() + 1).toString()
    //     const ano = data.getFullYear()
    //     return `${dia}/${mes}/${ano}`
    // }
    
    // console.log(formatarData(hoje))
    // console.log(hoje.getDate())
    // console.log(hoje.getMonth())
    // console.log(hoje.getFullYear())
    
    // console.log(hoje)
    
//     const data = new Date()

// const adicionarDias = (data, dias) => {
//     const novaData = new Date(data)
//     novaData.setDate(data.getDate) + dias
//     return novaData
// }
// console.log(adicionarDias(data, 10))



// const dataFinal = new Date("05-11-2025")
// const diferencaMs = dataFinal - new Date()

// console.log(diferencaMs)

// const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24))
// console.log(diferencaDias)
