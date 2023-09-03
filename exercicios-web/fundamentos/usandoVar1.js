// criando uma variável var dentro de um bloco que não é uma função, fora daquele bloco, ela é visível
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// criado uma variável var dentro de um escopo de uma function, ela só é visível dentro da function 
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)