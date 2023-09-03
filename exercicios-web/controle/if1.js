function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) { // valor de true ou false
    if(valor) { // se o valor for true
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // undefined é false
seForVerdadeEuFalo(null) // null é false
seForVerdadeEuFalo(undefined) // undefined é false
seForVerdadeEuFalo(NaN) // NaN é false
seForVerdadeEuFalo('') // String vazia é false
seForVerdadeEuFalo(0) //  numero 0 é o único número false
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // string preenchida é true
seForVerdadeEuFalo('?') //  string preenchida é true
seForVerdadeEuFalo([]) // array vazio é true
seForVerdadeEuFalo([1, 2]) // array com elementos é true
seForVerdadeEuFalo({}) // Objet vazio é true