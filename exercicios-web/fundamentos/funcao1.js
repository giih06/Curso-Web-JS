// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
 
imprimirSoma(2, 3)
imprimirSoma(2) // 2 + b = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma() // NaN 

// Funcao com retorno
function soma(a, b = 1) { // b é um valor padrão
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())