class TelaInicial{
    setup(){
        console.log("Setup tela inicial")
    }

    keyPressed(){

    }

    draw(){
        this._imagemDeFundo()
        this._texto()
        this._botao()
    }
    
    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto(){
        textAlign(CENTER)
        textFont(fonteTelaInicial)

        textSize(45)
        text('As aventuras de', width/2, 110)

        textSize(75)
        text('Hipsta', width/2, 160)
    }

    _botao(){
        botaoGerenciador.y = height/ 7 * 6
        botaoGerenciador.draw()
    }
}