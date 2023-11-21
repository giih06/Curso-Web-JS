const nums = [1, 2, 3, 4, 5]

// map é uma função que cria um novo array que mexe na estrutura dso elementos do outro array , ex: multiplica todo o array por 2, soma cada elemento do array 1 unidade

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10 // recebe o elemento e soma 10
const triplo = e => e * 3 // recebe o elemento e miultiplica por 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`// transforma para real

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)