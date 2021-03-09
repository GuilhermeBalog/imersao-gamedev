function setup() {
    createCanvas(960, 540)
    frameRate(40)
    somDoJogo.loop()

    telaInicial = new TelaInicial()
    jogo = new Jogo()
    jogo.setup()

    cenas = { telaInicial, jogo }

}

function keyPressed() {
    cenas[cenaAtual].keyPressed(key)
}

function draw() {
    cenas[cenaAtual].draw()
}
