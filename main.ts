/**
 * One 5 x 5 brightness matrix, stored row by row.
 */
function resetWorld () {
    world = [
    9,
    0,
    0,
    0,
    0,
    9,
    0,
    0,
    0,
    0,
    9,
    0,
    0,
    0,
    0,
    9,
    9,
    9,
    9,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    drawWorld()
}
input.onButtonPressed(Button.A, function () {
    mirrorWorld(true)
})
input.onButtonPressed(Button.B, function () {
    mirrorWorld(false)
})
input.onGesture(Gesture.Shake, function () {
    resetWorld()
})
function mirrorWorld (leftRight: boolean) {
    let nextWorld: number[] = []
    for (let row2 = 0; row2 <= 4; row2++) {
        for (let col2 = 0; col2 <= 4; col2++) {
            if (leftRight) {
                nextWorld.push(world[row2 * 5 + (4 - col2)])
            } else {
                nextWorld.push(world[(4 - row2) * 5 + col2])
            }
        }
    }
    world = nextWorld
    drawWorld()
}
function drawWorld () {
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            led.plotBrightness(col, row, Math.round(world[row * 5 + col] * 255 / 9))
        }
    }
}
let world: number[] = []
resetWorld()
