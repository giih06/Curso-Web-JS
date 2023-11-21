const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no último elemento o array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona no índice 2, Botas e massa
console.log(pilotos)

// remover
pilotos.splice(3, 1) // no índice 3, remove um elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do índice 2 de piloto
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array começa a apartir do índice 1 até o 4 (o 4 não está incluso no novo array)
console.log(algunsPilotos2)