const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

function drawCell(x, y, d) {
    //x is x-location
    //y is y-location
    //d is the width and height because it's a square
    ctx.beginPath();
    ctx.fillStyle = "blue";
    //d is divided by two because for some fucking reason it adds d to d when doing height
    ctx.fillRect(x, y, d, d/2);
    ctx.fill();
    ctx.closePath();
}

drawCell(0, 0, 20);