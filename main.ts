pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

let leftArray = []
let centerArray = []
let rightArray = []


function control12(left: number = 0, right: number = 0) {
    let lw = (Math.map(left, -100, 100, -200, 200)) * -1
    let rw = (Math.map(right, -100, 100, -152, 152)) * -1
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rw)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, lw)
}

    let center: DigitalPin = DigitalPin.P15
    let left: DigitalPin = DigitalPin.P14
    let right: DigitalPin = DigitalPin.P13

    let autoModeEnabled = true
    let whiteLine = 0

   


basic.forever(function () {
    basic.pause(30)
if (autoModeEnabled){
    let c = (whiteLine ^ pins.digitalReadPin(center)) == 0 ? false : true
    let l = (whiteLine ^ pins.digitalReadPin(left)) == 0 ? false : true
    let r = (whiteLine ^ pins.digitalReadPin(right)) == 0 ? false : true



    // center1 = pins.digitalReadPin(center)
    // left1 = pins.digitalReadPin(left)
    // right1 = pins.digitalReadPin(right)

   if(c) {
       control12(100, 100)
   } else if (l) {
       control12(80, 100)
   } else if (r) {
       control12(100, 80)
   } else {
       control12(60, 60)
   }
   
   }

   
})





