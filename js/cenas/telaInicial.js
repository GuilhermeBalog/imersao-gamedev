class TelaInicial{
    keyPressed(key){
        if(key == 'Enter'){
            cenaAtual = 'jogo'
        }
    }

    draw(){
        this._imagemDeFundo()
        this._texto()
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

        textSize(30)
        text('aperte enter para iniciar o jogo', width/2, 210)
    }
}