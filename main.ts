input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
