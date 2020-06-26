class Inimigo extends Animacao{
    constructor(imagem, x, largura, altura, larguraEmSprites, alturaEmSprites){
        super(imagem, x, largura, altura, larguraEmSprites, alturaEmSprites)

        this.velocidade = 10
    }

    move(){
        this.x -= this.velocidade
        if(this.x < - this.largura){
            this.x = width;
        }
    }
}