class Inimigo extends Animacao{
    constructor({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY, velocidade, delay){
        super({ imagem, largura, altura, larguraEmSprites, alturaEmSprites, numeroDeFrames }, x, deltaY)

        this.velocidade = velocidade
        this.delay = delay
        this.x = width + this.delay
    }

    move(){
        this.x -= this.velocidade

        if(this.x < - this.largura - this.delay){
            this.x = width;
        }
    }

    estaVisivel(){
        return this.x < - (this.largura)
    }
}