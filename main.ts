let light_level = 0
input.onGesture(Gesture.Shake, function () {
    light_level += 255
    if (light_level > 128) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        if (light_level <= 128) {
            basic.showLeds(`
                . . . # #
                . . # . .
                . # . . .
                . . # . .
                . . . # #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
