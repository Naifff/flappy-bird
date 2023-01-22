let птичка: game.LedSprite = null
let пусто = 0
let препятствие: game.LedSprite[] = []
let играидет = false
input.onButtonPressed(Button.A, function () {
    птичка.move(-1)
})
function сделать_стенку () {
    пусто = randint(0, 4)
    препятствие = []
    for (let index = 0; index <= 4; index++) {
        if (index != пусто) {
            препятствие.push(game.createSprite(4, index))
        }
    }
    basic.pause(500)
}
input.onButtonPressed(Button.AB, function () {
    подготовка()
    играидет = true
    while (играидет) {
        сделать_стенку()
        двигать_стенку()
        проверка_координаты()
        удалить_стенку()
        basic.pause(500)
    }
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    птичка.move(1)
})
function подготовка () {
    птичка = game.createSprite(0, 2)
    птичка.set(LedSpriteProperty.Direction, 0)
    птичка.set(LedSpriteProperty.Blink, 300)
    game.setLife(5)
    game.setScore(0)
}
function двигать_стенку () {
    for (let index = 0; index < 4; index++) {
        for (let sprite of препятствие) {
            sprite.move(-1)
        }
        basic.pause(500)
    }
}
function удалить_стенку () {
    for (let sprite of препятствие) {
        sprite.delete()
    }
}
function проверка_координаты () {
    if (птичка.get(LedSpriteProperty.Y) == пусто) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
}
input.onGesture(Gesture.Shake, function () {
    играидет = false
})
basic.forever(function () {
	
})
