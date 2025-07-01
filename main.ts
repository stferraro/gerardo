let contador = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(contador)
})
input.onSound(DetectedSound.Loud, function () {
    contador += 1
    basic.showNumber(contador)
    basic.showIcon(IconNames.Rabbit)
})
input.onButtonPressed(Button.B, function () {
    contador = 0
    basic.showNumber(contador)
})
