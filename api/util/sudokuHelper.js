function getMatrizRows(boardContent) {
    const rows = [
        [],
        [],
        []
    ];
    //montando a linha de cada quadrado
    let i = 0;
    for (let index = 0; index < 9; index += 3) {
        for (let iLine = index; iLine < boardContent.length; iLine += 9) {
            rows[i].push(boardContent.slice(iLine, iLine + 3));
        }
        i++;
    }
    return rows;
};

function getMatrizData(squareRows) {
    const square = [];
    for (let index = 0; index < 9; index += 3) {
        for (let i = 0; i < 3; i++) {
            square.push(squareRows[i].slice(index, index + 3));
        }
    }
    return square;
};

function treatMatriz(array) {
    var newArray = array;

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i][0].concat(array[i][1], array[i][2]);

    }
    console.log(newArray);
    return newArray;
};

function reorderPuzzle(puzzle) {
    var newPuzzle;
    for (let i = 0; i < puzzle.length; i++) {
        const element = array[i];

    }
};

module.exports = {
    getMatriz: function(puzzle) { return treatMatriz(getMatrizData(getMatrizRows(puzzle))) },
    getMatrizRows: getMatrizRows,
    getMatrizData: getMatrizData,
    treatMatriz: treatMatriz,
    reorderPuzzle: reorderPuzzle
};