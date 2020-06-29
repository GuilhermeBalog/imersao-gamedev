function preload(){
    imagemTelaInicial = loadImage('./images/assets/telaInicial.png')
    fonteTelaInicial = loadFont('./images/assets/fonteTelaInicial.otf')

    imagemPersonagem = loadImage('./images/personagem/correndo.png')

    imagemInimigo = loadImage('./images/inimigos/gotinha.png')
    imagemTroll = loadImage('./images/inimigos/troll.png')
    imagemVoador = loadImage('./images/inimigos/gotinha-voadora.png')

    imagemVida = loadImage('./images/assets/coracao.png')

    somDoJogo = loadSound('./sounds/trilha_jogo.mp3')
    somDoPulo = loadSound('./sounds/somPulo.mp3')

    for(let i = 0; i < 10; i++){
        imagensParallax[i] = loadImage(`./images/cenario/paralax/${i + 1}.png`)
    }

    imagemGameOver = loadImage('./images/assets/game-over.png')

    fita = loadJSON('./fita/fita.json')
}