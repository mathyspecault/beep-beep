function programme_5 () {
    if (input.buttonIsPressed(Button.A)) {
        N = 9
        while (N > 0) {
            basic.showNumber(N)
            N = N - 1
            basic.pause(1000)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        beep()
        beep()
    }
}
function programme4 () {
    po = pins.analogReadPin(AnalogPin.P0)
    LDR = pins.analogReadPin(AnalogPin.P1)
    if (LDR < po) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
}
function beep () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
function programm3 () {
    LDR = pins.analogReadPin(AnalogPin.P1)
    if (LDR > 145) {
        beep()
        beep()
    }
}
let LDR = 0
let po = 0
let N = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
	
})
