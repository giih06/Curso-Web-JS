// IIFE -> Immediately Invoked Function Expression
// ela não precisa ser chamada para rodar(é imediatamente invocada)
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// semelhança entre a função IIFE 
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')