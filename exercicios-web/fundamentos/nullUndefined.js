let valor // não inicializada
console.log(valor)// indefinida pois não foi atribuido nenhum valor

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // indefinido 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // deleta o undefined e o objeto volta a ser vazio
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)