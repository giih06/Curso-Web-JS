const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// for in ( percorre toda a array )
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// percorre todos os atributos de um objeto
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}