/*=============================================
=            Dependencies                     =
=============================================*/
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('../routes/routes');
const timeout = require('connect-timeout');

module.exports = function(app){
    /*----------  Config the maximum waiting time of a request  ----------*/
    app.use(timeout('30s', { respond: false }));

    /*----------  Config the app to accept JSON  ----------*/
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // /*----------  Config middleware top leveñ for time of a request  ----------*/
    // function haltOnTimedout (err, req, res, next) {
    //     if (!req.timedout){
    //         next()
    //     }else{
    //         res.status (408) .json ({
    //             'success': false,
    //             'message': 'Timeout',
    //             'status': '408',
    //             'content': 'Timeout'
    //         });
    //     }
    // }
    // app.use(haltOnTimedout)

    /*----------  ROUTES  ----------*/
    app.use('/',router);

    /*----------  URL NOT FOUND 404  ----------*/
    function redirectUnmatched(req, res) {
        res.redirect("/");
    }
    app.use(redirectUnmatched);

};
