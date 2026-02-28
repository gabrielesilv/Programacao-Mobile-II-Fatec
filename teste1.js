let pais = "Brasil"
console.log(pais)
console.log(typeof pais)

//vendo tipo de variável
let continente = "América do Sul"
console.log(continente)
console.log(typeof continente)

//template litel: identando com variável
let mensagem = `O  ${pais} fica na ${continente}`
console.log(mensagem)

    //operações

//exibir caractér específico
let texto = "JavaScript é uma linguagem de programação"
console.log(texto.charAt(4))

//exibir o primeiro índice de um texto específico
console.log(texto.indexOf("uma"))

//exibir o último índice de um texto específico
console.log(texto.lastIndexOf("programação"))

    //funções

let resultadoSoma

function soma(a,b){
    return a + b;
}

//outra forma de escrever uma função, atribuindo ela a uma variável
resultadoSoma = soma(1,2)
console.log(`O resultado da soma é: ${resultadoSoma}`)

let multiplicar = function(a,b){
    return a * b;
}
console.log(multiplicar(2,2))

    //Objetos

let usuario = {
    nome: "Geovana",
    idade: 23,
    email: "geovana@gmail.com"
}
console.log(typeof usuario)
console.log(`A ${usuario.nome} tem ${usuario.idade} anos`)

let carro = {
    marca: "Wolks",
    modelo: "T-cross",
    acelerar: function(){
        console.log("O carro está acelerando!")
    }
}

    //Vetores

let numeros = [1,2,3,4,5];
let misto = [1, "dois", true, {chave: "valor"}];

console.log(numeros[0])

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

console.log("------")

numeros.forEach(function(numero){
    console.log(numero)
})

console.log("------")

let dobro = numeros.map(function(numero){
    return numero * 2;
})
console.log(dobro)

console.log("------")

numeros.push(6, 7);
console.log(numeros)

console.log("------")

const numerais = [1,2,3];
//declarando 3 variáveis dentro de []
const [a,b,c] = numerais 
// a = numerais[0]
// b = numerais[1]
// c = numerais[2]
