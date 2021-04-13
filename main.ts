let maxSound = 0
let number = 0
let soundLevel = 0
let display = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
let display2 = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    soundLevel = input.soundLevel()
    if (soundLevel < 50) {
        number += 0
        display.show(number)
    } else if (soundLevel > 50) {
        number += 1
        display.show(number)
    } else if (soundLevel > 100) {
        number += 3
        display.show(number)
    } else if (soundLevel > 200) {
        number += 5
        display.show(number)
    } else {
        number += 8
        display.show(number)
    }
    basic.pause(100)
    maxSound = 256
    soundLevel = soundLevel - 50
    soundLevel = soundLevel * 5
    soundLevel = Math.constrain(soundLevel, 0, maxSound)
    display2.showBarGraph(soundLevel, maxSound)
})
