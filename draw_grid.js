console.log("Enter draw_grid.js"  + version);
const canvas = document.querySelector('canvas')
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8080";
ctx.fillRect(0, 0, 150, 75);

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);

for(let i = 0; i < divisions_x; i++) {
    let x = i * cell_length_x;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, outer_box_y);
}
for(let i = 0; i < divisions_y; i++) {
    let y = i * cell_length_y;
    ctx.moveTo(0, y);
    ctx.lineTo(outer_box_x, y);
}
ctx.stroke();