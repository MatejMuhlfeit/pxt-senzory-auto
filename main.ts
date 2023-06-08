pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

let leftArray = []
let centerArray = []
let rightArray = []


function control12(left: number = 0, right: number = 0) {
    let lw = (Math.map(left, -100, 100, -150, 150)) * -1
    let rw = (Math.map(right, -100, 100, -100, 100)) * -1
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rw)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, lw)
}

    let center: DigitalPin = DigitalPin.P15
    let left: DigitalPin = DigitalPin.P14
    let right: DigitalPin = DigitalPin.P13

    let autoModeEnabled = true
    

   


basic.forever(function () {
    basic.pause(30)
if (autoModeEnabled){
    

    let c = pins.digitalReadPin(center)
    let l = pins.digitalReadPin(left)
    let r = pins.digitalReadPin(right)

   if(c) {
       control12(60, 60 )
   } else if (l) {
       control12(-40, 60)
   } else if (r) {
       control12(60,-40)
   } else {
       control12(60, 60)
   }
   
   }

   
})
// input.onButtonPressed(Button.A, function() {
// PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
// PCAmotor.MotorRun(PCAmotor.Motors.M1, 190)

// })





