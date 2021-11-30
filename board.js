// Bring a 2-D array into existence to avoid reference error
const board = [];
for(let i = 0; i < divisions_y; i++) {
    const board_in = new Array(divisions_x);
    board.push(board_in);
}
