/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}
/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2
}

/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF icon="\uf110" groups=["init", "colors", "basic", "matrix", "others"]
namespace neopixel {
    
    // Matrix sam

    /**
     * To be used as a shadow color picker block containing a custom array
     */
    //% blockId=brightColorNumberPicker block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='#ff0000' group="colors" weight=89
    //% value.fieldOptions.colours='["#000000","#ff0000","#ffa500","#ffff00","#00ff00","#0000ff","#00ffff","#ff00ff","#8a2be2","#ffffff"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker' 
    export function __colorNumberPicker(value: number) {
        return value;
    }

    // Create a class to hold variable length lists of colors. This also helps to keep color lists
    // from being used as function arguments to code blocks that shouldn't accept them
    export class ColorPattern {
        _colorList: Array<number>;

        constructor(val: Array<number>) {
            this._colorList = val.slice(0);
        }

        getColors(): Array<number> {
            return this._colorList;
        }
    }

    /**
     * Returns list of 8 color choices for the LEDs
    */
    //% blockId="color_for_led_8" block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8"
    //% weight=88 group="colors"
    //% c_1.shadow="brightColorNumberPicker"
    //% c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"
    //% c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"
    //% c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"
    //% c_8.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'
    //% c_2.defl='#000000'
    //% c_3.defl='#000000'
    //% c_4.defl='#000000'
    //% c_5.defl='#000000'
    //% c_6.defl='#000000'
    //% c_7.defl='#000000'
    //% c_8.defl='#000000'
    //% inlineInputMode=inline
    export function colorForLed_8(c_1: number, c_2: number, c_3: number, c_4: number, c_5: number, c_6: number, c_7: number, c_8: number): ColorPattern {
        return new ColorPattern([c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8]);
    }

    /**
     * Returns list of 16 color choices for the LEDs
     */
    //% blockId="color_for_led_16" block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8$c_9$c_10$c_11$c_12$c_13$c_14$c_15$c_16"
    //% weight=87 group="colors"
    //% c_1.shadow="brightColorNumberPicker"
    //% c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"
    //% c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"
    //% c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"
    //% c_8.shadow="brightColorNumberPicker"
    //% c_9.shadow="brightColorNumberPicker"
    //% c_10.shadow="brightColorNumberPicker"
    //% c_11.shadow="brightColorNumberPicker"
    //% c_12.shadow="brightColorNumberPicker"
    //% c_13.shadow="brightColorNumberPicker"
    //% c_14.shadow="brightColorNumberPicker"
    //% c_15.shadow="brightColorNumberPicker"
    //% c_16.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'
    //% c_2.defl='#000000'
    //% c_3.defl='#000000'
    //% c_4.defl='#000000'
    //% c_5.defl='#000000'
    //% c_6.defl='#000000'
    //% c_7.defl='#000000'
    //% c_8.defl='#000000'
    //% c_9.defl='#000000'
    //% c_10.defl='#000000'
    //% c_11.defl='#000000'
    //% c_12.defl='#000000'
    //% c_13.defl='#000000'
    //% c_14.defl='#000000'
    //% c_15.defl='#000000'
    //% c_16.defl='#000000'
    //% inlineInputMode=inline 
    export function colorForLed_16(c_1: number, c_2: number, c_3: number, c_4: number, c_5: number, c_6: number, c_7: number, c_8: number, c_9: number, c_10: number, c_11: number, c_12: number, c_13: number, c_14: number, c_15: number, c_16: number): ColorPattern {
        return new ColorPattern([c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15, c_16]);
    }

    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any
        font: number[];

        //% blockId="neopixel_set_matrix_color"
        //% block="%strip Set Matrix X: $x Y: $y Color: $rgb"
        //% rgb.shadow="brightColorNumberPicker"
        //% x.min=0 x.max=15
        //% y.min=0 y.max=15
        //% group="matrix" weight=60
        setMatrixColor_x_y(x: number, y: number, rgb: number) {
            if ((x >= 0 && x <= 15) && (y >= 0 && y <= 15)) {
                let i = 0;
                if (!(y % 2)) {
                    i = ((y + 1) * 16) - x - 1;
                }
                else {
                    i = (y * 16) + x;
                }
                this.setPixelColor(i, rgb);
            }
        }

