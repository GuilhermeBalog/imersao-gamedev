let imagensParallax = []
let camadas = []

let imagemPersonagem
let imagemInimigo
let imagemTroll
let imagemVoador

let somDoJogo
let somDoPulo

let personagem

let pontuacao

const inimigos = []

const temposParallax = [8, 6, 6, 5, 4, 3, 2, 1.5, 1, 0]

function preload(){
    imagemPersonagem = loadImage('../images/personagem/correndo.png')

    imagemInimigo = loadImage('../images/inimigos/gotinha.png')
    imagemTroll = loadImage('../images/inimigos/troll.png')
    imagemVoador = loadImage('../images/inimigos/gotinha-voadora.png')

    somDoJogo = loadSound('../sounds/trilha_jogo.mp3')
    somDoPulo = loadSound('../sounds/somPulo.mp3')

    for(let i = 0; i < 10; i++){
        imagensParallax[i] = loadImage(`../images/cenario/paralax/${i + 1}.png`)
    }
}

function setup() {
    createCanvas(960, 540)

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
    }, width - 52, 15, 10, 200)

    const troll = new Inimigo({
        imagem: imagemTroll,
        largura: 200,
        altura: 200,
        larguraEmSprites: 5,
        alturaEmSprites: 6,
        numeroDeFrames: 28
    }, 2 * width, 0, 8, 500)

    const voador = new Inimigo({
        imagem: imagemVoador,
        largura: 100,
        altura: 75,
        larguraEmSprites: 3,
        alturaEmSprites: 6,
        numeroDeFrames: 16
    }, 3 * width, 200, 13, 2000)

    inimigos.push(inimigo, troll, voador)

    frameRate(40)

    // somDoJogo.loop()
}

function keyPressed(){
    if(key == 'ArrowUp' || key == ' '){
        personagem.pula()
    }
}

function draw() {
    for(let i = camadas.length - 1; i >= 0; i--){
        camadas[i].exibe()
        camadas[i].move()
    }

    personagem.exibe()
    personagem.aplicaGravidade()

    inimigos.forEach(inimigo => {
        inimigo.exibe()
        inimigo.move()

        if(personagem.estaColidindo(inimigo)){
            gameOver()
        }
    })

    pontuacao.exibe()
    pontuacao.adicionarPonto()
}

function gameOver(){
    textSize(30)
    textAlign(CENTER)

    fill("#000")
    text('GAME OVER', (width/2) + 2, (height/2) + 2)

    fill("#FFF")
    text('GAME OVER', width/2, height/2)

    noLoop()
}