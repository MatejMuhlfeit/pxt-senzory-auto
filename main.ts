pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

let leftArray = []
let centerArray = []
let rightArray = []


function control12(left: number = 0, right: number = 0) {
    let lw = (Math.map(left, -100, 100, -200, 200)) * -1
    let rw = (Math.map(right, -100, 100, -160, 160)) * -1
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rw)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, lw)
}
function turning(num: number = 0) {
    let rightTurn = 0
    let leftTurn = 0

    if (num === 1) {
        rightTurn = 1
    } else {
        leftTurn = 1
    }

}
let center: DigitalPin = DigitalPin.P15
let left: DigitalPin = DigitalPin.P14
let right: DigitalPin = DigitalPin.P13

let autoModeEnabled = true





basic.forever(function () {
    if (autoModeEnabled) {
        radio.onReceivedNumber(function (receivedNumber: number) {

        })

        let c = pins.digitalReadPin(center)
        let l = pins.digitalReadPin(left)
        let r = pins.digitalReadPin(right)

        if (c) {
            control12(100, 100)
        } else if (l) {
            control12(-40, 100)
        } else if (r) {
            control12(100 -40) 
        } else {
            control12(80, 80)
        }

    }


})
// input.onButtonPressed(Button.A, function() {
// PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
// PCAmotor.MotorRun(PCAmotor.Motors.M1, 190)

// })