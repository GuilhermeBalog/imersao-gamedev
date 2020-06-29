function setup() {
    createCanvas(960, 540)
    frameRate(40)
    // somDoJogo.loop()

    // botaoGerenciador = new BotaoGerenciador("Start", width/2, height/2)

    telaInicial = new TelaInicial()
    jogo = new Jogo()
    jogo.setup()

    cenas = { telaInicial, jogo }

}

function keyPressed(){
    jogo.keyPressed(key)
}

function draw() {
    cenas[cenaAtual].draw()
}