        //% blockId="neopixel_set_matrix_8" block="Matrix %strip %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7"
        //% group="matrix" weight=68
        //% c_0.shadow=color_for_led_8
        //% c_1.shadow=color_for_led_8
        //% c_2.shadow=color_for_led_8
        //% c_3.shadow=color_for_led_8
        //% c_4.shadow=color_for_led_8
        //% c_5.shadow=color_for_led_8
        //% c_6.shadow=color_for_led_8
        //% c_7.shadow=color_for_led_8
        setMatrix_8(c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern, c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern): void {
            let color = [c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7]

            for (let y = 0; y < 8; y++) {

                for (let x = 0; x < 8; x++) {
                    this.setMatrixColor_x_y(x * 2, y * 2, color[y].getColors()[x])
                    this.setMatrixColor_x_y(x * 2 + 1, y * 2, color[y].getColors()[x])
                    this.setMatrixColor_x_y(x * 2, y * 2 + 1, color[y].getColors()[x])
                    this.setMatrixColor_x_y(x * 2 + 1, y * 2 + 1, color[y].getColors()[x])
                }
            }
            this.show();
        }

        //% blockId="neopixel_set_matrix_16" block="Matrix %strip %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7|%c_8|%c_9|%c_10|%c_11|%c_12|%c_13|%c_14|%c_15" weight=100
        //% group="matrix" weight=67
        //% c_0.shadow=color_for_led_16
        //% c_1.shadow=color_for_led_16
        //% c_2.shadow=color_for_led_16
        //% c_3.shadow=color_for_led_16
        //% c_4.shadow=color_for_led_16
        //% c_5.shadow=color_for_led_16
        //% c_6.shadow=color_for_led_16
        //% c_7.shadow=color_for_led_16
        //% c_8.shadow=color_for_led_16
        //% c_9.shadow=color_for_led_16
        //% c_10.shadow=color_for_led_16
        //% c_11.shadow=color_for_led_16
        //% c_12.shadow=color_for_led_16
        //% c_13.shadow=color_for_led_16
        //% c_14.shadow=color_for_led_16
        //% c_15.shadow=color_for_led_16
        setMatrix_16(c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern, c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern, c_8: ColorPattern, c_9: ColorPattern, c_10: ColorPattern, c_11: ColorPattern, c_12: ColorPattern, c_13: ColorPattern, c_14: ColorPattern, c_15: ColorPattern): void {
            let color = [c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15]

            for (let y = 0; y < 16; y++) {
                for (let x = 0; x < 16; x++) {
                    this.setMatrixColor_x_y(x, y, color[y].getColors()[x])
                }
            }
            this.show();
        }
      
        
        //% blockId="neopixel_clear_matrix"
        //% group=matrix weight=69
        //% block="%strip Clear Matrix"
        clearMatrix(): void {
            for (let y = 0; y < 16; y++) {
                for (let x = 0; x < 16; x++) {
                    this.setMatrixColor_x_y(x, y, 0x000000)
                }
            }
            this.show();
        }

        //% blockId="neopixel_show_char"
        showChar(str: string, xOffset: number, yOffset: number, color: number, show: boolean = true) {
            let offset = (str.charCodeAt(0) - 33) * 5
            for (let y = 0; y < 5; y++) {
                for (let x = 0; x < 5; x++) {
                    if (this.font[offset + y] & (1 << x)) {
                        let xPos = 4 - x + xOffset
                        let yPos = y + yOffset
                        this.setMatrixColor_x_y(xPos, yPos, color)
                    }
                }
            }
            if (show) {
                this.show()
            }
        }
        //% blockId="neopixel_show_text"
        //% group="matrix" weight=67
        //% block="%strip show Text $str Line: $line $color"
        //% line.min=0 line.max=1
        //% color.shadow="brightColorNumberPicker"
        showText(strMsg: string, color: number, line: number = 0) {
            let str = "  " + strMsg
            this.clear()
            let yPos = 7 * line
            let len = str.length * 5 + str.length - 1
            for (let pos = 0; pos < len; pos++) {
                // first char does not need any space
                this.showChar(str.charAt(0), 0 - pos, yPos, color, false)
                for (let char = 1; char < str.length; char++) {
                    this.showChar(str.charAt(char), char * 5 + 1 - pos, yPos, color, false)
                }
                this.show()
                basic.pause(150)
                this.clear()
            }
        }

