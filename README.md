# Meu Primeiro Jogo

Jogo desenvolvido durante a Imersão GameDev da [Alura](https://www.alura.com.br/)

O projeto é feito utilizando a biblioteca p5.js. Essa biblioteca funciona com 2 funções principais: `setup()` e `draw()`

A função `setup()` executa uma vez antes do jogo começar, nessa função normalmente são iniciadas as variáveis e os assets são carregados.

Já a função `draw()` é o *game loop*, executa sempre, de acordo com o *frameRate*.

## Algumas Anotações

Tipos de background

```js
background(150) // escala de cinza
background(63, 224, 212) // r, g, b
background("#3fe0d4") // cor css, em hexa ou rgb()

let imagem = loadImage('path/to/image')
background(imagem)
```

Tocar sons

```js
som = loadSound('path/to/sound')

som.play() // Toca uma vez
som.loop() // Toca em loop
```

## Créditos

Background por [DigitalMoons](https://digitalmoons.itch.io/parallax-forest-background)