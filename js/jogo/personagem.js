class Personagem extends Animacao{
    constructor({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY, somDoPulo){

        super({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY)

        this.yInicial = this.y

        this.somDoPulo = somDoPulo

        this.velocidadeDoPulo = 0
        this.forcaDoPulo = 30
        this.gravidade = 3
        this.maxPulos = 2
        this.pulosAcontecendo = 0
    }

    pula(){
        if(this.pulosAcontecendo < this.maxPulos){
            this.velocidadeDoPulo =  - this.forcaDoPulo
            this.somDoPulo.play()
            this.pulosAcontecendo++
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.pulosAcontecendo = 0
        }
    }

    estaColidindo(inimigo){
        // noFill()
        // rect(this.x, this.y, this.largura, this.altura)
        // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
        // circle(this.x + (this.largura/2), this.y + (this.altura/2), Math.max(this.largura, this.altura))

        const precisao = 0.7

        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x, 
            inimigo.y, 
            inimigo.largura * precisao, 
            inimigo.altura * precisao
        )
        
        return colisao
    }
}