        setMatrixColor_enlarge(xPos: number, yPos: number, xOffset: number, yOffset: number, rgb: number, scaleFactor: number = 1) {
            for (let x = 0; x < scaleFactor; x++) {
                for (let y = 0; y < scaleFactor; y++) {
                    this.setMatrixColor_x_y(xPos * scaleFactor + x + xOffset, yPos * scaleFactor + y + yOffset, rgb)
                }
            }
        }
        // not compatible with makecode beta
/*
        //% blockId=neopixel_set_image
        //% block="%strip display image %image| at x %row| y %col| in %rgb | with scale factor %scaleFactor"
        //% inlineInputMode=inline
        //% rgb.shadow=brightColorNumberPicker
        //% col.min=0 col.max=15
        //% row.min=0 row.max=15
        //% scaleFactor.defl=1
        //% scaleFactor.min=1 scaleFactor.max=3
        //% image.defl=null
        //% group=matrix
        setImage(image: Image, row: number, col: number, rgb: number, scaleFactor: number): void {
            if (image != null) {
                for (let x = 0; x < image.width(); x++) {
                    for (let y = 0; y < image.height(); y++) {
                        if (image.pixel(x, y)) {
                            this.setMatrixColor_enlarge(x, y, row, col, rgb, scaleFactor)
                        }
                    }
                }
                this.show()
            }
        }
*/
        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors" 
        //% weight=85
        //% parts="neopixel"
        //% group="others"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }


