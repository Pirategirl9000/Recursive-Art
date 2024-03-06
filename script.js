const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

function drawCell(x, y, d) {
    //x is x-location
    //y is y-location
    //d is the width and height because it's a square
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 10, 10);
    ctx.closePath();
}

drawCell(0, 0, 10);