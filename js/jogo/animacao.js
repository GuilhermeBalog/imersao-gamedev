class Animacao{
    constructor(imagem, x, largura, altura, larguraEmSprites, alturaEmSprites){
        this.imagem = imagem

        this.largura = largura
        this.altura = altura

        this.larguraEmSprites = larguraEmSprites
        this.alturaEmSprites = alturaEmSprites

        this.x = x
        this.y = height - this.altura

        this.larguraDoSprite = Math.ceil(this.imagem.width / this.larguraEmSprites)
        this.alturaDoSprite = Math.ceil(this.imagem.height / this.alturaEmSprites)

        this.frameAtual = 0;
        this.maxFrames = this.larguraEmSprites * this.alturaEmSprites
    }

    exibe(){
        const posicaoDoSprite = this.posicaoDoSprite(this.frameAtual)

        image(this.imagem, this.x, this.y, this.largura, this.altura, 
            posicaoDoSprite.x, posicaoDoSprite.y, this.larguraDoSprite, this.alturaDoSprite)

        this.anima()
    }

    anima(){
        this.frameAtual = (this.frameAtual + 1) % this.maxFrames
    }

    posicaoDoSprite(frame){
        const x = (frame % this.larguraEmSprites) * this.larguraDoSprite
        const y = parseInt(frame / this.larguraEmSprites) * this.alturaDoSprite
        
        return { x, y }
    }

    
}