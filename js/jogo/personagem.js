class Personagem{
    constructor(imagem, largura, altura, larguraDoSprite, alturaDoSprite){

        this.imagem = imagem

        this.larguraDoSprite = larguraDoSprite
        this.alturaDoSprite = alturaDoSprite
        
        this.largura = largura
        this.altura = altura

        this.larguraEmSprites = this.imagem.width / this.larguraDoSprite;
        this.alturaEmSprites = this.imagem.height / this.alturaDoSprite;

        this.x = 0
        this.y = height - this.altura
        
        this.frameAtual = 0
        
    }

    exibe(){
        const posicaoDoSprite = this.posicaoDoSprite()

        image(this.imagem, this.x, this.y, this.largura, this.altura, 
            posicaoDoSprite.x, posicaoDoSprite.y, this.larguraDoSprite, this.alturaDoSprite)

        this.anima()
    }

    anima(){
        this.frameAtual++;

        if(this.frameAtual >= this.larguraEmSprites * this.alturaEmSprites){
            this.frameAtual = 0
        }
    }

    posicaoDoSprite(){
        
        const x = (this.frameAtual % this.larguraEmSprites) * this.larguraDoSprite
        const y = parseInt(this.frameAtual / this.alturaEmSprites) * this.alturaDoSprite

        return { x, y }
    }
}