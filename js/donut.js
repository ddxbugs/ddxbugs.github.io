window.onload = () => {
    try {
        loop()
    } catch (err) {
        document.write(err)
    }
}

window.addEventListener("keydown", (event) => {
    // quit
    return
})

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

// TODO: fix bug screen = display.set_mode(WIDTH, HEIGHT)
// TODO; fix bug display_surface = display.set_mode(WIDTH, HEIGHT)
// canvas.style.height = HEIGHT
// canvas.style.width = WIDTH

// TODO: fix bug 'font.render(str(letter), True, white)
// TODO: fix bug 'display_surface.blit(text, (x_start, y_start))
function textDisplay(letter, x_start, y_start) {
    var text;

}

function loop() {
    // screen.fill(black)

    // TODO: bug fix setTimeout(show()=>({//update}))
    // setInterval(show, 1000/15) TODO: Debug and fix

    // spinning donut code goes here
    var b, c, d, e, f, g, h, D, l, m, n, t, x, z, y, o, N; 
    z = new Array(screen_size).fill(' ', 0, screen_size) // donut fills donut space
    b = new Array(screen_size).fill(' ', 0, screen_size) // background fills empty space

    for (var i = 0; i < TWOPI; i+= theta_spacing) {
        for(var j = 0; j < TWOPI; j+= phi_spacing) {
            c = math.sin(i)
            d = math.cos(j)
            e = math.sin(A)
            f = math.cos(j)
            g = math.cos(A)
            h = d + 2
            D = 1 / (c * h * e + f * g + 5)
            l = math.cos(i)
            m = math.cos(B)
            n = math.sin(B)
            t = c * h * g - f * e
            x = (x_offset + 40 * D * (l * h * m - t * n))
            y = (y_offset + 20 * D * (l * h * n + t * m))
            o = (x + cols * y) // z = x + Ay coord after rotation
            N = (8 * (f * e - c * d * g) * m - c * d * e - f * g - l * d * n)

            if (rows > y && y > 0 && cols > x && x > 0 && D > z[o]) {
                z[o] = D
                b[o] = chars[N > 0 ? N : 0]
            }
        }
    }
    if (y_start == rows * y_separator - y_separator) {
        y_start = 0
    }
    // render b luminance index
    for (var k = 0; k < b.length; k++) {
        A += 0.000005
        B += 0.000005
        if (k == 0 || k % cols) {
            textDisplay(b[k], x_start, y_start)
            x_start += x_separator
        } else {
            y_start += y_separator
            x_start = 0
            textDisplay(b[k], x_start, y_start)
            x_start += x_separator
        }
    }

    // TODO: implement update canvas display
    // update()
}

function show(){
    update();
    draw();
}