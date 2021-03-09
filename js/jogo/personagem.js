class Personagem extends Animacao {
    constructor({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY, somDoPulo) {

        super({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY)

        this.yInicial = this.y

        this.somDoPulo = somDoPulo

        this.velocidadeDoPulo = 0
        this.alturaDoPulo = 50
        this.gravidade = 6
        this.maxPulos = 2
        this.pulosAcontecendo = 0

        this.estaInvensivel = false
    }

    pula() {
        if (this.pulosAcontecendo < this.maxPulos) {
            this.velocidadeDoPulo = - this.alturaDoPulo
            this.somDoPulo.play()
            this.pulosAcontecendo++
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if (this.y > this.yInicial) {
            this.y = this.yInicial
            this.pulosAcontecendo = 0
        }
    }

    tornarInvensivel() {
        this.estaInvensivel = true

        setTimeout(() => {
            this.estaInvensivel = false
        }, 1000)
    }

    estaColidindo(inimigo) {
        if (this.estaInvensivel) {
            return false
        }

        const precisao = 0.7

        if (degubMode) {
            noFill()
            stroke("red")
            circle(this.x + (this.largura / 2), this.y + (this.altura / 2), Math.max(this.largura, this.altura) * precisao)
            circle(inimigo.x + (inimigo.largura / 2), inimigo.y + (inimigo.altura / 2), Math.min(inimigo.largura, inimigo.altura) * precisao)
        }

        const colisao = collideCircleCircle(
            this.x + (this.largura / 2),
            this.y + (this.altura / 2),
            Math.max(this.largura, this.altura) * precisao,

            inimigo.x + (inimigo.largura / 2),
            inimigo.y + (inimigo.altura / 2),
            Math.min(inimigo.largura, inimigo.altura) * precisao
        )

        return colisao
    }
}
