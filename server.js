var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/gameRoutes'); //importing route
routes(app); //register the route
app.listen(port);

var sudokutest = require('./api/util/sudoku');

// console.log(sudokutest.ratepuzzle('[0,null,7,null,null,4,null,null,5,null,null,null,null,null,null,null,null,1,3,null,null,8,null,5,2,null,null,null,null,null,null,null,7,5,null,null,null,1,null,2,null,null,null,null,7,null,null,3,4,1,6,null,null,null,null,2,5,null,null,1,null,null,null,4,0,null,5,null,null,null,null,8,null,null,null,null,null,null,null,null,null]', 81));
// console.log(sudokutest.solvepuzzle('[0,null,7,null,null,4,null,null,5,null,null,null,null,null,null,null,null,1,3,null,null,8,null,5,2,null,null,null,null,null,null,null,7,5,null,null,null,1,null,2,null,null,null,null,7,null,null,3,4,1,6,null,null,null,null,2,5,null,null,1,null,null,null,4,0,null,5,null,null,null,null,8,null,null,null,null,null,null,null,null,null]'));

console.log('Sudoku API server started on: ' + port);