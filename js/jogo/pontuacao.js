class Pontuacao{
    constructor(){
        this.pontos = 0
    }

    exibe(){
        textAlign(RIGHT)
        textSize(50)

        fill("#000")
        text(parseInt(this.pontos), width - 28, 52)

        fill("#fff")
        text(parseInt(this.pontos), width - 30, 50)
    }

    adicionarPonto(){
        this.pontos += 0.2
    }
}