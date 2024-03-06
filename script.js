const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

function drawTriangle(x, y, d) {
    if (y >= canvas.height) {return 1;}
    if (x >= canvas.width) {return drawTriangle(0, y + d, d/1.07);}
    //x is x-location
    //y is y-location
    //d is the width and height because it's a square
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(x, y);
    ctx.lineTo(x + d*2, y);
    ctx.lineTo(x + d, y + d);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.closePath();

    return drawTriangle(x + d*2, y, d);
}

drawTriangle(0, 0, 12);