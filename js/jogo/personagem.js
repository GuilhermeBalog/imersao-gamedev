class Personagem extends Animacao{
    constructor({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY, somDoPulo){

        super({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY)

        this.yInicial = this.y

        this.somDoPulo = somDoPulo

        this.velocidadeDoPulo = 0
        this.alturaDoPulo = 50
        this.gravidade = 3
        this.maxPulos = 2
        this.pulosAcontecendo = 0

        this.estaInvensivel = false
    }

    pula(){
        if(this.pulosAcontecendo < this.maxPulos){
            this.velocidadeDoPulo =  - this.alturaDoPulo
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

    tornarInvensivel(){
        this.estaInvensivel = true

        setTimeout(() => {
            this.estaInvensivel = false
        }, 2000)
    }

    estaColidindo(inimigo){
        if(this.estaInvensivel){
            return false
        }

        const precisao = 0.7

        noFill()
        // stroke("#000")
        // rect(this.x, this.y, this.largura, this.altura)
        // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
        stroke("red")
        circle(this.x + (this.largura/2), this.y + (this.altura/2), Math.min(this.largura, this.altura))
        circle(inimigo.x + (inimigo.largura/2), inimigo.y + (inimigo.altura/2), Math.min(inimigo.largura, inimigo.altura))
        /*rect(
            this.x + (this.largura - (this.largura * precisao))/2, 
            this.y + (this.altura - (this.altura * precisao))/2, 
            this.largura * precisao, 
            this.altura * precisao
        )
        rect(
            inimigo.x + (inimigo.largura - (inimigo.largura * precisao))/2, 
            inimigo.y + (inimigo.altura - (inimigo.altura * precisao))/2, 
            inimigo.largura * precisao, 
            inimigo.altura * precisao
        )*/


        /*const colisao = collideRectRect(
            this.x + (this.largura * (1 - precisao))/2, 
            this.y + (this.altura * (1 - precisao))/2, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x + (inimigo.largura * (1 - precisao))/2, 
            inimigo.y + (inimigo.altura * (1 - precisao))/2, 
            inimigo.largura * precisao, 
            inimigo.altura * precisao
        )*/

        const colisao = collideCircleCircle(
            this.x + (this.largura/2), 
            this.y + (this.altura/2), 
            Math.min(this.largura, this.altura), 
            inimigo.x + (inimigo.largura/2), 
            inimigo.y + (inimigo.altura/2), 
            Math.min(inimigo.largura, inimigo.altura)
        )
        
        return colisao
    }
}
