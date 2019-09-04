'use strict';
module.exports = function(app) {
    var game = require("../controllers/gameController");

    //Game Routes
    app.route('/game')
        .get(game.create_matriz)
        .post(game.validate_matriz);
};