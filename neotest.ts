{
    let strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
    /*
    strip.setMatrix_8(
        neopixel.colorForLed_8(0xff0000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0xff0000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000),
        neopixel.colorForLed_8(0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    )
    */
    //strip.showChar("A", 0, 0, 0xfff000)
    strip.showText("HALLO Welt", 0xff0000, 1)
    //strip.show()
    /*
        strip.showRainbow();
        for (let i = 0; i <= strip.length(); i++) { 
            strip.rotate();
            strip.show();
            basic.pause(100)
        }
        
        strip.showColor(NeoPixelColors.Red)
        basic.pause(2000)
        strip.showColor(NeoPixelColors.Green)
        basic.pause(1000)
        for (let i = 0; i <= strip.length(); i++) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(100)
        }
        for (let i = 0; i <= strip.length(); i++) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(100)
        }
        let sub = strip.range(10, 20)
        sub.showColor(NeoPixelColors.Yellow);
        basic.pause(200);
    
        sub.showBarGraph(5, 10);
        basic.pause(200);
    
        let br = 100;
        strip.setBrightness(100);
        input.onButtonPressed(Button.B, () => {
            br = br + 20;
            if (br > 255) {
                br = 5;
            }
            strip.setBrightness(br);
        });
    
        let rotationMode = false;
        input.onButtonPressed(Button.A, () => {
            rotationMode = !rotationMode;
            if (rotationMode) {
                basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
                `);
            } else {
                basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `);
    
            }
        });
    
        while (true) {
            let x = input.acceleration(Dimension.X) >> 1
            let y = input.acceleration(Dimension.Y) >> 1
            let z = input.acceleration(Dimension.Z) >> 1
            if (rotationMode) {
                strip.rotate();
            } else {
                strip.setPixelColor(0, neopixel.rgb(x, y, -z));
                strip.shift(1);
            }
            strip.show();
            basic.pause(100);
        }
        */
}
