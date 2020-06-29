class Inimigo extends Animacao{
    constructor({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY, velocidade){
        super({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY)

        this.velocidade = velocidade
        this.x = width
    }

    move(){
        this.x -= this.velocidade
    }

    jaPassou(){
        return this.x < - (this.largura)
    }

    aparecer(){
        this.x = width
    }
}