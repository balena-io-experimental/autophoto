# Python lib to control motors and lights

## Dependencies :

- enable i2c on RPi / Fin board
- sudo apt-get install -y python-smbus
- sudo apt-get install -y i2c-tools
- test HAT detection on address 0x60 using 
``` sudo i2cdetect -y 1 ```

## Usage:
- include the library in project
- to turn the turntable 5 steps clockwise:
    ``` turntable_clockwise(5) 
        5 = no of steps
        each step is 5 degree rotation
    ```
- to turn the turntable 5 steps anti-clockwise:
    ``` turntable_anticlockwise(3) 
        3 = no of steps
        each step is 5 degree rotation
    ```
- to turn constantly with a fixed speed:
    ```
    turntable_rotate(speed)
        speed is between -1 to +1 (+/- for CW and CCW direction)
    ```
    
- to stop a rotating turntable:
    ```
    turntable_stop()
    ```