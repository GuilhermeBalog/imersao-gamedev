class Vida{
    constructor(maximo, inicial){
        this.maximo = maximo
        this.inicial = inicial
        this.vidas = inicial

        this.largura = 50
        this.altura = 50

        this.xInicial = 20
        this.y = 20
    }

    exibe(){
        for(let i = 0; i < this.vidas; i++){
            const margem = 10
            const posicao = this.xInicial + (i * (this.largura + margem))
            image(imagemVida, posicao, this.y, this.largura, this.altura)
        }
    }

    ganharVida(){
        if(this.vidas < this.maximo){
            this.vidas++
        }
    }

    perderVida(){
        this.vidas--
    }
}