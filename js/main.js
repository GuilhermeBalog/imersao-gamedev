function setup() {
    createCanvas(960, 540)
    frameRate(40)

    // somDoJogo.loop()

    jogo = new Jogo()
    jogo.setup()
}

function keyPressed(){
    jogo.keyPressed(key)
}

function draw() {
    jogo.draw()
}
