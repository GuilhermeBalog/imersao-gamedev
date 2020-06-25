class Personagem{
    constructor(imagem, largura, altura, larguraEmSprites, alturaEmSprites){
        this.imagem = imagem

        this.largura = largura
        this.altura = altura
        
        this.larguraEmSprites = larguraEmSprites
        this.alturaEmSprites = alturaEmSprites

        this.larguraDoSprite = Math.ceil(this.imagem.width / this.larguraEmSprites)
        this.alturaDoSprite = Math.ceil(this.imagem.height / this.alturaEmSprites)

        this.x = 0
        this.y = height - this.altura
        
        this.frameAtual = 0
    }

    exibe(){
        const posicaoDoSprite = this.posicaoDoSprite(this.frameAtual)

        image(this.imagem, this.x, this.y, this.largura, this.altura, 
            posicaoDoSprite.x, posicaoDoSprite.y, this.larguraDoSprite, this.alturaDoSprite)

        this.anima()
    }

    anima(){
        this.frameAtual++
        if(this.frameAtual >= this.larguraEmSprites * this.alturaEmSprites){
            this.frameAtual = 0
        }
    }

    posicaoDoSprite(frame){
        const x = (frame % this.larguraEmSprites) * this.larguraDoSprite
        const y = parseInt(frame / this.larguraEmSprites) * this.alturaDoSprite
        
        return { x, y }
    }
}
