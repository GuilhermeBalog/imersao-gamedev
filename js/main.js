let imagemCenario 
let imagemPersonagem 
let imagemNinja 
let imagemInimigo
let cenario 
let somDoJogo
let somDoPulo 
let personagem
let inimigo

function preload(){
    imagemCenario = loadImage('../images/cenario/floresta.png')
    imagemPersonagem = loadImage('../images/personagem/correndo.png')
    // imagemNinja = loadImage('../images/personagem/ninja-correndo.png')
    imagemInimigo = loadImage('../images/inimigos/gotinha.png')
    somDoJogo = loadSound('../sounds/trilha_jogo.mp3')
    somDoPulo = loadSound('../sounds/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    cenario = new Cenario(imagemCenario, 3)
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
    cenario.exibe()
    cenario.move()

    personagem.exibe()
    personagem.aplicaGravidade()

    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)){
        console.log('Colidiu')
        noLoop()
    }
}
