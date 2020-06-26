let imagemCenario, imagemPersonagem, imagemNinja, cenario, somDoJogo, personagem

function preload(){
    imagemCenario = loadImage('./images/cenario/floresta.png')
    imagemPersonagem = loadImage('./images/personagem/correndo.png')
    // imagemNinja = loadImage('./images/personagem/ninja-correndo.png')
    somDoJogo = loadSound('./sounds/trilha_jogo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, 3)
    personagem = new Personagem(imagemPersonagem, 110, 135, 4, 4)
    // personagem = new Personagem(imagemNinja, 180, 248, 5, 2)
    frameRate(30)
    // somDoJogo.loop()
}

function draw() {
    cenario.exibe()
    cenario.move()

    personagem.exibe()
}

// background(int): escala de cinza
// background(int, int, int): r, g, b
// background(string): cor css
// background(imagem carregada)

