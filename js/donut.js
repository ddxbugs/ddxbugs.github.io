window.onload = () => {
    loop()
}

class Donut{
    constructor() {

    }
}

const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')
const white = [255, 255, 255]
const black = [0, 0, 0]

const WIDTH = 400   // canvas width
const HEIGHT = 400  // canvas height
const TWOPI = 628   // 2*3.14
const x_separator = 10 // x spacing
const y_separator = 20  // y spacing
const cols = WIDTH / x_separator    // column width
const rows = HEIGHT / y_separator   // row width
const screen_size = rows * cols // canvas screen size
const x_offset = cols / 2   // x offset
const y_offset = rows / 2   // y offset
const theta_spacing = 10    // theta pi spacing
const phi_spacing = 1   // phi pi spacing

const chars = ".,-!:;=!*#$@"    // spinning donut char sprites 

var x_start, y_start = 0
var A, B = 0 // lagrange values animate donut spin

// canvas.style.height = HEIGHT
// canvas.style.width = WIDTH

var donut = new Donut()



function textDisplay(letter, x_start, y_start) {
    var text;

}

function loop() {

    setInterval(show, 1000,15)
    // spinning donut code goes here
    var b, c, d, e, f, g, h, D, l, m, n, t, x, z, y, o, N; 
    z = [0] * screen_size   // donut fills donut space
    b = [' '] * screen_size // background fills empty space
    
    for (int i = 0; i < TWOPI; i+= theta_spacing) {
        for(int j = 0; J < TWOPI; j+= phi_spacing) {

        }
    }
}

function show(){
    update();
    draw();
}