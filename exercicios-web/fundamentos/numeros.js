const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)

// verifoca se p valor de peso1 é inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.232
const avaliacao2 = 6.923

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// controla as casas decimais do resultado
console.log(media.toFixed(2))

// converte media para string
console.log(media.toString())

// converte media para binário
console.log(media.toString(2))

// valor do tipo media
console.log(typeof media)

console.log(typeof Number)