/*=============================================
=               DEPENDENCIES                  =
=============================================*/
const express = require('express');
const router = express.Router();

/*----------  ROUTES WITHOUT MIDDLEWARE  ----------*/

/*=============================================
=               APP ROUTES                    =
=============================================*/



router.get('/', (req, res)=> {
    res.end('hola a todos');
})

/*----------  EXPORTS ROUTES  ----------*/
module.exports = router;
