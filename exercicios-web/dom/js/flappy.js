/*função que cria um novo elemento com parâmetros do nome da tag e nome da classe a ser criada*/
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

/*função que cria a barreira*/ 
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')/*cria um novo elemento div com a classe 'barreira'*/ 

    const borda = novoElemento('div', 'borda')/*a constante borda aponta para uma nova div com a classe 'borda*/ 
    const corpo = novoElemento('div', 'corpo')/*a constante corpo aponta para uma nova div com a classe 'corpo */ 

    this.elemento.appendChild(reversa ? corpo : borda) // se reversa for true primeiro o corpo. se for false primeiro a borda
    this.elemento.appendChild(reversa ? borda : corpo) // se reversa for true primeiro a borda. Se for false primeiro o corpo

    // função que altera a altura do corpo
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(false)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras') // this.elemento representa o elemento do DOM

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento) // adiciona dentro da div par de barreiras o elemento superior

    this.elemento.appendChild(this.inferior.elemento) // adiciona dentro da div par de barreiras o elemento inferior

    this.sortearAbertura = ( ) => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) // retorna exatamente a posição x da barreira
    this.setX = x => this.elemento.style.left = `${x}px` // altera o x a partir do x passado
    this.getLargura = () => this.elemento.clientWidth // pega a largura

    this.sortearAbertura() 
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 100)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {// altura do jogo, largura do jogo, abertura das barreiras, espaço entre as barreiras e o ponto central de quando o passarinho passar, contabilizar 1 pnt
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 // velocidade do deslocamento das barreiras
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio 
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()

        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true // quando o usuario pressionar qualquer tecla, voando será true
    window.onkeyup = e => voando = falsec// quando o usuario pressionar qualquer tecla, voando será false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) // o quanto o pássaro sobe quando voando for true e o qunato ele cai quando for false
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}
 
const barreiras = new Barreiras(700, 1200, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
}, 20) 