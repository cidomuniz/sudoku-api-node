'use strict';

exports.create_matriz = function(req, res) {
    var sudoku = require('../util/sudoku');
    var sudokuHelper = require('../util/sudokuHelper');
    res.json(sudokuHelper.getMatriz(sudoku.makepuzzle()));
};

exports.validate_matriz = function(req, res) {
    var sudoku = require('../util/sudoku');
    res.json(sudoku.ratepuzzle(req.body, 9));
};