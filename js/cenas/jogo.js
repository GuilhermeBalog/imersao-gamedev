class Jogo{
    constructor(){
        this.indice = 0
        this.mapa = fita.mapa
    }

    setup(){
        for(let i = imagensParallax.length - 1; i >= 0; i--){
            camadas[i] = new Cenario(imagensParallax[i] , temposParallax[i])
        }

        pontuacao = new Pontuacao()
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

        personagem = new Personagem({
            imagem: imagemPersonagem,
            largura: 110,
            altura: 135,
            larguraEmSprites: 4,
            alturaEmSprites: 4,
        }, 0, 25, somDoPulo)

        const inimigo = new Inimigo({
            imagem: imagemInimigo,
            largura: 52,
            altura: 52,
            larguraEmSprites: 4,
            alturaEmSprites: 7
        }, width - 52, 25, 10)

        const troll = new Inimigo({
            imagem: imagemTroll,
            largura: 200,
            altura: 200,
            larguraEmSprites: 5,
            alturaEmSprites: 6,
            numeroDeFrames: 28
        }, 2 * width, 0, 10)

        const voador = new Inimigo({
            imagem: imagemVoador,
            largura: 100,
            altura: 75,
            larguraEmSprites: 3,
            alturaEmSprites: 6,
            numeroDeFrames: 16
        }, 3 * width, 200, 10)

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
    
        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo]
    
        inimigo.exibe()
        inimigo.move()
    
        if(inimigo.jaPassou()){
            this.indice = ++this.indice % this.mapa.length

            inimigo.velocidade = linhaAtual.velocidade
            inimigo.aparecer()
        }
    
        if(personagem.estaColidindo(inimigo)){
            vida.perderVida()

            if(vida.vidas <= 0){
                this.gameOver()
            }

            personagem.tornarInvensivel()
        }
    
        vida.exibe()
        pontuacao.exibe()
        pontuacao.adicionarPonto()
    }

    gameOver(){    
        image(imagemGameOver, (width/2) - (imagemGameOver.width/2), (height/2) - (imagemGameOver.height/2))
    
        noLoop()
    }
}