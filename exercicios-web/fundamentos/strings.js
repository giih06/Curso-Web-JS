const escola = "Cod3r"

// retorna a letra que está no índice 4 dentro da String
console.log(escola.charAt(4))

console.log(escola.charAt(5))

// unicode da letra que está no índice 3
console.log(escola.charCodeAt(3))

// existe o valor 3 dentro da constante escola?
console.log(escola.indexOf('3'))

// imprime do íncice 1 para frente
console.log(escola.substring(1))

// imprime do índice 0 até o índice 3
console.log(escola.substring(0, 3))

// Concatenação
console.log('Escola'.concat(escola).concat("!"))
console.log('Escola' + escola + "!")

// substitui o 3 pelo 'e'
console.log(escola.replace(3, 'e'))

// convertendo string em array
console.log('Ana,Maria,Pedro'.split(','))

