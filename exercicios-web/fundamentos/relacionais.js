// resultados de true ou false
console.log('01)', '1' == 1)// compara o valor
console.log('02)', '1' === 1)// string e number
console.log('03)', '3' != 3) // compara o valor
console.log('04)', '3' !== 3) // compara o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
// compara referência de memoria
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())// os dois tem mesmo tipo e mesmo valor

console.log('12)', undefined == null) // é igual a?
console.log('13)', undefined === null)// é restritamente igual a?