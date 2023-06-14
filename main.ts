pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
pins.setPull(DigitalPin.P2, PinPullMode.PullNone);

radio.setGroup(50)
radio.setFrequencyBand(5)
radio.setTransmitPower(7)


let modeSwitch: number = 0;
let path: number = 1;
let crossroadSwitch: number = 0;

let ultrasonicSwitch: number = 0;
let ultrasonicON_OFF: number = 1;
let counting: number = 0;
let center: DigitalPin = DigitalPin.P15;
let left: DigitalPin = DigitalPin.P14;
let right: DigitalPin = DigitalPin.P13;

function control12(left: number = 0, right: number = 0) {
    let lw = (Math.map(left, -100, 100, -200, 200)) * -1
    let rw = (Math.map(right, -100, 100, -160, 160)) * -1
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rw)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, lw)
}
function turning(num: number = 0) {
if(num === 1){
    control12(-40, 100)
    turn = 0
} else if (num === 2 ) {
    control12(100 -40)
    turn = 0
} else {
    control12(100, 100)
    turn = 0
}


}


let autoModeEnabled = true
let turn = 0

 radio.onReceivedNumber(function (receivedNumber: number) {

    })



basic.forever(function () {
    if (autoModeEnabled) {

        let c = pins.digitalReadPin(center)
        let l = pins.digitalReadPin(left)
        let r = pins.digitalReadPin(right)

        if (c) {
            control12(60, 60)
        } else if (l) {
            control12(-40, 100)
        } else if (r) {
            control12(100, -40) 
        } else if (l === path && r === path){
            if(turn === 1){
                control12(100, -40)
            } else if (turn === 2){
                control12(-40, 100)
            } else {
                control12(60, 60)
            }
        } else if (l != path && r != path && c != path) {
            control12(-60, -60)
            basic.pause(250)
            PCAmotor.MotorStopAll

        } 

        

    }


})
// input.onButtonPressed(Button.A, function() {
// PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
// PCAmotor.MotorRun(PCAmotor.Motors.M1, 190)

// })