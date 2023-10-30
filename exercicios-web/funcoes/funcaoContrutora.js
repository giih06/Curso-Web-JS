// obs:  o this é responsável por tornar algo visível para fora da função e o let o torna privado

// "classe" carro
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributi privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar( )
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
