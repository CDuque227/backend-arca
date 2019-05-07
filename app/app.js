/*=============================================
=            DEPENDENCIES                     =
=============================================*/
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const express = require('express');

/*=============================================
=            INIT THE EXPRESS APP             =
=============================================*/
const app = express();

/*=============================================
=        SETTING THE APP MIDDLEWARES          =
=============================================*/
require('./config/middlewares')(app)

/*=============================================
=             EXPORT THE APP                  =
=============================================*/
module.exports = app;
