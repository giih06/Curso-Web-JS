// criei um array com 4 elementos
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])// primeiro e ultimo indíce do array
console.log(valores[4])// índice 4 do array

valores[4] = 10
console.log(valores)
console.log(valores.length)//tamanho do vetor

// misturando tipos de dados diferentes no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// remove o último valor do array
delete valores[0] // remove o primeiro elemento do array
console.log(valores)

console.log(typeof valores) // array tipo object