        /**
         * Shows a rainbow pattern on all LEDs. 
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue" 
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% group="others"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value|up to %high" 
        //% icon="\uf080"
        //% parts="neopixel"
        //% group="others"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = Math.idiv((value * n), high);
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        const b = Math.idiv(i * 255, n1);
                        this.setPixelColor(i, neopixel.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors" 
        //% weight=79
        //% group="basic"
        //% parts="neopixel" 
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
         */
        //% blockId=neopixel_set_matrix_width block="%strip|set matrix width %width"
        //% blockGap=8
        //% weight=5
        //% parts="neopixel" advanced=true
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_matrix_color" block="%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors" 
        //% weight=4
        //% parts="neopixel" advanced=true
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, this._matrixWidth);
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }

        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white" 
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        //% group="others"
        setPixelWhiteLED(pixeloffset: number, white: number): void {
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }

        /** 
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show" 
        //% weight=78 group="basic"
        //% parts="neopixel"
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixelClear" block="%strip|clear"
        //% weight=76
        //% parts="neopixel"
        //% group="basic"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length" blockGap=8
        //% weight=60 advanced=true
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" 
        //% weight=70 group="basic"
        //% parts="neopixel" 
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
        //% weight=58
        //% parts="neopixel" advanced=true
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid
                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))
                    : Math.idiv(255 * k * k, (mid * mid));
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
        //% parts="neopixel"
        //% blockSetVariable=range
        //% group="others"
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="neopixel"
        //% group="others"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        //% group="others"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        //% weight=9 blockId=neopixel_power block="%strip|power (mA)"
        //% advanced=true
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length(), 2) /* 0.5mA per neopixel */
                + Math.idiv(p * 433, 10000); /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% parts="neopixel"
    //% trackArgs=0,2
    //% blockSetVariable=strip
    //% group="init" weight=90
    export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(128)
        strip.setPin(pin)
        strip.font = [0x8, 0x8, 0x8, 0x0, 0x8, 0xa, 0x4a, 0x40, 0x0, 0x0, 0xa, 0x5f, 0xea, 0x5f, 0xea, 0xe, 0xd9, 0x2e, 0xd3, 0x6e, 0x19, 0x32, 0x44, 0x89, 0x33, 0xc, 0x92, 0x4c, 0x92, 0x4d, 0x8, 0x8, 0x0, 0x0, 0x0, 0x4, 0x88, 0x8, 0x8, 0x4, 0x8, 0x4, 0x84, 0x84, 0x88, 0x0, 0xa, 0x44, 0x8a, 0x40, 0x0, 0x4, 0x8e, 0xc4, 0x80, 0x0, 0x0, 0x0, 0x4, 0x88, 0x0, 0x0, 0xe, 0xc0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x0, 0x1, 0x22, 0x44, 0x88, 0x10, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x4, 0x8c, 0x84, 0x84, 0x8e, 0x1c, 0x82, 0x4c, 0x90, 0x1e, 0x1e, 0xc2, 0x44, 0x92, 0x4c, 0x6, 0xca, 0x52, 0x5f, 0xe2, 0x1f, 0xf0, 0x1e, 0xc1, 0x3e, 0x2, 0x44, 0x8e, 0xd1, 0x2e, 0x1f, 0xe2, 0x44, 0x88, 0x10, 0xe, 0xd1, 0x2e, 0xd1, 0x2e, 0xe, 0xd1, 0x2e, 0xc4, 0x88, 0x0, 0x8, 0x0, 0x8, 0x0, 0x0, 0x4, 0x80, 0x4, 0x88, 0x2, 0x44, 0x88, 0x4, 0x82, 0x0, 0xe, 0xc0, 0xe, 0xc0, 0x8, 0x4, 0x82, 0x44, 0x88, 0xe, 0xd1, 0x26, 0xc0, 0x4, 0xe, 0xd1, 0x35, 0xb3, 0x6c, 0xc, 0x92, 0x5e, 0xd2, 0x52, 0x1c, 0x92, 0x5c, 0x92, 0x5c, 0xe, 0xd0, 0x10, 0x10, 0xe, 0x1c, 0x92, 0x52, 0x52, 0x5c, 0x1e, 0xd0, 0x1c, 0x90, 0x1e, 0x1e, 0xd0, 0x1c, 0x90, 0x10, 0xe, 0xd0, 0x13, 0x71, 0x2e, 0x12, 0x52, 0x5e, 0xd2, 0x52, 0x1c, 0x88, 0x8, 0x8, 0x1c, 0x1f, 0xe2, 0x42, 0x52, 0x4c, 0x12, 0x54, 0x98, 0x14, 0x92, 0x10, 0x10, 0x10, 0x10, 0x1e, 0x11, 0x3b, 0x75, 0xb1, 0x31, 0x11, 0x39, 0x35, 0xb3, 0x71, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x1c, 0x92, 0x5c, 0x90, 0x10, 0xc, 0x92, 0x52, 0x4c, 0x86, 0x1c, 0x92, 0x5c, 0x92, 0x51, 0xe, 0xd0, 0xc, 0x82, 0x5c, 0x1f, 0xe4, 0x84, 0x84, 0x84, 0x12, 0x52, 0x52, 0x52, 0x4c, 0x11, 0x31, 0x31, 0x2a, 0x44, 0x11, 0x31, 0x35, 0xbb, 0x71, 0x12, 0x52, 0x4c, 0x92, 0x52, 0x11, 0x2a, 0x44, 0x84, 0x84, 0x1e, 0xc4, 0x88, 0x10, 0x1e, 0xe, 0xc8, 0x8, 0x8, 0xe, 0x10, 0x8, 0x4, 0x82, 0x41, 0xe, 0xc2, 0x42, 0x42, 0x4e, 0x4, 0x8a, 0x40, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1f, 0x8, 0x4, 0x80, 0x0, 0x0, 0x0, 0xe, 0xd2, 0x52, 0x4f, 0x10, 0x10, 0x1c, 0x92, 0x5c, 0x0, 0xe, 0xd0, 0x10, 0xe, 0x2, 0x42, 0x4e, 0xd2, 0x4e, 0xc, 0x92, 0x5c, 0x90, 0xe, 0x6, 0xc8, 0x1c, 0x88, 0x8, 0xe, 0xd2, 0x4e, 0xc2, 0x4c, 0x10, 0x10, 0x1c, 0x92, 0x52, 0x8, 0x0, 0x8, 0x8, 0x8, 0x2, 0x40, 0x2, 0x42, 0x4c, 0x10, 0x14, 0x98, 0x14, 0x92, 0x8, 0x8, 0x8, 0x8, 0x6, 0x0, 0x1b, 0x75, 0xb1, 0x31, 0x0, 0x1c, 0x92, 0x52, 0x52, 0x0, 0xc, 0x92, 0x52, 0x4c, 0x0, 0x1c, 0x92, 0x5c, 0x90, 0x0, 0xe, 0xd2, 0x4e, 0xc2, 0x0, 0xe, 0xd0, 0x10, 0x10, 0x0, 0x6, 0xc8, 0x4, 0x98, 0x8, 0x8, 0xe, 0xc8, 0x7, 0x0, 0x12, 0x52, 0x52, 0x4f, 0x0, 0x11, 0x31, 0x2a, 0x44, 0x0, 0x11, 0x31, 0x35, 0xbb, 0x0, 0x12, 0x4c, 0x8c, 0x92, 0x0, 0x11, 0x2a, 0x44, 0x98, 0x0, 0x1e, 0xc4, 0x88, 0x1e, 0x6, 0xc4, 0x8c, 0x84, 0x86, 0x8, 0x8, 0x8, 0x8, 0x8, 0x18, 0x8, 0xc, 0x88, 0x18, 0x0, 0x0, 0xc, 0x83, 0x60]
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    //% advanced=true
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=neopixelHSL block="hue %h|saturation %s|luminosity %l"
    //% group="others"
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
}
