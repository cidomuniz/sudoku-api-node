'use strict';

exports.create_matriz = function(req, res) {
    var sudoku = require('../lib/sudoku');
    res.json(sudoku.makepuzzle());
};

exports.validate_matriz = function(req, res) {
    var sudoku = require('../lib/sudoku');
    res.json(sudoku.ratepuzzle(req.body.matriz));
};