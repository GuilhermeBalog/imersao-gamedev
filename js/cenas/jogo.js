class Jogo{
    constructor(){
        this.inimigoAtual = 0 
    }

    setup(){
        for(let i = imagensParallax.length - 1; i >= 0; i--){
            camadas[i] = new Cenario(imagensParallax[i] , temposParallax[i])
        }

        pontuacao = new Pontuacao()

        personagem = new Personagem({
            imagem: imagemPersonagem,
            largura: 110,
            altura: 135,
            larguraEmSprites: 4,
            alturaEmSprites: 4,
        }, 0, 15, somDoPulo)

        const inimigo = new Inimigo({
            imagem: imagemInimigo,
            largura: 52,
            altura: 52,
            larguraEmSprites: 4,
            alturaEmSprites: 7
        }, width - 52, 15, 10, 100)

        const troll = new Inimigo({
            imagem: imagemTroll,
            largura: 200,
            altura: 200,
            larguraEmSprites: 5,
            alturaEmSprites: 6,
            numeroDeFrames: 28
        }, 2 * width, 0, 10, 100)

        const voador = new Inimigo({
            imagem: imagemVoador,
            largura: 100,
            altura: 75,
            larguraEmSprites: 3,
            alturaEmSprites: 6,
            numeroDeFrames: 16
        }, 3 * width, 200, 10, 100)

        inimigos.push(inimigo, troll, voador)
    }

    keyPressed(key){
        if(key == 'ArrowUp' || key == ' '){
            personagem.pula()
        }
    }

    draw() {
        for(let i = camadas.length - 1; i >= 0; i--){
            camadas[i].exibe()
            camadas[i].move()
        }
    
        personagem.exibe()
        personagem.aplicaGravidade()
    
        const inimigo = inimigos[this.inimigoAtual]
    
        inimigo.exibe()
        inimigo.move()
    
        if(inimigo.estaVisivel()){
            this.inimigoAtual = ++this.inimigoAtual % inimigos.length
            inimigo.velocidade = parseInt(random(10, 30))
        }
    
        if(personagem.estaColidindo(inimigo)){
            this.gameOver()
        }
    
        pontuacao.exibe()
        pontuacao.adicionarPonto()
    }

    gameOver(){    
        image(imagemGameOver, (width/2) - (imagemGameOver.width/2), (height/2) - (imagemGameOver.height/2))
    
        noLoop()
    }
}