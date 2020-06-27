let imagemPersonagem 
let imagemNinja 
let imagemInimigo
let somDoJogo
let somDoPulo 
let personagem
let inimigo
let imagensParallax = []
let camadas = []

const temposParallax = [8, 6, 6, 5, 4, 3, 2, 1.5, 1, 0]

function preload(){
    imagemPersonagem = loadImage('../images/personagem/correndo.png')
    // imagemNinja = loadImage('../images/personagem/ninja-correndo.png')

    imagemInimigo = loadImage('../images/inimigos/gotinha.png')
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

    personagem = new Personagem(imagemPersonagem, 110, 135, 4, 4)
    inimigo = new Inimigo(imagemInimigo, width - 52, 52, 52, 4, 7)

    // personagem = new Personagem(imagemNinja, 180, 248, 5, 2)

    frameRate(40)

    // somDoJogo.loop()
}

function keyPressed(){
    if(key == 'ArrowUp' || key == ' '){
        personagem.pula()
        somDoPulo.play()
    }
}

function draw() {
    for(let i = camadas.length - 1; i >= 0; i--){
        camadas[i].exibe()
        camadas[i].move()
    }

    personagem.exibe()
    personagem.aplicaGravidade()

    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)){
        console.log('Colidiu')
        noLoop()
    }
}
