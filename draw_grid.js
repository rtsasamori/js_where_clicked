console.log("Enter draw_grid.js"  + version);
const canvas = document.querySelector('canvas')
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8000";
// ctx.fillRect(0, 0, 150, 75);

// initialize array
for(let i = 0; i < divisions_y; i++) {
    for(let j = 0; j < divisions_x; j++) {
        board[i][j] = 0;
    }
}
board[1][2] = 1; // just for debug
console.log("board[1] = " + board[1]);

DrawGrid();

function DrawGrid() {
// draw array content
for(let i = 0; i < divisions_y; i++) {
    let y = i * cell_length_y;
    for(let j = 0; j < divisions_x; j++) {
        let x = j * cell_length_x;
        if(board[i][j] != 0) {
            ctx.fillRect(x, y, cell_length_x * 0.75, cell_length_y * 0.75);
        }
    }
}

// draw vertical grid lines
for(let i = 0; i < divisions_x; i++) {
    let x = i * cell_length_x;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, outer_box_y);
}
// draw horizontal grid lines
for(let i = 0; i < divisions_y; i++) {
    let y = i * cell_length_y;
    ctx.moveTo(0, y);
    ctx.lineTo(outer_box_x, y);
}
ctx.stroke();
}