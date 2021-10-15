### 
### python3 library to control: 
### - turntable
### - linear rail
### - tilt mechanism
### - zoom ring
### - focus ring
### - lights
### Reference Guide : 
### https://learn.adafruit.com/adafruit-dc-and-stepper-motor-hat-for-raspberry-pi
### Author : Ayan Pahwa <ayan@balena.io>
### Date : 13th October 2021
### Sample usage :
### rotate turntable 5 steps clockwise : turntable_clockwise (5)

from adafruit_motorkit import MotorKit
from time import sleep

### multiple motor hats can be stacked
### the default i2c address is 0x60
### solder the jumper before stacking to change i2c address

shield1_address = 0x60
#shield2_address = 0x61

kit = MotorKit(shield1_address)
#kit2 = MotorKit(shield2_address)

### turntable motor connected to M1 slot of the hat
turntable = kit.motor1
# linearRail = kit.motor2
# pan = kit.stepper1

### variables to hold degrees as a function of delay
### turntable motor rotates 5* with 0.5 sec delay at 50% throttle
### change values according to motor 
### following values are for DC geared motor 12V, 3.5RPM
### for stepper control refer guide above
turntable_throttle = 0.5
turntable_delay = 0.5
turntable_stop = 0

def turntable_rotate(speed):
    """
    rotate turntable constantly with given speed in a given direction
    speed should be between -1 and +1
    """
    turntable.throttle = speed

def turntable_stop():
    """
    stop the rotating turntable
    """
    turntable.throttle = 0

def turntable_clockwise(steps):
    """
    rotate turntable clockwise given steps
    """
    for i in range(steps):
        turntable.throttle = turntable_throttle
        sleep(turntable_delay)
        turntable_stop()
        sleep(turntable_delay)

def turntable_anticlockwise(steps):
    """
    rotate turntable anti-clockwise given steps
    """
    for i in range(steps):
        turntable.throttle = - (turntable_throttle)
        sleep(turntable_delay)
        turntable_stop()
        sleep(turntable_delay)