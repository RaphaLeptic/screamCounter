input.onButtonPressed(Button.A, function () {
    number += 1
    display.show(number)
})
let soundLevel = 0
let number = 0
let display: grove.TM1637 = null
display = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
basic.forever(function () {
    soundLevel = input.soundLevel()
    if (soundLevel > 75) {
        number += 1
        display.show(number)
    } else if (soundLevel > 125) {
        number += 2
        display.show(number)
    } else if (soundLevel > 175) {
        number += 3
        display.show(number)
    } else if (soundLevel > 225) {
        number += 5
        display.show(number)
    } else {
        soundLevel += 8
        display.show(number)
    }
    basic.pause(100)
})
