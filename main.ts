let motor_l = 0
let mapped_x = 0
let read_y = 0
let read_x = 0
let speed = 0
let mapped_y = 0
basic.showIcon(IconNames.Rabbit)
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    let motor_r = 0
    read_x = pins.analogReadPin(AnalogPin.P1)
    read_y = pins.analogReadPin(AnalogPin.P2)
    mapped_x = pins.map(
        read_x,
        0,
        1024,
        -255,
        255
    )
    mapped_y = pins.map(
        read_y,
        0,
        1024,
        -100,
        100
    )
    Math.clamp(0, 100, mapped_y)
    motor_l = mapped_y * mapped_x
    motor_r = mapped_y * mapped_x
    serial.writeNumbers([
        read_x,
        read_y,
        mapped_x,
        mapped_y,
        motor_l,
        motor_r
    ])
    basic.pause(100)
})
